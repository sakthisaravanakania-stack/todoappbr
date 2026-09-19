import React from "react";
import ReactDOM from "react-dom/client";

import axios from "axios";

import App from "./App.jsx";

import "./index.css";

axios.defaults.baseURL = "https://6aaccea0a2413bf0ec11089e.mockapi.io/";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);