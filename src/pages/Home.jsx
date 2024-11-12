import React, { useState } from 'react';
import SearchInput from '../components/SearchInput';
import RecipeCard from '../components/RecipeCard';
import useRecipes from '../hooks/useRecipes';

const Home = () => {
  const [query, setQuery] = useState('');
  const { data: recipes, isLoading, error } = useRecipes(query);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">RecipeRealm</h1>
      <SearchInput onSearch={setQuery} />
      {isLoading && <p className="text-gray-600 mt-4">Loading recipes...</p>}
      {error && <p className="text-red-500 mt-4">Error fetching recipes</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {recipes?.results.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
