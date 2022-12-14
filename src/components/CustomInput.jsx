import React from "react";

const InputPrimary = ({ id, type, placeholder, value, onChange, disabled }) => {
  return (
    <input
      id={id}
      className="w-[18rem] h-[3rem] md:w-[22rem] md:h-[3.3rem] lg:w-[22rem] lg:h-[3.3rem]  font-light bg-putih rounded-lg text-base-green placeholder:text-search&text p-3 border border-base focus:outline-none focus:border-base "
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      disabled={disabled}
      defaultValue={value}
    />
  );
};

export default InputPrimary;
