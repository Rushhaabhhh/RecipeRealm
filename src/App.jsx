import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecipeProvider } from './context/RecipeContext';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <RecipeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </div>
      </Router>
    </RecipeProvider>
  </QueryClientProvider>
);

export default App;
