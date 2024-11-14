import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com',
  params: { apiKey: import.meta.env.VITE_SPOONACULAR_API_KEY },
});

// Recipe Search & Discovery
export const searchRecipes = async (query) => {
  const response = await api.get('/recipes/complexSearch', {
    params: { query },
  });
  return response.data;
};

export const getRecipeDetails = async (id) => {
  const response = await api.get(`/recipes/${id}/information`);
  return response.data;
};

export const getSimilarRecipes = async (id) => {
  const response = await api.get(`/recipes/${id}/similar`);
  return response.data;
};

export const getRandomRecipes = async (number = 1) => {
  const response = await api.get('/recipes/random', {
    params: { number },
  });
  return response.data;
};

// Nutritional Information
export const getNutrients = async (id) => {
  const response = await api.get(`/recipes/${id}/nutritionWidget.json`);
  return response.data;
};

export const analyzeRecipe = async (recipe) => {
  const response = await api.post('/recipes/analyze', { recipe });
  return response.data;
};

export const getRecipeNutrition = async (id) => {
  const response = await api.get(`/recipes/${id}/nutritionWidget`);
  return response.data;
};

// Meal Planning
export const generateMealPlan = async (diet, targetCalories, timeFrame = 'week') => {
  const response = await api.get('/mealplanner/generate', {
    params: { diet, targetCalories, timeFrame },
  });
  return response.data;
};

export const getMealPlanDay = async (date, username, hash) => {
  const response = await api.get(`/mealplanner/${username}/day/${date}`, {
    params: { hash },
  });
  return response.data;
};

export const addToMealPlan = async (username, hash, meal) => {
  const response = await api.post(`/mealplanner/${username}/items`, meal, {
    params: { hash },
  });
  return response.data;
};

// Shopping List
export const getShoppingList = async (username, hash) => {
  const response = await api.get(`/mealplanner/${username}/shopping-list`, {
    params: { hash },
  });
  return response.data;
};

export const addToShoppingList = async (username, hash, item) => {
  const response = await api.post(`/mealplanner/${username}/shopping-list/items`, item, {
    params: { hash },
  });
  return response.data;
};

export const deleteFromShoppingList = async (username, hash, itemId) => {
  const response = await api.delete(`/mealplanner/${username}/shopping-list/items/${itemId}`, {
    params: { hash },
  });
  return response.data;
};

// Ingredient Information & Substitutions
export const getIngredientInfo = async (ingredientId) => {
  const response = await api.get(`/food/ingredients/${ingredientId}/information`);
  return response.data;
};

export const getIngredientSubstitutes = async (ingredientName) => {
  const response = await api.get(`/food/ingredients/substitutes`, {
    params: { ingredientName },
  });
  return response.data;
};

// Wine Pairing
export const getWinePairing = async (food) => {
  const response = await api.get(`/food/wine/pairing`, {
    params: { food },
  });
  return response.data;
};

export const getWineRecommendation = async (wine, number = 1) => {
  const response = await api.get(`/food/wine/recommendation`, {
    params: { wine, number },
  });
  return response.data;
};

// Jokes and Trivia
export const getRandomFoodJoke = async () => {
  const response = await api.get(`/food/jokes/random`);
  return response.data;
};

export const getRandomFoodTrivia = async () => {
  const response = await api.get(`/food/trivia/random`);
  return response.data;
};

// Utility: Autocomplete Recipe & Ingredient Search
export const autocompleteRecipeSearch = async (query) => {
  const response = await api.get(`/recipes/autocomplete`, {
    params: { query },
  });
  return response.data;
};

export const autocompleteIngredientSearch = async (query) => {
  const response = await api.get(`/food/ingredients/autocomplete`, {
    params: { query },
  });
  return response.data;
};

// Export API instance
export default api;
