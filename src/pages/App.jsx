// import InputPrimary from "../components/CustomInput";
// import Profiles from "../components/CardsProfiles";
// // import { useState } from "react";
// // import "../styles/index.css";
// import {
//   ButtonPrimary,
//   ButtonSecondary,
//   ButtonCart,
//   ButtonCheckout,
// } from "../components/CustomButtons";
import React from "react";
import rectangle from "../assets/Rectangle-1.png";
import imghero from "../assets/Hreo-img.png";
function App() {
  return (
    <div className="w-full h-[26rem] ">
      <div className="w-full h-full">
        <div className="absolute w-full h-[10rem] md:h-[23rem] lg:h-[26rem] md:w-full sm:w-full bg-hero z-[5]"></div>
        <img
          src={rectangle}
          alt="hero-1"
          className="w-full h-[10rem] md:h-[23rem] lg:h-[26rem] object-cover z-[2] "
        />
        <div className="flex items-center justify-between top-0 right-0 absolute z-[10]">
          <div className="pl-5 md:pl-[3rem]">
            <h1 className=" text-xl md:text-4xl lg:text-6xl font-bold text-base-green tracking-tight mb-2 md:mb-4 leading-1">
              Don’t miss our daily amazing deals.
            </h1>
            <p className="text-[10px] md:text-lg font-normal text-text-color">
              Save up to 60% off on your first order
            </p>
          </div>
          <img
            src={imghero}
            alt="hero"
            className="h-[8rem] md:h-[20rem] lg:h-[25rem] "
          />
        </div>
      </div>
    </div>
  );
}

export default App;
