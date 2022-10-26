import React from "react";
import { MdLogout } from "react-icons/md";
import { Link } from "react-router-dom";
import EditModal from "../components/EditModal";
import { CardSell } from "../components/CardSell";
import Swal from "sweetalert2";

const SellHistory = (props) => {
  return (
    <div className="w-[30%] h-full p-5 bg-white rounded-xl  shadow-xl">
      <div>
        <div className="flex justify-center">
          <p className="text-black text-3xl font-semibold">History Penjualan</p>
        </div>
        <div>
          <CardSell />
          <CardSell />
          <CardSell />
        </div>
      </div>
    </div>
  );
};

export default SellHistory;
