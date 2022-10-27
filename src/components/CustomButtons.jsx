import React from "react";
import { BsCart3 } from "react-icons/bs";

const ButtonPrimary = (props) => {
  return (
    <button className="w-[18rem] h-[3rem] md:w-[22rem] md:h-[3.3rem]  lg:w-[22rem] lg:h-[3.3rem] bg-base font-medium text-xl rounded-lg text-putih all-btn">
      {props.label}
    </button>
  );
};

const ButtonSecondary = (props) => {
  return (
    <button className="w-[3rem] h-[1.2rem] md:w-[9rem] md:h-[2.8rem] bg-base font-medium rounded-sm md:rounded-lg text-putih md:text-[16px] text-[5px] all-btn">
      {props.label}
    </button>
  );
};

const ButtonCart = (props) => {
  return (
    <button
      className="all-btn w-[5rem] h-[2rem] text-xs lg:text-sm lg:w-[6rem] lg:h-[2.5rem] bg-base font-medium rounded-md text-putih  justify-center flex items-center"
      {...props}
    >
      <BsCart3 size={18} className="mr-2"/> Add
    </button>
  );
};

const ButtonCheckout = (props) => {
  return (
    <button className="all-btn w-[12rem] h-[2.8rem] bg-base font-medium rounded-md text-putih text-lg">
      Checkout
    </button>
  );
};

export { ButtonPrimary, ButtonSecondary, ButtonCart, ButtonCheckout };