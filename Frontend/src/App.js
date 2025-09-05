import "./output.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./routes/Login";
import SignupComponent from "./routes/Signup";
import HomeComponent from "./routes/Home";
import LoggedInHomeComponent from "./routes/LoggedInHome";
import UploadRecipe from "./routes/UploadRecipe"; // Updated route name
import MyRecipes from "./routes/MyRecipes"; // Updated route name
import SearchPage from "./routes/SearchPage";
import Library from "./routes/Library";
import SinglePlaylistView from "./routes/SinglePlaylistView"; // Consider renaming if applicable
import { useCookies } from "react-cookie";
import recipeContext from "./contexts/RecipeContext"; // Updated context
import About from "./routes/About";
import Contact from "./routes/Contact";
    
function App() {
    const [currentRecipe, setCurrentRecipe] = useState(null); // Updated state variable
    const [recipePlayed, setRecipePlayed] = useState(null); // Updated state variable
    const [isPaused, setIsPaused] = useState(true);
    const [cookie, setCookie] = useCookies(["token"]);

    return (
        <div className="w-screen h-screen font-poppins">
            <BrowserRouter>
                {cookie.token ? (
                    // logged in routes
                    <recipeContext.Provider
                        value={{
                            currentRecipe, // Updated to use recipe
                            setCurrentRecipe, // Updated to use recipe
                            recipePlayed, // Updated to use recipe
                            setRecipePlayed, // Updated to use recipe
                            isPaused,
                            setIsPaused,
                        }}
                    >
                        <Routes>
                            <Route path="/" element={<LoginComponent />} />
                            <Route
                                path="/home"
                                element={<LoggedInHomeComponent />}
                            />
                            <Route
                                path="/upload" // Updated route
                                element={<UploadRecipe />} // Updated component
                            />
                            <Route path="/myRecipes" element={<MyRecipes />} /> // Updated route
                            <Route path="/search" element={<SearchPage />} />
                            <Route path="/library" element={<Library />} />
                            <Route
                                path="/playlist/:playlistId"
                                element={<SinglePlaylistView />} // Consider renaming if applicable
                            />
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </recipeContext.Provider>
                ) : (
                    // logged out routes
                    <Routes>
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/home" element={<HomeComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/signup" element={<SignupComponent />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}

export default App;
