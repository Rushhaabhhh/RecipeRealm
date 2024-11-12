import React from 'react';

const RecipeCard = ({ recipe }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800">{recipe.title}</h3>
      <p className="text-gray-600 mt-1">Servings: {recipe.servings}</p>
      <p className="text-gray-600">Cooking time: {recipe.readyInMinutes} mins</p>
    </div>
  </div>
);

export default RecipeCard;
