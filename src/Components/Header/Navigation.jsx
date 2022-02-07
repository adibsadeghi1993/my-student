import React, { useState } from "react";

import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { NavLink } from "react-router-dom";

import "./Navigation.css";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  const style = ({ isActive }) => ({
    color: isActive ? "#701a75" : "",
  });

  return (
    <header className="">
      <div className="flex justify-between max-w-7xl items-center  mx-auto py-2 px-6 ">
        <NavLink to="/" className={`navIcon py-1 px-3 text-3xl`}>
          <span className="text-fuchsia-900 font-bold	">S</span>tore
          <span className="text-fuchsia-900 font-bold	">S</span>hoes
        </NavLink>

        <ul
          className={`${
            open ? "" : "hidden"
          } flex flex-col absolute top-12 left-0 right-0 h-24 w-full shadow-lg transition-all bg-white h-28 cursor-pointer
          lg:flex lg:flex-row lg:relative lg:top-0 lg:w-fit lg:h-12 lg:items-center lg:shadow-none lg:h-fit `}
        >
          <li
            className={`navItem 
            mr-4 ml-4 pl-4 mb-2 mt-4
            hover:bg-blue-400 hover:rounded 
             lg:ml-0 lg:hover:bg-transparent lg:hover:rounded-none lg:mr-0 lg:pl-0 lg:mb-0 lg:mt-0`}
          >
            <NavLink
              className="lg:mr-8 text-lg"
              to="/"
              style={style}
              onClick={handleClick}
            >
              Home
            </NavLink>
          </li>
          <li
            className={`navItem 
            mr-4 ml-4 pl-4
            hover:bg-blue-400 hover:rounded 
             lg:ml-0 lg:hover:bg-transparent lg:hover:rounded-none lg:mr-0 lg:pl-0 lg:mb-0 lg:mt-0`}
          >
            <NavLink
              to="/products"
              className="lg:mr-8 text-lg"
              style={style}
              onClick={handleClick}
            >
              product
            </NavLink>
          </li>
        </ul>

        <div onClick={handleClick} className="block text-blue-800 lg:hidden">
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

















// after:content-[''] after:block
// after:bg-transparent after:transition-all after:duration-500
// hover:after:w-full  hover:after:bg-red-500"

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
