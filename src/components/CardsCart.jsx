import React from 'react'

import { BsTrash } from 'react-icons/bs';
import { FcPlus } from 'react-icons/fc';
import { FcMinus } from 'react-icons/fc';

import { ButtonCheckout } from "../components/CustomButtons";

function CardsCheckout() {
  return (
    <>
    <div className="w-full lg:w-4/5 mx-auto flex flex-col">
      <div className="flex flex-col md:flex-row overflow-hidden bg-putih rounded-lg">
        
        <div className="w-auto md:w-1/2 py-10 ">
            <p className="font-font-quick font-semibold text-xs text-base text-center">Toko Sehat Alami</p>
            <img className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="/src/assets/tomatos.svg" alt="tomatos"/>
        </div>
        
        <div className="w-auto md:w-1/2 py-10">
            <h1 className="font-semibold text-lg leading-tight truncate font-font-quick py-2">Tomatos 1 Kg</h1>
            <p className="font-normal text-xs leading-tight truncate font-font-quick py-2">Spinach (Spinacia oleracea) is a leafy green vegetable that originated in Persia.</p>
            <p className="font-normal text-sm leading-tight truncate font-font-quick py-2">Stock: 2</p>
            <h1 className="font-medium text-xl font-font-quick py-2">Rp 50.000</h1>

            <div className="flex flex-row text-sm text-gray-700 uppercase tracking-wide font-semibold mt-2">
                <BsTrash className="text-2xl mr-2"/>
                <p className="font-semibold text-sm font-font-quick mx-2 w-72">Cancel</p>
                <FcMinus className="text-xl mx-2"/>
                <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block" placeholder="number" required/>
                <FcPlus className="text-xl mx-2"/>
            </div>
        </div>

      </div>
    </div>
    </>
  )
};

function CardsSubtotal () {
    return (
        <>
        <div className="w-full max-w-sm bg-white rounded-lg shadow-md">
            <div className="px-5 py-5">
                <h1 className="font-font-quick font-semibold text-4xl text-black">Total</h1>
                    <p className="font-font-quick font-medium text-sm py-2">Let's checkout, before the item is sold out</p>
                    <div className="flex justify-between items-center border-b-2 border-gray-200">
                        <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp. 500.000</span>
                    </div>
                <ButtonCheckout/>
            </div>
        </div>
        </>
    )
};

export  { CardsCheckout, CardsSubtotal };