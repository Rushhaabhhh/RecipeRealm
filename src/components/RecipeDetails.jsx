import React, { useEffect, useState } from 'react';
import { getRecipeDetails } from './api';

const RecipeDetails = ({ recipeId, onClose }) => {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      const data = await getRecipeDetails(recipeId);
      setRecipe(data);
    };
    fetchRecipeDetails();
  }, [recipeId]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 w-3/4 md:w-1/2">
        <button onClick={onClose} className="text-red-500 font-bold">Close</button>
        <h2 className="text-2xl font-bold mb-4">{recipe.title}</h2>
        <img src={recipe.image} alt={recipe.title} className="w-full h-60 object-cover rounded-md mb-4" />
        <p><strong>Servings:</strong> {recipe.servings}</p>
        <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
        <p><strong>Ingredients:</strong></p>
        <ul>
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))}
        </ul>
        <p className="mt-4"><strong>Instructions:</strong></p>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeDetails;
