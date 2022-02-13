import React from "react";
import Header from "../Components/Header/Header";

const Layout = ({children ,cartItems}) => {
  return (
    <>
      <Header cartItems={cartItems}/>
      {children}
    </>
  );
};

export default Layout;
