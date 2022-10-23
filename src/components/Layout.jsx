import { BsCart3 } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import { BLoggin, ALoggin } from "./IsLoggedIn";

import React from "react";
import "../styles/index.css";

const Navbar = (props) => {
  let isLoggin = true;
  // let isLoggin = false;
  return (
    <div>
      <nav
        className="flex justify-center w-full bg-putih px-1 md:px-5
     md:h-[60px] "
      >
        <div className="flex justify-around w-full  py-1  items-center">
          <p className="text-base-green text-[10px] md:text-2xl  md:w-[200px] font-quick font-semibold ">
            HealtyMart
          </p>

          <div
            className="flex md:px-5  px-2 md:w-[350px] w-[100px] md:h-[35px] items-center md:h-9 justify-between  rounded-sm md:rounded-md"
            style={{ backgroundColor: "#E4E4E4" }}
          >
            <input
              style={{ backgroundColor: "#E4E4E4" }}
              className="  placeholder:text-[10px]  md:placeholder:text-lg w-[80px] md:w-[300px] text-xs md:text-3xl rounded-sm   md:h-[35px]"
              id="search"
              type="text"
              placeholder="search apa ya"
            />
            <button>
              <SlMagnifier className="md:w-6  w-[10px]  " />
            </button>
          </div>

          <div className="flex   ">{isLoggin ? <BLoggin /> : <ALoggin />}</div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
