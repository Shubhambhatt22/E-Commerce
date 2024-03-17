import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState("electronics")
  const [search, setSearch] = useState('')

  const handleCategory = (category) => {
    setCategory(category)
  }
  const handleSearch = (search) => {
    setSearch(search)
  }
  console.log(search)

  return (
    <div className="App">
      <Navbar handleCategory={handleCategory} handleSearch={handleSearch} />
      <Home category={category} search={search} />
    </div>
  );
}

export default App;
