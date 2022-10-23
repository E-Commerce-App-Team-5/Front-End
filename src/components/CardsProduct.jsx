import React from "react";
import { BsCart3 } from "react-icons/bs";

const CardsProduct = (props) => {
  return (
    <div className="md:w-[220px]  md:h-[300px] rounded-sm border flex justify-center shadow-2xl bg-white">
      <div className="items-center">
        <img
          className="md:w-[170px] md:h-[160px] mt-3"
          src="https://feedthemwisely.com/wp-content/uploads/2018/02/optimized-veggie-header-e1519835006327.jpeg"
          alt="saya"
        />
        <p className="text-black font-semibold mt-1 text-[20px]">
          Potatos 1 kg
        </p>

        <div className="mt-5">
          <p className="font-semibold text-text-grey text-[10px]">
            By <span className="text-text-green "> Toko Sehat Alami</span>
          </p>
          <p className="font-semibold text-text-grey text-[10px]">
            Stok<span className="text-text-green "> 3</span>
          </p>
          <div className="flex  justify-between">
            <p className="text-black text-[15px]">Rp.40.000</p>
            <button className="bg-base w-[65px] text-white text-[9px] rounded-sm items-center flex justify-center gap-1">
              <BsCart3 />
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;

//    <div className="border w-60 h- bg-red-400">CardsPrsdoduct</div>;
