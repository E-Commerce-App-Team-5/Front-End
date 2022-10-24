import React from "react";
import { BsCart3 } from "react-icons/bs";
const ButtonPrimary = (props) => {
  return (
    <button className="w-[22rem] h-[3.3rem] bg-base font-medium text-xl rounded-lg text-putih">
      {props.label}
    </button>
  );
};
const ButtonSecondary = (props) => {
  return (
    <button className=" w-[9rem] h-[2.8rem] bg-base font-medium rounded-lg text-putih text-[16px]">
      {props.label}change profile
    </button>
  );
};
const ButtonCart = (props) => {
  return (
    <button className="w-[5rem] h-[2rem] text-xs lg:text-sm lg:w-[6rem] lg:h-[2.5rem] bg-base font-medium rounded-md text-putih  justify-center flex items-center">
      <BsCart3 size={18} className="mr-2" /> Add
    </button>
  );
};
const ButtonCheckout = (props) => {
  return (
    <button className="w-[12rem] h-[2.8rem] bg-base font-medium rounded-md text-putih text-lg">
      Checkout
    </button>
  );
};

export { ButtonPrimary, ButtonSecondary, ButtonCart, ButtonCheckout };
