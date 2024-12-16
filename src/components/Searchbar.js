import React, { useContext, useEffect, useState } from 'react';
import { projectmanagement } from '../App';
import { Input } from '@mui/material';
import Button from 'react-bootstrap/esm/Button';
import { IoIosSearch } from "react-icons/io";
import "./home.css"
import { query } from 'firebase/firestore';

const Searchbar = () => {
  const { product, setproduct } = useContext(projectmanagement);
  const [originalproducts, setoriginalproducts] = useState([])
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (product.length > 0) {
      setoriginalproducts(product);
    }
  }, [product]);
  

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Display full data when the search bar is cleared
    if (query.trim() === "") {
      setproduct(originalproducts); // Reset to original data
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Filter products based on search query
    if (searchQuery.trim() !== "") {
      const filteredProducts = originalproducts.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setproduct(filteredProducts);
    } else {
      setproduct(originalproducts); // Reset to original data if query is empty
    }
  };

  return (
    <div style={{ margin: '10px ' }}>
      <form onSubmit={handleSearchSubmit} style={{ display: 'flex'}}>
        <Input
          type="search"
          value={searchQuery}
          onChange={handleInputChange}
          placeholder="Search products..."
          style={{ width: '300px', marginRight: '10px' }}
        />
        <Button type="submit">
          <IoIosSearch />
        </Button>
      </form>
    </div>
  );
};

export default Searchbar;
