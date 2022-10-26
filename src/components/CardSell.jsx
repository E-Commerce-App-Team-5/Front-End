import React from "react";

function CardSell() {
  return (
    <div className="bg-white md:w-[420px] md:h-[170px] h-[150px] rounded-lg ">
      <div className="flex justify-center  md:mt-4  md:mx-5">
        <div className="flex md:mt-0 mt-4 justify-center items-center mx-5 md:mx-0  gap-5">
          <img
            className="md:w-[200px] md:h-[100px] w-[75px] h-[100px] rounded-lg"
            src="https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg"
            alt="bayam"
          />
          <div className=" flex flex-col md:space-y-2  md:h-full">
            <div className="flex justify-between  ">
              <p className="text-[18px]  text-black md:mt-0 mt-4">Spinach</p>
            </div>

            <p className="md:text-[15px] text-[9px]  w-full">
              Spinach (Spinacia oleracea) is a lasdaseafy green vegetable that
              originated in Persia.
            </p>
            <p className="text-text-green  text-[15px]">1 Sold Out</p>

            <div className="flex justify-between text-black">
              <p>Total</p>
              <p>Rp.50.000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardBuy() {
  return (
    <div className="bg-white md:w-[420px] md:h-[170px] h-[150px] rounded-lg ">
      <div className="flex justify-center  md:mt-4  md:mx-5">
        <div className="flex md:mt-0 mt-4 justify-center items-center mx-5 md:mx-0  gap-5">
          <img
            className="md:w-[200px] md:h-[100px] w-[75px] h-[100px] rounded-lg"
            src="https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg"
            alt="bayam"
          />
          <div className=" flex flex-col md:space-y-2  md:h-full">
            <div className="flex justify-between  ">
              <p className="text-[18px]  text-black md:mt-0 mt-4">Spinach</p>
            </div>

            <p className="md:text-[15px] text-[9px]  w-full">
              Spinach (Spinacia oleracea) is a lasdaseafy green vegetable that
              originated in Persia.
            </p>
            <p className="  text-[15px]">
              By
              <span className="text-text-green"> Toko Hijau</span>
            </p>

            <div className="flex justify-between text-black items-center">
              <p className="text-text-green">1 Product</p>
              <p className="text-sm">
                Total Order:
                <span className="text-text-green">Rp.50.000</span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardSell, CardBuy };
