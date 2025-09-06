import { useState } from 'react';
// import { useCookies } from 'react-cookie';
import Cookies from 'js-cookie';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ProtectedRoute from './components/shared/ProtectedRoute';
import recipeContext from './contexts/RecipeContext'; // Updated context
import './output.css';
import About from './routes/About';
import Contact from './routes/Contact';
import HomeComponent from './routes/Home';
import Library from './routes/Library';
import LoggedInHomeComponent from './routes/LoggedInHome';
import LoginComponent from './routes/Login';
import MyRecipes from './routes/MyRecipes'; // Updated route name
import SearchPage from './routes/SearchPage';
import SignupComponent from './routes/Signup';
import SinglePlaylistView from './routes/SinglePlaylistView'; // Consider renaming if applicable
import UploadRecipe from './routes/UploadRecipe'; // Updated route name

function App() {
  const [currentRecipe, setCurrentRecipe] = useState(null); // Updated state variable
  const [recipePlayed, setRecipePlayed] = useState(null); // Updated state variable
  const [isPaused, setIsPaused] = useState(true);
  // const [cookie, setCookie] = useCookies(['token']);

  return (
    <div className='w-screen h-screen font-poppins'>
      <BrowserRouter>
        <recipeContext.Provider
          value={{
            currentRecipe,
            setCurrentRecipe,
            recipePlayed,
            setRecipePlayed,
            isPaused,
            setIsPaused,
          }}
        >
          <Routes>
            {/* Public Routes */}
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/signup' element={<SignupComponent />} />

            {/* Protected Routes */}
            <Route
              path='/home'
              element={
                <ProtectedRoute>
                  <LoggedInHomeComponent />
                </ProtectedRoute>
              }
            />
            <Route
              path='/upload'
              element={
                <ProtectedRoute>
                  <UploadRecipe />
                </ProtectedRoute>
              }
            />
            <Route
              path='/myRecipes'
              element={
                <ProtectedRoute>
                  <MyRecipes />
                </ProtectedRoute>
              }
            />
            <Route
              path='/search'
              element={
                <ProtectedRoute>
                  <SearchPage />
                </ProtectedRoute>
              }
            />
            <Route
              path='/library'
              element={
                <ProtectedRoute>
                  <Library />
                </ProtectedRoute>
              }
            />
            <Route
              path='/playlist/:playlistId'
              element={
                <ProtectedRoute>
                  <SinglePlaylistView />
                </ProtectedRoute>
              }
            />

            {/* Fallback Route */}
            <Route
              path='*'
              element={
                <Navigate to={Cookies.get('token') ? '/home' : '/login'} />
              }
            />
          </Routes>
        </recipeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
