import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SearchInput from '../components/SearchInput';
import RecipeCard from '../components/RecipeCard';
import Filter from '../components/Filter';
import useRecipes from '../hooks/useRecipes';

const Home = () => {
  const [query, setQuery] = useState('');
  const [diet, setDiet] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [page, setPage] = useState(1);

  const { data: recipes, isLoading, error } = useRecipes(query, diet, cuisine, page);

  const handleNextPage = () => setPage((prev) => prev + 1);
  const handlePrevPage = () => setPage((prev) => Math.max(prev - 1, 1));

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
          <ul className="flex space-x-6 text-lg text-gray-700 cursor-pointer">
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

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <Filter 
            label="Diet" 
            options={[
              { value: '', label: 'All' },
              { value: 'vegetarian', label: 'Vegetarian' },
              { value: 'vegan', label: 'Vegan' },
              { value: 'gluten-free', label: 'Gluten-Free' },
            ]} 
            onChange={setDiet} 
          />
          <Filter 
            label="Cuisine" 
            options={[
              { value: '', label: 'All' },
              { value: 'italian', label: 'Italian' },
              { value: 'mexican', label: 'Mexican' },
              { value: 'indian', label: 'Indian' },
            ]} 
            onChange={setCuisine} 
          />
        </div>

        {/* Loading and Error Messages */}
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

        {/* Recipe List */}
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

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={handlePrevPage} 
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
            disabled={page === 1}
          >
            Previous
          </button>
          <span className="text-gray-700">Page {page}</span>
          <button 
            onClick={handleNextPage} 
            className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            Next
          </button>
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
