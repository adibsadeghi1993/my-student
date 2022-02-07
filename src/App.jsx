import "./App.css";
import React, { useState } from "react";

import Layout from "./Layout/Layout";

import { Routes, Route } from "react-router-dom";
import EditUser from "./Components/EditUser/EditUser";
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products";
import SiqnUp from "./Pages/SiqnUp/SiqnUp";



function App() {
  const [users, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home users={users} setUser={setUser} />} />

        <Route
          path="/products"
          element={
            <Products
              products={products}
              setProducts={setProducts}
              setFilteredproducts={setFilteredproducts}
              filteredproducts={filteredproducts}
            />
          }
        />

        <Route
          path="/siqnup"
          element={<SiqnUp users={users} setUser={setUser} />}
        />

        <Route
          path="/edituser/:id"
          element={<EditUser users={users} setUser={setUser} />}
        />
      </Routes>
    </Layout>
  );
}

export default App;

