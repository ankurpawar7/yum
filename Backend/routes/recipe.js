const express = require("express");
const router = express.Router();
const passport = require("passport");
const Recipe = require("../models/recipe");
const User = require("../models/User");

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { name, thumbnail, track } = req.body; // 'track' could be replaced with 'instructions' or similar
        if (!name || !thumbnail || !track) {
            return res.status(400).json({ err: "Insufficient details to create recipe." });
        }
        const creator = req.user._id; // Changed variable name for clarity
        const recipeDetails = { name, thumbnail, track, creator }; // Updated field
        const createdRecipe = await Recipe.create(recipeDetails);
        return res.status(200).json(createdRecipe);
    }
);

// Get route to get all recipes I have published.
router.get(
    "/get/myrecipes",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const recipes = await Recipe.find({ creator: req.user._id }).populate("creator"); // Updated field
        return res.status(200).json({ data: recipes });
    }
);

// Get route to get all recipes any user has published
router.get(
    "/get/user/:userId",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { userId } = req.params;
        const user = await User.findOne({ _id: userId });
        if (!user) {
            return res.status(404).json({ err: "User does not exist" }); // Updated error message
        }

        const recipes = await Recipe.find({ creator: userId }); // Updated field
        return res.status(200).json({ data: recipes });
    }
);

// Get route to get a single recipe by name
router.get(
    "/get/recipename/:recipeName",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        const { recipeName } = req.params;

        const recipes = await Recipe.find({ name: recipeName }).populate("creator"); // Updated field
        return res.status(200).json({ data: recipes });
    }
);

module.exports = router;
