import React from 'react';

const Filter = ({ label, options, onChange }) => (
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">{label}</label>
    <select
      onChange={(e) => onChange(e.target.value)}
      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

export default Filter;
