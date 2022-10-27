import React from "react";

function CardSell() {
  return (
    <div className="bg-white md:w-[420px] md:h-auto h-auto rounded-lg ">
      <div className="flex justify-center  md:mt-4  md:mx-5">
        <div className="py-5  justify-center items-center  gap-5">
          <h1 className="font-semibold text-2xl text-base-green justify-center flex mb-3">
            History Penjualan
          </h1>
          <div className="flex justify-between  p-0">
            <img
              className="md:w-[15rem] md:h-[8rem] w-[75px] h-[100px] rounded-lg "
              src="https://lettuceinfo.org/wp-content/uploads/2020/09/Spinach.jpg"
              alt="bayam"
            />
            <div className=" flex flex-col md:space-y-2 ml-7 ">
              <p className="text-[18px]  text-black md:mt-0 mt-4">Spinach</p>

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
    </div>
  );
}

function CardBuy() {
  return (
    <div className="bg-white md:w-[420px] md:h-auto h-auto rounded-lg ">
      <div className="flex justify-center  md:mt-4  md:mx-5">
        <div className="py-5 justify-center items-center  gap-5">
          <h1 className="font-semibold text-2xl text-base-green justify-center flex mb-3">
            History Penjualan
          </h1>
          <div className="flex justify-between  p-0">
            <img
              className="md:w-[15rem] md:h-[8rem] w-[75px] h-[100px] rounded-lg "
              src="https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
              alt="bayam"
            />
            <div className=" flex flex-col md:space-y-2 ml-7 ">
              <p className="text-[18px]  text-black md:mt-0 mt-4">Spinach</p>

              <p className="md:text-[15px] text-[9px]  w-full">
                Spinach (Spinacia oleracea) is a lasdaseafy green vegetable that
                originated in Persia.
              </p>

              <div className="flex justify-between text-black">
                <p className="text-text-green">1 Product</p>
                <p className="text-sm">
                  Total Order:
                  <span className="text-text-green">Rp.50.000</span>
                </p>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-[25rem] border  bg-gray-100 my-4"></div>
          <div className="flex justify-between  p-0">
            <img
              className="md:w-[15rem] md:h-[8rem] w-[75px] h-[100px] rounded-lg "
              src="https://images.unsplash.com/photo-1595855759920-86582396756a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlZ2V0YWJsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60"
              alt="bayam"
            />
            <div className=" flex flex-col md:space-y-2 ml-7 ">
              <p className="text-[18px]  text-black md:mt-0 mt-4">Spinach</p>

              <p className="md:text-[15px] text-[9px]  w-full">
                Spinach (Spinacia oleracea) is a lasdaseafy green vegetable that
                originated in Persia.
              </p>

              <div className="flex justify-between text-black">
                <p className="text-text-green">1 Product</p>
                <p className="text-sm">
                  Total Order:
                  <span className="text-text-green">Rp.50.000</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CardSell, CardBuy };
