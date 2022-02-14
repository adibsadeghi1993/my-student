import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import { ColorModeContext } from "../../Context/DarkModeContext";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { FiShoppingCart } from "react-icons/fi";

import "./Navbar.css";

const Navigation = ({ cartItems }) => {
  const { mode, toggleColorMode } = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);

  // const mode=JSON.parse(localStorage.getItem("mode"))

  const handleClick = () => setOpen(!open);

  const style = ({ isActive }) => ({
    color: isActive ? "#7f92f4" : "",
  });

  return (
    <header className="">
      <div className="flex  items-baseline justify-between max-w-7xl items-center  mx-auto py-2 px-6 ">
        <NavLink to="/" className={`navIcon py-1 px-3 text-3xl`}>
          <span className="text-fuchsia-900 font-bold	">S</span>tore
          <span className="text-fuchsia-900 font-bold	">S</span>hoes
        </NavLink>

        <ul
          className={` ${
            open ? "" : "hidden"
          } flex flex-col absolute top-12  left-0 right-0 h-48 bg-white	w-full shadow-lg z-10 transition-all cursor-pointer
          lg:flex lg:flex-row lg:relative lg:top-0 lg:w-fit lg:h-12 lg:items-center lg:z-0 lg:shadow-none lg:h-fit   
          }`}
        >
          <div className="mr-4 ml-4 pl-4 mt-4  lg:mr-0 lg:ml-0 lg:pl-0 lg:mt-0">
            <IconButton onClick={toggleColorMode} color="inherit">
              {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>

          <li
            className={`navItem 
            mr-4 ml-4 pl-4 mb-2 mt-4
            hover:bg-blue-400 hover:rounded 
             lg:ml-0 lg:hover:bg-transparent lg:hover:rounded-none lg:mr-0 lg:pl-0 lg:mb-0 lg:mt-0`}
          >
            <NavLink
              className="lg:mr-8 text-lg"
              to="/"
              // style={style}
              onClick={handleClick}
            >
              Product
            </NavLink>
          </li>
          <li
            className={`navItem 
            mr-4 ml-4 pl-4
            hover:bg-blue-400 hover:rounded 
             lg:ml-0 lg:hover:bg-transparent lg:hover:rounded-none lg:mr-0 lg:pl-0 lg:mb-0 lg:mt-0`}
          >
            <NavLink
              to="/user"
              className="lg:mr-8 text-lg"
              // style={style}
              onClick={handleClick}
            >
              User
            </NavLink>
          </li>

          <button className=" text-lg mr-4 ml-4 pl-4 mt-4  lg:mr-0 lg:ml-0 lg:pl-0 lg:mt-0 lg:text-xl">
            <Link to="/cart" onClick={handleClick}>
              {cartItems.length !== 0 && (
                <span
                  className="absolute top-3/4	left-12	  text-white bg-indigo-700 
                  w-6 h-6	d-flex justify-center items-center rounded-3xl
                   lg:absolute lg:top-0 lg:left-56	 "
                >
                  {cartItems.filter((c) => c.qty > 0).length}
                </span>
              )}
              <FiShoppingCart className="w-6 h-6" />
            </Link>
          </button>
        </ul>

        <div onClick={handleClick} className="block text-blue-800 lg:hidden ">
          {open ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </div>


      </div>
    </header>
  );
};

export default Navigation;


















// ${
//   mode === "dark" ? "sm:bg-indigo-700" : "sm:bg-red-500"

// after:content-[''] after:block
// after:bg-transparent after:transition-all after:duration-500
// hover:after:w-full  hover:after:bg-red-500"

// const style = ({ isActive }) => ({
//   color: isActive ? "#f6f6f6" :"yellow"
// });

// className={(navData) => {
//     if (navData.isActive) {
//       return style.activeLink;
//     } else {
//       return "";
//     }
//   }
// }

// className={`(navData) => (navData.isActive ? "active" : " ") mr-4`}

// <NavLink
// className={(navData) => {
//   if (navData.isActive) {
//     return " border-b-2";
//   } else {
//     return "";
//   }
// }}

// className={(navData) =>
//   navData.isActive ? styles.activeTab : styles.inactiveTab
// }

// to="/"
// onClick={handleClick}
// >
// Home
// </NavLink>

// افقی

// <ul className={`${!click?styles.hidden_sidebar:styles.show_sidebar} absolute flex flex-col items-end  w-1/2 top-10  -z-10 h-full`}>
// <li className="py-1 px-3 mt-3 hover:bg-yellow-300 rounded hover:border-2  hover:border-gray-500">home</li>
// <li className="py-1 px-3 mt-3 hover:bg-yellow-300 rounded hover:border-2 hover:border-gray-500">products</li>
// </ul>
// <ul className="flex-1 hidden    justify-end sm:flex   ">
// <li className="py-1 px-3  hover:bg-yellow-300 rounded hover:border-2  hover:border-gray-500">home</li>
// <li className="py-1 px-3 mr-8  hover:bg-yellow-300 rounded hover:border-2 hover:border-gray-500">products</li>
// </ul>
