import React from "react";
import { ButtonSecondary } from "../components/CustomButtons";
import { MdLogout } from "react-icons/md";
const Profiles = () => {
  return (
    <div className="w-[30%] h-[30rem] p-5 bg-white rounded-xl  shadow-xl">
      <img
        src="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
        className="object-cover h-[18rem] w-[20rem] rounded-lg "
      />
      <h1 className="text-3xl font-bold text-base-green mt-6">Earth Market</h1>
      <p className="text-[16px] font-normal text-base-green mt-1 mb-6">
        earthmarket@gmail.com
      </p>
      <div className="flex justify-between items-center">
        <ButtonSecondary label="change profile" />

        <MdLogout size={25} className="text-base-green cursor-pointer" />
      </div>
    </div>
  );
};

export default Profiles;
