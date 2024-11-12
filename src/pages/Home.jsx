import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../components/SearchInput';
import RecipeCard from '../components/RecipeCard';
import useRecipes from '../hooks/useRecipes';

const Home = () => {
  const [query, setQuery] = useState('');
  const { data: recipes, isLoading, error } = useRecipes(query);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl font-bold text-gray-800"
          >
            Recipe Realm
          </motion.h2>
          <ul className="flex space-x-6 text-lg text-gray-700 mx-auto cursor-pointer">
            <li>Home</li>
            <li><a href="/recipe/1">Recipes</a></li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-8 text-center"
        >
          Discover Delicious Recipes
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <SearchInput onSearch={setQuery} />
        </motion.div>

        {isLoading && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 mt-4"
          >
            Loading recipes...
          </motion.p>
        )}
        {error && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-500 mt-4"
          >
            Error fetching recipes
          </motion.p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {recipes?.results.map((recipe) => (
            <motion.div
              key={recipe.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <RecipeCard recipe={recipe} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">© 2024 Recipe Realm. All rights reserved.</p>
          <div className="flex justify-center space-x-4 text-gray-700">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
