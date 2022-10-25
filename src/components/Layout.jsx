import React from "react";
import { SlMagnifier } from "react-icons/sl";
import { BLoggin, ALoggin } from "./IsLoggedIn";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {

  const isLoggedin = useSelector((state) => state.data.isLoggedin);

  return (
    <div className="w-full h-full">
      <nav className=" flex  items-center  w-full bg-putih  ">
        <div className="container flex justify-between  py-2 md:py-4 ">
          <Link to="/">
          <p className="text-base-green text-sm md:text-2xl font-bold font-font-quick">
            HealtyMart
          </p>
          </Link>
          <div
            className="flex md:px-3 px-2  w-[10rem] h-[1.8rem] md:w-[350px]  md:h-[2.4rem] items-center  justify-between  rounded-md "
            style={{ backgroundColor: "#E4E4E4" }}
          >
            <input
              style={{ backgroundColor: "#E4E4E4" }}
              className="h-[1.8rem]  w-[10rem] text-xs md:text-sm rounded-md font-light bg-putih  text-search&text p-3 border focus:outline-none  md:w-[300px]  md:h-[2.4rem]"
              id="search"
              type="text"
              placeholder="Find products here..."
            />
            <button>
              <SlMagnifier className="md:w-6 w-[10px]" />
            </button>
          </div>
          <div className="flex">
            {isLoggedin ? <ALoggin /> : <BLoggin />}
          </div>
        </div>
      </nav>

      <div className="w-full h-full overflow-auto ">{children}</div>
    </div>
  )
};

export default Navbar;