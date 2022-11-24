import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { CardsCheckout, CardsSubtotal } from "../components/CardsCart";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

function Cart() {
  const Users = useSelector((state) => state.data.Users);
  const dispatch = useDispatch();
  const [dataCart, setDataCart] = useState([]);
  const [totalCart, setTotalCart] = useState();

  useEffect(() => {
    fetchCart();
  }, []);
  const fetchCart = () => {
    axios
      .get(`https://my-ecommerce.xyz/cart`)
      .then((res) => {
        setDataCart(res.data.data);
      })
      .catch((err) => {
        if (err.response?.status === 400) {
          Swal.fire({
            icon: "error",
            text: "An invalid client request",
          });
        } else if (err.response?.status === 500) {
          Swal.fire({
            icon: "error",
            text: "There is problem on server.",
          });
        }
      })
      .finally();
  };

  return (
    <>
      <Layout />
      <main className="container max-w-7xl mx-auto grid md:grid-cols-3 gap-4 mt-8">
        <article className="md:col-span-2 p-4">
          {dataCart.map((item) => (
            <CardsCheckout
              key={item.id}
              id_cart={item.id}
              id_product={item.id_product}
              id_user={item.id_user}
              nama_toko={item.nama_toko}
              price={item.price}
              product_name={item.product_name}
              product_picture={item.product_picture}
              product_qty={item.product_qty}
              product_detail={item.product_detail}
            />
          ))}
        </article>
        <aside className="pt-[3rem]">
          <CardsSubtotal
            total={dataCart.reduce((index, col) => index + col.price, 0)}
            qty={1}
          />
        </aside>
      </main>
    </>
  );
}

export default Cart;
