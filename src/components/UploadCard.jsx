import React, { useEffect, useState } from "react";
import { ButtonSecondary } from "../components/CustomButtons";
import { BsImage } from "react-icons/bs";
import { apiRequest } from "../utils/apiRequest";
import Swal from "sweetalert2";

export default function UploadCard(props) {
  const [objSubmit, setObjSubmit] = useState("");
  const [image, setImage] = useState("");
  const [product_name, setProduct_name] = useState("");
  const [product_detail, setProduct_detail] = useState("");
  const [price, setPrice] = useState([]);
  const [product_qty, setProduct_qty] = useState([]);

  const handleSubmit = async (e) => {
    // setLoading(true);
    console.log(e);
    e.preventDefault();
    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest(
      "https://ecommerce-alta.online/products",
      "post",
      formData,
      "multipart/form-data"
    )
      .then((res) => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Success Update !",
          showConfirmButton: true,
        });
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally();
  };
  const handleChange = (value, key) => {
    let temp = { ...objSubmit };
    temp[key] = value;
    setObjSubmit(temp);
  };

  return (
    <div className="px-9 py-3 w-[280px] md:w-[700px] md:h-[270px] h-[150px] rounded-lg shadow-2xl  bg-white">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex justify-between md:gap-5 gap-2  mt-2 md:mt-4 ">
          <img
            className="w-[75px] h-[75px] md:w-[150px] md:h-[150px]   rounded-lg"
            src={image}
            alt="ProductImage"
          />
          <div className=" flex flex-col space-y-2">
            <p className="md:text-[25px] text-[13px] ">
              <input
                id="input-name"
                type="text"
                placeholder="Product Name"
                className="md:text-[18px] text-[12px] bg-putih  text-base-green placeholder:text-search&text p-1 border-none focus:outline-none focus:none "
                rows={1}
                value={product_name}
                onChange={(e) => {
                  setProduct_name(e.target.value);
                  handleChange(e.target.value, "product_name");
                }}
              />
            </p>

            <input
              type="text"
              className="md:text-[18px] text-[12px] bg-putih  text-base-green placeholder:text-search&text p-1 border-none focus:outline-none focus:none"
              placeholder="Deskripsi product"
              rows={1}
              value={product_detail}
              onChange={(e) => {
                setProduct_detail(e.target.value);
                handleChange(e.target.value, "product_detail");
              }}
            />
            <input
              type="text"
              placeholder="stock"
              value={product_qty}
              className="md:text-[18px] text-[12px] bg-putih  text-base-green placeholder:text-search&text p-1 border-none focus:outline-none focus:none"
              onChange={(e) => {
                setProduct_qty(e.target.value);
                handleChange(e.target.value, "product_qty");
              }}
            />
            <input
              type="text"
              placeholder="price"
              className="md:text-[18px] text-[12px] bg-putih  text-base-green placeholder:text-search&text p-1 border-none focus:outline-none focus:none"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                handleChange(e.target.value, "price");
              }}
            />
          </div>
        </div>
        <div className="flex justify-between items-center  md:mt-2 ">
          <label className="cursor-pointer font-semibold " for="input-pic">
            <BsImage className="md:text-[30px] text-[15px] text-black md:mt-3" />
          </label>
          <input
            onChange={(e) => {
              setImage(URL.createObjectURL(e.target.files[0]));
              handleChange(e.target.files[0], "product_picture");
            }}
            id="input-pic"
            type="file"
            className="w-0 cursor-pointer"
            style={{ backgroundColor: " #E7ECEF" }}
          />

          <ButtonSecondary
            className="w-[10px]"
            type="submit"
            label="upload product"
          />
        </div>
      </form>
    </div>
  );
}
