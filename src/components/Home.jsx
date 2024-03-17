import React, { useEffect, useState } from "react";

const Home = ({ category, search }) => {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetchData(category);
  }, [category]);

  useEffect(() => {
    fetchAll();
  }, []);

  useEffect(() => {
    if (search) {
      filterData(search);
    }
  }, [search]);

  // Fetch api for category
  const fetchData = async (category) => {
    const url = `https://fakestoreapi.com/products/category/${category}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);

      if (!category) {
        setAllData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch api  for all products
  const fetchAll = async () => {
    const url = "https://fakestoreapi.com/products";
    try {
      const response = await fetch(url);
      const data = await response.json();
      setAllData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Filtering search term
  const filterData = (searchTerm) => {
    const filteredProducts = allData.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(filteredProducts);
  };

  return (
    <div className="container mx-auto pt-96 ">
      <h1 className="font-bold text-2xl pb-8">
        {category || "All Categories"}
      </h1>
      <div className="grid md:grid-cols-2 gap-6 ">
        {data.map((product) => (
          <div
            key={product.id}
            className="max-w-sm mx-auto rounded overflow-hidden shadow-lg bg-gray-50"
          >
            <img
              className="w-24 h-28 mx-auto"
              src={product.image}
              alt="image not found"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-l mb-2 ">{product.title}</div>
              <p className="text-gray-700 text-base">Price: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
