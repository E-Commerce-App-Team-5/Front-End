import React from "react";
import { BsTrash } from "react-icons/bs";
import { FcPlus } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";
import { ButtonCheckout } from "../components/CustomButtons";
import Swal from "sweetalert2";
import axios from "axios";

function CardsCheckout(props) {
  function deleteCarts(id_cart) {
    Swal.fire({
      title: "Are you sure?",
      text: "Your shopping cart will be deleted!",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://my-ecommerce.xyz/cart/${id_cart}`).then((res) => {
          Swal.fire({
            title: "Successfully",
            text: "You have successfully deleted your shopping cart!",
            icon: "success",
            showCancelButton: false,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Ok",
          });
        });
      } else {
        return;
      }
    });
  }

  function minCarts(price) {
    let qty = document.getElementById("input-qty").value;
    document.getElementById("input-qty").value = qty - 1;
  }

  function plusCarts(price) {
    let qty = document.getElementById("input-qty").value;
    qty = parseInt(qty) + 1;
    document.getElementById("input-qty").value = qty;
    let total = price * qty;
  }

  return (
    <>
      <main className="max-w-7xl mx-auto grid md:grid-cols-3 gap-1 mt-8">
        <aside className="bg-putih p-7 rounded-lg box-shadow-card ">
          <p className="font-font-quick font-semibold text-xs text-base text-center">
            {props.nama_toko}
          </p>
          <img
            className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={props.product_picture}
            alt="img"
          />
        </aside>

        <article className="md:col-span-2 bg-putih p-7 rounded-lg  box-shadow-card ">
          <h1 className="text-base-green font-semibold text-lg leading-tight truncate font-font-quick py-2">
            {props.product_name}
          </h1>
          <p className="font-normal text-xs leading-tight font-font-quick pt-1">
            {props.product_detail}
          </p>
          <p className="font-normal text-sm leading-tight truncate font-font-quick pt-2">
            Stock:
            <span className="font-semibold text-base">{props.product_qty}</span>
          </p>
          <h1 className="font-medium text-xl font-font-quick py-3  text-base">
            Rp. {props.price}
          </h1>

          <section className="grid md:grid-cols-2 gap-8 mt-4">
            <div className="grid md:grid-cols-5">
              <BsTrash
                className="text-2xl cursor-pointer"
                key={props.id_cart}
                onClick={() => deleteCarts(props.id_cart)}
              />
              <p className="font-semibold text-sm font-font-quick w-72 items-center cursor-pointer">
                Cancel
              </p>
            </div>

            <div className="grid md:grid-cols-6">
              <FcMinus
                className="text-xl cursor-pointer"
                key={props.id_cart}
                onClick={() => minCarts(props.price)}
              />
              <input
                id="input-qty"
                type="text"
                className="px-2 w-12 bg-gray-50 border border-gray-300  focus:outline-none focus:border-text-color text-sm rounded-md block qtyCart"
                placeholder="qty"
                required
                value="1"
                disabled
              />
              <FcPlus
                className="text-xl mx-5 cursor-pointer"
                key={props.id_cart}
                onClick={() => plusCarts(props.price)}
              />
            </div>
          </section>
        </article>
      </main>
    </>
  );
}

function CardsSubtotal(props) {
  let totalSum = props.total;
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
              Rp. {totalSum}
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

// function CardsSubtotal(props) {
//   let totalSum = props.total;
//   return (
//     <>
//       <main className="w-80 max-w-sm bg-white rounded-lg box-shadow-card ">
//         <section className="px-5 py-5">
//           <h1 className="font-font-quick font-semibold text-4xl text-black">
//             Total
//           </h1>
//           <p className="font-font-quick font-medium text-sm py-2">
//             Let's checkout, before the item is sold out
//           </p>

//           <div className="flex justify-between items-center border-b-2 border-gray-200">
//             <span className="text-3xl font-bold text-gray-900 dark:text-white">
//               Rp. {totalSum}
//             </span>
//           </div>
//           <br />
//           <ButtonCheckout />
//         </section>
//       </main>
//     </>
//   );
// }

// export { CardsCheckout, CardsSubtotal };
