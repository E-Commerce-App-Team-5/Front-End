import React from "react";
import { WithRouter } from "../utils/Navigations";
import rectangle from "../assets/Rectangle-1.png";
import imghero from "../assets/Hreo-img.png";
import Navbar from "../components/Layout";
import CardsProduct from "../components/CardsProduct";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar>
        <section className="w-full h-[28rem] ">
          <div className="w-full h-full">
            <div className="absolute w-full h-[10rem] md:h-[23rem] lg:h-[26rem] md:w-full sm:w-full bg-hero z-[5]"></div>
            <img
              src={rectangle}
              alt="hero-1"
              className="w-full h-[10rem] md:h-[23rem] lg:h-[26rem] object-cover z-[2] "
            />
            <div className="flex items-center justify-between top-[7%] md:top-[6%] lg:top-[11.3%] right-0 absolute z-[10] ">
              <div className="pl-5 md:pl-[3rem]">
                <h1 className=" text-xl md:text-4xl lg:text-6xl xl:text-6xl font-bold text-base-green tracking-tight mb-2 md:mb-4 leading-1">
                  Don’t miss our daily amazing deals.
                </h1>
                <p className="text-[10px] md:text-lg font-normal text-text-color">
                  Save up to 60% off on your first order
                </p>
              </div>
              <img
                src={imghero}
                alt="hero"
                className="h-[8rem] md:h-[20rem] lg:h-[25rem]"
              />
            </div>
          </div>
        </section>
        <section className="container lg:py-9 lg:pb-[3rem] ">
          <h1 className="text-base-green font-semibold text-3xl mb-9">
            Featured Products
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-10 gap-x-3">
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
            <CardsProduct />
          </div>
        </section>
        <Footer />
      </Navbar>
    </>
  )
};

export default WithRouter(App);
