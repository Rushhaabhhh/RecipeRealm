import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.spoonacular.com/recipes',
  params: { apiKey: 'd4306ad2ff324f7395b08ac976481b89' },
});

export const searchRecipes = async (query) => {
  const response = await api.get('/complexSearch', {
    params: { query },
  });
  return response.data;
};

export const getRecipeDetails = async (id) => {
  const response = await api.get(`/${id}/information`);
  return response.data;
};
