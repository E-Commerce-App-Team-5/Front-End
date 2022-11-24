import React, { useState } from "react";
import { ButtonCart } from "../components/CustomButtons";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import axios from "axios";

const CardsProduct = (props) => {
  const isLoggedin = useSelector((state) => state.data.isLoggedin);
  const [id_product, setId_product] = useState("");
  const [product_qty, setProduct_qty] = useState("");

  function validasiAddCart(item) {
    if (!isLoggedin) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "You have to login first!",
        showConfirmButton: true,
      });
      return;
    } else {
      const body = {
        id_product: item.id_product,
        product_qty: 1,
      };
      axios
        .post(`https://my-ecommerce.xyz/cart`, body)
        .then((res) => {
          Swal.fire({
            position: "center",
            icon: "info",
            title: "Produk berhasil di tambahkan!",
            showConfirmButton: true,
          });
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
              text: err.response?.data.message,
            });
          }
        })
        .finally();
    }
  }

  return (
    <div className=" md:w-[15rem] md:h-[19.5rem] rounded-lg border flex justify-center box-shadow-card  bg-white">
      <div className="items-center p-2">
        <img
          className="md:w-[12rem] md:h-[9rem] mt-3 object-contain p-1 rounded-lg "
          alt="product"
          src={props.image}
        />
        <p className="text-base-green font-semibold mt-1 text-[18px] lg:text-[20px]">
          {props.product}
        </p>

        <div className="mt-1">
          <p className=" font-medium  text-text-grey text-[12px] mb-2">
            By
            <span className="text-text-green ">Toko Sehat Alami</span>
          </p>
          <p className="font-medium  text-text-grey text-[12px]">
            Stok
            <span className="text-text-green font-medium"> {props.stock}</span>
          </p>
          <div className="flex  justify-between items-center mt-1 ">
            <p className="text-base-green text-xs lg:text-[16px] font-semibold ">
              {props.price}
            </p>
            <ButtonCart
              key={props.id_product}
              onClick={() => validasiAddCart(props)}
            ></ButtonCart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsProduct;
