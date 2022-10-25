import React from "react";
import { ButtonCart } from "../components/CustomButtons";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

const CardsProduct = (props) => {

  const isLoggedin = useSelector((state) => state.data.isLoggedin);

  const validasiAddCart = () => {
    if (!isLoggedin) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "You have to login first!",
        showConfirmButton: true,
      });
      return
    }
  }

  return (
    <div className=" md:w-[15rem] md:h-[19.5rem] rounded-lg border flex justify-center box-shadow-card  bg-white">
      <div className="items-center p-2">
        <img
          className="md:w-[12rem] md:h-[9rem] mt-3 object-contain p-1 rounded-lg "
          src="https://cdn.pixabay.com/photo/2016/03/05/19/02/appetite-1238251_1280.jpg"
          alt="saya"
        />
        <p className="text-base-green font-semibold mt-1 text-[18px] lg:text-[20px]">
          Broccoli 1 kg
        </p>

        <div className="mt-1">
          <p className=" font-medium  text-text-grey text-[12px] mb-2">
            By
            <span className="text-text-green ">Toko Sehat Alami</span>
          </p>
          <p className="font-medium  text-text-grey text-[12px]">
            Stok<span className="text-text-green font-medium"> 3</span>
          </p>
          <div className="flex  justify-between items-center mt-1 ">
            <p className="text-base-green text-xs lg:text-[16px] font-semibold ">
              Rp 40.000
            </p>
            <ButtonCart onClick={validasiAddCart}></ButtonCart>
          </div>
        </div>
      </div>
    </div>
  )
};

export default CardsProduct;