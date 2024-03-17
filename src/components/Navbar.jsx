import React, { useState } from "react";
import {
  faMagnifyingGlass,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = ({ handleCategory, handleSearch }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentCategory, setCurrentCategory] = useState("electronics");
  const [search, setSearch] = useState("");

  // All categories
  const category = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Handler for dropdown
  const handleCategoryClick = (category) => {
    setCurrentCategory(category);
    handleCategory(category);
    toggleDropdown();
  };

  // Handler for search bar
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(search);
    setSearch("");
  };

  return (
    <div className="relative pb-4">
      <div className="absolute top-60  left-1/2 transform -translate-x-1/2 text-white text-center font-bold md:text-4xl  z-10">
        GET START <br />
        YOUR FAVORITE SHOPPING
      </div>

      {/* Background image */}
      <img
        src="/images/bg2.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-96 object-cover"
      />
      {/* Navbar */}
      <nav className="absolute top-14 left-0 right-0 bg-opacity-50 p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <a href="#" className="text-white font-semibold text-xl mb-2 md:mb-0">
            e-commerce
          </a>
          {/* Search Bar */}
          <div className="relative mb-2 md:mb-0 md:mr-4 flex items-center">
            <form onSubmit={handleSearchSubmit} className="flex items-center">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                className="bg-white text-black-400 rounded-md px-8 py-2 md:ml-60 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white px-7 py-2 rounded-md ml-0"
              >
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </form>
          </div>
          {/* All Category Dropdown */}
          <div className="relative">
            <div className="group">
              <button
                className="text-white hover:text-gray-300 focus:outline-none bg-gray-900 p-3 rounded"
                onClick={toggleDropdown}
              >
                {currentCategory} <span className="ml-1">&#9662;</span>
              </button>
              <ul
                className={`absolute left-0 w-full bg-gray-900 rounded-md py-2 mt-1 md:mt-0 md:ml-4 ${
                  isDropdownOpen ? "" : "hidden"
                }`}
              >
                {category.map((category, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleCategoryClick(category)}
                      className="block px-4 py-2 text-white hover:bg-gray-700 w-full text-left"
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button className="text-white font-bold text-lg hover:text-gray-300 focus:outline-none mr-12">
              <FontAwesomeIcon icon={faShoppingCart} size="lg" /> Cart
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
