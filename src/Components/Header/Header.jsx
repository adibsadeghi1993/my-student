import React from "react";

import Navbar from "./Navbar";

const Header = ({cartItems}) => {
  return (
    <div>
      <Navbar cartItems={cartItems} />
    </div>
  );
};

export default Header;
