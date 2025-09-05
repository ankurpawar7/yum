// index.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");
const cors = require("cors");

// Models & Routes
const User = require("./models/User");
const authRoutes = require("./routes/auth");
const recipeRoutes = require("./routes/recipe");

const app = express();

// --- Middleware
app.use(
  cors({
    origin: "http://localhost:3000", // restrict to frontend origin
    credentials: true,
  })
);
app.use(express.json());
app.use(passport.initialize());

// --- MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ankurpawar7:Ankurpawar@1234@cluster0.oyufg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
if (!MONGODB_URI) {
  console.error("MONGODB_URI missing in .env");
  process.exit(1); // Stop app if DB not configured
}

mongoose.set('strictQuery', false);  

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => {
    console.error("Error while connecting to Mongo:", err.message);
    process.exit(1); // Exit if DB connection fails
  });

// --- Passport JWT Setup
const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET || "fallbackSecret",
};

passport.use(
  new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
      const user = await User.findById(jwt_payload.identifier);
      if (user) return done(null, user);
      return done(null, false);
    } catch (err) {
      return done(err, false);
    }
  })
);

// --- Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World - Backend is running" });
});
app.use("/auth", authRoutes);
app.use("/recipe", recipeRoutes);

// --- Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
