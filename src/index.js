import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ToastProvider } from "react-toast-notifications";

import { ColorContextProvider } from "./Context/DarkModeContext";

import { BrowserRouter } from "react-router-dom";

import "@themesberg/flowbite";

ReactDOM.render(
  <ToastProvider>
    <ColorContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorContextProvider>
  </ToastProvider>,

  document.getElementById("root")
);
