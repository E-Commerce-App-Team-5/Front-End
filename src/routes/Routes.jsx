import React from "react";
import { CiHome } from "react-icons/ci";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/App";
import Register from "../pages/Register";
import Profiles from "../pages/Profiles";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/profiles" element={<Profiles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
