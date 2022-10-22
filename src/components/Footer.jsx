import React from 'react';

import { CiLocationOn } from 'react-icons/ci';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CiMail } from 'react-icons/ci';
import { FiClock } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="w-full text-center lg:text-left bg-base-green">
        <div className="container md:text-left py-5">
            <div className="grid grid-1 md:grid-cols-3 lg:grid-cols- gap-8 justify-items-center">
                <div>
                    <h1 className="flex md:justify-start font-font-quick text-white text-xl font-bold items-center ml-3">
                        <img src="/src/assets/logo.svg" alt="logo"/>HealtyMart
                    </h1>
                    <a className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2"
                    href="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3963.6322248207575!2d106.7885313!3d-6.5680169!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1505c76d775%3A0xe8503eecf84be674!2sSudirman%20Central%20Busines%20District!5e0!3m2!1sid!2sid!4v1666453423596!5m2!1sid!2sid" target="_blank">
                   <i><CiLocationOn className="fill-base mx-2"/></i><span className="url">Address : Sudirman Central Busines District, Jakarta Selatan</span></a>
                    <a href="tel:+6221-908256" className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">
                    <BsFillTelephoneFill className="fill-base mx-2"/>Call Us : 021 - 908256</a>
                    <a href="mailto:healtymart@gmail.com" className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">
                    <CiMail className="fill-base mx-2"/>Email : healtymart@gmail.com</a>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">
                    <FiClock className="fill-base mx-2"/>Work Hours : 8:00 - 20:00 WIB, Monday - Sunday</p>
                </div>

                <div>
                    <h1 className="flex justify-center md:justify-start font-font-quick text-white text-xl font-bold">Account</h1>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">Wishlist</p>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">Cart</p>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">Track Order</p>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">Shipping Details</p>
                </div>

                <div>
                    <h1 className="flex justify-center md:justify-start font-font-quick text-white text-xl font-bold">Useful Link</h1>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">About Us</p>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">Contact</p>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">Hot Deals</p>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">Promotions</p>
                    <p className="text-white font-quick text-xs font-semibold flex items-center justify-center md:justify-start mx-2 my-2">New Product</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer;
