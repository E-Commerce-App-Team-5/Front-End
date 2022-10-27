import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Home from "../pages/App";
import Register from "../pages/Register";
import Profiles from "../pages/Profiles";
import Cart from "../pages/Cart";
import { handleAuth } from "../utils/redux/reducers/reducer";

function App() {
  const dispatch = useDispatch();
  const isLoggedin = useSelector((state) => state.data.isLoggedin);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedin]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Profiles" element={<Profiles />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
