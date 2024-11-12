import React from 'react';
import { useQuery } from 'react-query';
import { useParams, Link } from 'react-router-dom';
import { getRecipeDetails } from '../services/api';
import { motion } from 'framer-motion';

const RecipeDetails = () => {
  const { id } = useParams();
  const { data: recipe, isLoading, error } = useQuery(['recipe', id], () => getRecipeDetails(id));

  if (isLoading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-500">Error loading recipe</p>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            RecipeRealm
          </Link>
        </div>
      </nav>

      {/* Recipe Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-gray-800">{recipe.title}</h2>
          <p className="text-gray-600 mt-2">{recipe.sourceName}</p>
        </motion.div>

        <motion.img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-96 object-cover rounded-lg my-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Ingredients Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Ingredients</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id} className="text-gray-600">{ingredient.original}</li>
            ))}
          </ul>
        </motion.div>

        {/* Instructions Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Instructions</h3>
          <ol className="list-decimal list-inside space-y-1 text-gray-600">
            {recipe.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number} className="text-gray-600">{step.step}</li>
            ))}
          </ol>
        </motion.div>

        {/* Nutrition Section */}
        {recipe.nutrition && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8 bg-gray-100 p-6 rounded-lg"
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Nutrition Facts</h3>
            <ul className="text-gray-600">
              <li>Calories: {recipe.nutrition.calories} kcal</li>
              <li>Carbs: {recipe.nutrition.carbs}g</li>
              <li>Protein: {recipe.nutrition.protein}g</li>
              <li>Fat: {recipe.nutrition.fat}g</li>
            </ul>
          </motion.div>
        )}

        {/* Related Recipes Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Related Recipes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recipe.relatedRecipes?.map((relatedRecipe) => (
              <div key={relatedRecipe.id} className="bg-white p-4 rounded-lg shadow-md">
                <img 
                  src={relatedRecipe.image} 
                  alt={relatedRecipe.title} 
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h4 className="text-xl font-semibold text-gray-700 mt-2">{relatedRecipe.title}</h4>
                <Link to={`/recipe/${relatedRecipe.id}`} className="text-blue-500 mt-2 block">View Recipe</Link>
              </div>
            ))}
          </div>
        </motion.div>
    </div>

    {/* Navigation Buttons Section */}
    <div className="container mx-auto px-4 py-6 flex justify-between items-center">
    
    {/* Back Button */}
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="w-full md:w-auto text-center mb-4 md:mb-0"
    >
        <Link to="/" className="text-blue-500 text-lg font-semibold hover:underline">← Back to Home</Link>
    </motion.div>
    
    {/* Previous Recipe Button */}
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="w-full md:w-auto text-center mb-4 md:mb-0"
    >
        <Link to={`/recipe/${recipe.id - 1}`} className="text-blue-500 text-lg font-semibold hover:underline">← Previous Recipe</Link>
    </motion.div>

    {/* Next Recipe Button */}
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="w-full md:w-auto text-center"
    >
        <Link to={`/recipe/${recipe.id + 1}`} className="text-blue-500 text-lg font-semibold hover:underline">Next Recipe →</Link>
    </motion.div>

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

export default RecipeDetails;
