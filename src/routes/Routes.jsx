import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "../pages/App";
import Register from "../pages/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
