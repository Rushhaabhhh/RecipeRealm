import React from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {recipes.map((recipe) => (
      <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
    ))}
  </div>
);

export default RecipeList;
