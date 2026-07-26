import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/poppins";

import "./styles/variables.css";
import "./styles/globals.css";

import App from "./App";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
 <React.StrictMode>
  <Toaster
    position="top-right"
    reverseOrder={false}
  />
  <App />
</React.StrictMode>
);