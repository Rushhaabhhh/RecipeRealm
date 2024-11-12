import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../services/api';

const RecipeDetails = () => {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useQuery(['recipe', id], () => getRecipeDetails(id));

  if (isLoading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading recipe</p>;

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-96 object-cover rounded-lg my-6" />
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Ingredients:</h3>
        <ul className="list-disc list-inside mt-2">
          {recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id} className="text-gray-600">{ingredient.original}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-gray-700">Instructions:</h3>
        <ol className="list-decimal list-inside mt-2 space-y-1">
          {recipe.analyzedInstructions[0]?.steps.map((step) => (
            <li key={step.number} className="text-gray-600">{step.step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
