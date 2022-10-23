import React from "react";
import ReactDOM from "react-dom/client";
// import App from './pages/App'
import App from "./components/Layout.jsx";
// import App from "./components/CardsProduct";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
