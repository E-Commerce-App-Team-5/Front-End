import React from "react";
import { BsTrash } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";
import { ButtonCheckout } from "../components/CustomButtons";

function CardsCheckout() {
  return (
    <>
      <main className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1 mt-8">
        <aside className="bg-putih p-7 rounded-lg box-shadow-card ">
          <p className="font-font-quick font-semibold text-xs text-base text-center">
            Toko Sehat Alami
          </p>
          <img
            className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src="/src/assets/tomatos.svg"
            alt="tomatos"
          />
        </aside>

        <article className="md:col-span-2 bg-putih p-7 rounded-lg  box-shadow-card ">
          <h1 className="text-base-green font-semibold text-lg leading-tight truncate font-font-quick py-2">
            Tomatos 1 Kg
          </h1>
          <p className="font-normal text-xs leading-tight font-font-quick pt-1">
            Spinach (Spinacia oleracea) is a leafy green vegetable that
            originated in Persia.
          </p>
          <p className="font-normal text-sm leading-tight truncate font-font-quick pt-2">
            Stock: <span className="font-semibold text-base">2</span>
          </p>
          <h1 className="font-medium text-xl font-font-quick py-3  text-base">
            Rp 50.000
          </h1>

          <section className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="grid md:grid-cols-5">
              <BsTrash className="text-2xl" />
              <p className="font-semibold text-sm font-font-quick w-72 items-center cursor-pointer">
                Cancel
              </p>
            </div>

            <div className="grid md:grid-cols-6">
              <FcMinus className="text-xl cursor-pointer" />
              <input
                type="text"
                className="px-2 w-12 bg-gray-50 border border-gray-300  focus:outline-none focus:border-text-color text-sm rounded-md block"
                placeholder="qty"
                required
              />
              <FcPlus className="text-xl mx-5" />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

function CardsSubtotal() {
  return (
    <>
      <main className="w-80 max-w-sm bg-white rounded-lg box-shadow-card ">
        <section className="px-5 py-5">
          <h1 className="font-font-quick font-semibold text-4xl text-black">
            Total
          </h1>
          <p className="font-font-quick font-medium text-sm py-2">
            Let's checkout, before the item is sold out
          </p>

          <div className="flex justify-between items-center border-b-2 border-gray-200">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              Rp. 50.000
            </span>
          </div>
          <br />
          <ButtonCheckout />
        </section>
      </main>
    </>
  );
}

export { CardsCheckout, CardsSubtotal };
