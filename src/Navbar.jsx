import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import "./style.css";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <nav>
      <h1>Blog</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button type="submit">
          <GoSearch />
        </button>
      </form>
    </nav>
  );
}

export default Navbar;
