import React, { useEffect, useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [location, setLocation] = useState('');

  const handleSearch = () => {
    onSearch(location);
    setLocation('');
  };

  useEffect(() => {
    const location = localStorage.getItem("location");
    if (location) {
      setLocation(location);
    }
  }, []);

  return (
    <div className="flex justify-center mb-8 w-full max-w-md">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter city or zip code"
        className="p-4 w-full bg-gray-700 text-white border border-gray-600 rounded-l-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent placeholder-gray-400"
      />
      <button
        onClick={handleSearch}
        className="px-6 py-4 bg-indigo-600 text-white rounded-r-lg shadow-md hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
