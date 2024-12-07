import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use navigate for routing

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Use navigate to change route

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query.trim()}`); // Route to search page with query
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <input
        type="text"
        placeholder="Search for blog..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query state
        className="border-b shadow-md p-2 rounded-md w-64"
      />
      <button type="submit" className="ml-2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
