import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ColorContextProvider } from "./Context/DarkModeContext";

import { BrowserRouter } from "react-router-dom";

import "@themesberg/flowbite";

ReactDOM.render(
  <ColorContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ColorContextProvider>,
  document.getElementById("root")
);
