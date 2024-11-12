import React, { createContext, useState, useContext } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [mealPlan, setMealPlan] = useState([]);

  const addFavorite = (recipe) => setFavorites([...favorites, recipe]);
  const addMeal = (meal) => setMealPlan([...mealPlan, meal]);

  return (
    <RecipeContext.Provider value={{ favorites, addFavorite, mealPlan, addMeal }}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipeContext = () => useContext(RecipeContext);
