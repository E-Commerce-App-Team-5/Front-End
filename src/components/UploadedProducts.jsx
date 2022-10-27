import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UploadCardModal from "../components/UploadCardModal";
import Swal from "sweetalert2";
import axios from "axios";

function UploadedProducts(props) {
  const deleteProduct = (id_product) => {
    axios
      .delete(`https://ecommerce-alta.online/products/${id_product}`)
      .then(() => {
        Swal.fire({
          title: "Successfully",
          text: "You have successfully deleted your shopping cart!",
          icon: "success",
          showCancelButton: false,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
        getData();
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          Swal.fire({
            icon: "error",
            text: "An invalid client request",
          });
        } else if (err.response?.status === 500) {
          Swal.fire({
            icon: "error",
            text: "There is problem on server.",
          });
        }
      });
  };

  return (
    <div className="bg-white md:w-[700px] md:h-[210px] h-[150px] rounded-lg ">
      <div className="flex justify-center  md:mt-4  md:mx-7 ">
        <img
          className="md:w-[10rem] md:h-[9rem] w-[75px] h-[100px] rounded-lg "
          alt="product"
          src={props.img}
        />
        <div className=" flex flex-col md:space-y-0  md:h-full  ">
          <div className="flex justify-end items-center">
            <div className="dropdown h-[0px]">
              <label
                tabIndex={0}
                className=" bg-white h-[15px] hover:bg-white border border-white hover:border-white"
              >
                <BsThreeDotsVertical className="w-[20px]" />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-white rounded-box md:w-30"
              >
                <label
                  htmlFor="modal-upload"
                  className=" cursor-pointer items-center lg:rounded-md"
                >
                  <li>
                    <a>Edit</a>
                  </li>
                </label>
                <li>
                  <a onClick={() => deleteProduct(props.id_product)}>Delete</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-3 px-5">
            <p className="md:text-[24px] font-semibold text-[12px] text-base-green md:mt-0 mt-4">
              {props.toko}
            </p>
            <p className="md:text-[24px] font-semibold text-[10px] text-base-green">
              {props.product}
            </p>
            <p className="md:text-[14px] text-[9px]">{props.detail}</p>
            <p className="font-medium mt-3 text-text-grey text-sm">
              Stok
              <span className="text-text-green text-sm font-medium pl-2">
                {props.stock}
              </span>
            </p>
            <p className="text-text-green md:text-[18px] text-[10px] mt-3">
              {props.price}
            </p>
          </div>
        </div>
      </div>
      <input type="checkbox" id="modal-upload" className="modal-toggle" />
      <div className="modal ">
        <div className=" relative bg-white rounded-lg md:h-[290px] md:w-[500px]">
          <label
            htmlFor="modal-upload"
            className="cursor-pointer btn-sm  absolute right-2 top-2 bg-white border-white"
          >
            ✕
          </label>
          <UploadCardModal />
        </div>
      </div>
    </div>
  );
}
export default UploadedProducts;
