import { createContext } from 'react';

const recipeContext = createContext({
  currentRecipe: null,
  setCurrentRecipe: (currentRecipe) => {},
  recipePlayed: null, // If applicable, otherwise you can remove it
  setRecipePlayed: () => {}, // If applicable
  isPaused: null,
  setIsPaused: () => {},
});

export default recipeContext;
