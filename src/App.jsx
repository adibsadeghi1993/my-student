import "./App.css";
import React, { useState } from "react";

import Layout from "./Layout/Layout";

import { Routes, Route } from "react-router-dom";
import EditUser from "./Components/EditUser/EditUser";
import Products from "./Pages/Products/Products";
import CartItems from "./Pages/CartItems/CartItems";
import Users from "./Pages/Users/Users";
import Box from "@mui/material/Box";
import SiqnIn from "./Pages/Login/SignIn/SiqnIn";
import SiqnUp from "./Pages/Login/SiqnUp/SiqnUp";
import Login from "./Pages/Login/Login";

function App() {
  const [users, setUser] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredproducts, setFilteredproducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [size, setSize] = useState("");

  return (
    
    <Box sx={{ bgcolor: "background.default", color: "text.primary" }}>
      <Layout cartItems={cartItems}>
        <Routes>
          <Route
            path="/"
            element={
              <Products
                products={products}
                setProducts={setProducts}
                cartItems={cartItems}
                setCartItems={setCartItems}
                size={size}
                setSize={setSize}
                setFilteredproducts={setFilteredproducts}
                filteredproducts={filteredproducts}
              />
            }
          />

          <Route
            path="/cart"
            element={
              <CartItems size={size} cartItems={cartItems} setCartItems={setCartItems} />
            }
          />

          <Route
            path="/login"
            element={<Login />}
          />

        </Routes>
      </Layout>
    </Box>
  );
}

export default App;







