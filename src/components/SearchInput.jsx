import React from 'react';

const SearchInput = ({ onSearch }) => (
  <input
    type="text"
    placeholder="Search for recipes..."
    onChange={(e) => onSearch(e.target.value)}
    className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
  />
);

export default SearchInput;
