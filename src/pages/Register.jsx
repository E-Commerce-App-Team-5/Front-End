import React from "react";
import InputPrimary from "../components/CustomInput";
import { ButtonPrimary } from "../components/CustomButtons";
import gbrEcommerce from "../assets/Ecommerce-checkout.png";
const Register = () => {
  return (
    <div className="flex justify-between ">
      <div className="w-[50%] h-screen">
        <img src={gbrEcommerce} alt="" />
      </div>
      <div className="pr-[5rem] pt-[3rem]">
        <h1 className="text-4xl font-bold text-base-green mb-7">
          Create your account
        </h1>
        <form className="flex flex-col gap-4 min-w-[40%] items-center">
          <div>
            <p className="mb-1 text-lg text-base-green font-semibold">Email</p>
            <InputPrimary
              id="input-email"
              type="email"
              placeholder="contoh@gmail.com"
            />
          </div>
          <div>
            <p className="mb-1 text-lg text-base-green font-semibold">
              Username
            </p>

            <InputPrimary
              id="input-email"
              type="email"
              placeholder="TokoHijau"
            />
          </div>
          <div className="mb-3">
            <p className="mb-1 text-lg text-base-green font-semibold">
              Password
            </p>
            <InputPrimary id="input-email" type="email" placeholder="*******" />
          </div>
          <ButtonPrimary id="input-submit" label="Sign Up" />
          <p className="text-[16px] text-base-green mt-1 ">
            Already have an account ?
            <span className="text-base font-semibold cursor-pointer">
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
