import React from "react";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import EditModal from "../components/EditModal";
import { CardBuy } from "../components/CardSell";
import Swal from "sweetalert2";

const BuyHistory = (props) => {
  return (
    <div className="w-[30%] h-full p-5 bg-white rounded-xl  shadow-xl">
      <div>
        <div className="flex justify-center">
          <p className="text-black text-3xl font-semibold">History Pembelian</p>
        </div>
        <div>
          <CardBuy />
          <CardBuy />
          <CardBuy />
        </div>
      </div>
    </div>
  );
};

export default BuyHistory;
