import React from "react";
import InputPrimary from "./CustomInput";
import { ButtonPrimary } from "../components/CustomButtons";

function EditModal() {
  return (
    <div className="bg-white w-[] h-full">
      <form className="flex flex-col items-center pt-5">
        <h1 className="text-3xl  text-black mb-4">Edit Profile</h1>
        <div className="">
          <img
            className="md:w-[220px] md:h-[200px] w-[75px] h-[100px] rounded-lg"
            src="https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg"
            alt="bayam"
          />
          <div className="flex justify-between w-full">
            <p></p>
            <label className="cursor-pointer font-semibold " for="pic">
              Edit Photo
            </label>
            <input
              id="pic"
              type="file"
              className="w-0 cursor-pointer"
              style={{ backgroundColor: " #E7ECEF" }}
            />
            <p>Delete photo</p>
          </div>
        </div>
        <div className="mt-4 my-[2rem]">
          <p className="mb-1 text-lg text-base-green font-semibold">Username</p>
          <InputPrimary id="input-username" type="text" placeholder="" />
        </div>
        <div className="mt-2">
          <p className="mb-1 text-lg text-base-green font-semibold">Email</p>
          <InputPrimary id="input-email" type="email" placeholder="" />
        </div>

        <div className="mt-5">
          <ButtonPrimary
            className="mt-6"
            id="input-submit"
            label="Done"
            // className="all-btn"
          />
        </div>
      </form>
    </div>
  );
}

export default EditModal;
