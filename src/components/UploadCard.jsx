import React from "react";
import { ButtonSecondary } from "../components/CustomButtons";
import { BsImage } from "react-icons/bs";

export default function UploadCard(props) {
  return (
    <div className=" w-[280px] md:w-[700px] md:h-[270px] h-[150px] rounded-lg shadow-2xl  bg-white">
      <div className="flex justify-center md:mt-4 mt-3">
        <div className="md:w-3/4 mx-5 md:mx-0 md:h-full">
          <div className="flex  md:gap-5 gap-2 justify-center  mt-2 md:mt-4">
            <img
              className="w-[75px] h-[75px] md:w-[150px] md:h-[150px]   rounded-lg"
              // src="https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg"
              src={props.imgPrev}
              alt="ProductImage"
            />
            <div className=" flex flex-col space-y-2">
              <p className="md:text-[25px] text-[13px] ">
                <input
                  // style={{ display: "none" }}
                  type="textarea"
                  placeholder="product_name"
                  className="md:text-[25px] text-[13px] "
                  rows={1}
                  onChange={props.onChangeCaption}
                  value={props.capValue}
                >
                  {props.caption}
                </input>
              </p>
              {/* <p className="md:text-[15px] text-[9px]"> */}
              <input
                type="textarea"
                className="md:text-[15px] text-[9px]"
                placeholder="product_detail"
                rows={1}
                onChange={props.onChangeDesc}
                value={props.descValue}
              >
                {props.desc}
              </input>
              {/* </p> */}
              {/* <p className="text-[10px] md:text-[20px]">Rp.80.000</p> */}
              <input
                type="textarea"
                placeholder="price"
                className="text-[10px] md:text-[14px]"
                onChange={props.onChangePrice}
                value={props.priceVal}
                // value={props.priceValue}
              >
                {/* {props.price} */}
              </input>
            </div>
          </div>
          <div className="flex justify-between items-center  md:mt-2 ">
            <label className="cursor-pointer font-semibold " for="input-pic">
              <BsImage className="md:text-[30px] text-[15px] text-black md:mt-3" />
            </label>
            <input
              onChange={props.onChangeImg}
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
        </div>
      </div>
    </div>
  );
}
