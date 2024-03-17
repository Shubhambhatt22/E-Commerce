import React, { useState } from "react";


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
  };

  return (
    <div className="relative pb-4">
      {/* Additional text */}
      <div className="absolute top-48 left-1/2 transform -translate-x-1/2 text-white text-center font-bold text-4xl z-10">
        GET START <br />
        YOUR FAVORITE SHOPPING
      </div>
      {/* Background image */}
      <img
        src="/images/bg1.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-96 object-cover"
      />
      {/* Navbar */}
      <nav className="absolute top-14 left-0 right-0 bg-opacity-50 p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <a href="#" className="text-white font-semibold text-lg mb-2 md:mb-0">
            e-commerce
          </a>
          {/* Search Bar */}
          <div className="relative mb-2 md:mb-0 md:mr-4">
            <form onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearchChange}
                className="bg-white text-black-400 rounded-md px-4 py-2 md:px-20 focus:outline-none focus:ring focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-600 text-white px-4 py-2 md:px-8 rounded-md"
              >
                {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
