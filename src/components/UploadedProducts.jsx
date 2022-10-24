import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function UploadedProducts() {
  return (
    <div className="bg-white md:w-[700px] md:h-[210px] h-[150px] rounded-lg ">
      <div className="flex justify-center  md:mt-4  md:mx-7">
        <div className="flex md:mt-0 mt-4 justify-center items-center mx-5 md:mx-0  gap-5">
          <img
            className="md:w-[220px] md:h-[200px] w-[75px] h-[100px] rounded-lg"
            src="https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg"
            alt="bayam"
          />
          <div className=" flex flex-col md:space-y-0 md:space-y-0  md:h-full">
            <div className="flex justify-between  ">
              <p className="md:text-[25px] text-[12px] text-black md:mt-0 mt-4">
                Earth Market
              </p>
              <div className="dropdown ">
                <label
                  tabIndex={0}
                  className="btn  bg-white   h-[15px] hover:bg-white border border-white hover:border-white"
                >
                  <BsThreeDotsVertical className="w-[12px]" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-white rounded-box md:w-32"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                  <li>
                    <a>Delete</a>
                  </li>
                </ul>
              </div>
            </div>
            <p className="md:text-[25px] text-[10px] text-black">Spinach</p>

            <p className="md:text-[15px] text-[9px]">
              Spinach (Spinacia oleracea) is a lasdaseafy green vegetable that
              originated in Persia.
            </p>
            <p className="text-text-green md:text-[20px] text-[10px]">
              Rp.80.000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
