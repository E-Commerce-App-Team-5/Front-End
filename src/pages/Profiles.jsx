import Layout from "../components/Layout";
import Footer from "../components/Footer";
import UploadCard from "../components/UploadCard";
import UploadedProducts from "../components/UploadedProducts";
import CardsProfiles from "../components/CardsProfiles";
import axios from "axios";
import Swal from "sweetalert2";
import { CardBuy, CardSell } from "../components/CardSell";

import React, { useEffect, useState } from "react";

export default function Profiles() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [dataJualan, setDataJualan] = useState([]);
  useEffect(() => {
    getUser();
    fetchMyProduct();
  }, []);

  const getUser = async (e) => {
    var requestOptions = {
      method: "get",
      url: `https://ecommerce-alta.online/users?username=${localStorage.getItem(
        "username"
      )}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    try {
      const response = await axios(requestOptions);
      const { username, email } = response.data.data;
      setUsername(username);
      setEmail(email);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMyProduct = () => {
    setLoading(true);
    axios
      .get(
        `https://ecommerce-alta.online/users?username=${localStorage.getItem(
          "username"
        )}`
      )
      .then((res) => {
        setDataJualan(res.data.data.products);
        console.log(setDataJualan);
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
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Layout />
      <div className="container mt-10  md:mt-10 md:mb-10">
        <div className="flex justify-between  md:gap-7 w-full ">
          <div>
            <CardsProfiles email={email} username={username} />
            <CardSell />
            <CardBuy />
          </div>
          <div className="flex flex-col space-y-7 md:mb-10">
            <UploadCard />
            {dataJualan?.map((item) => (
              <UploadedProducts
                key={item.id}
                id_product={item.id_product}
                toko={item.name_toko}
                product={item.product_name}
                detail={item.product_detail}
                img={item.profile_picture}
                price={item.price}
                stock={item.product_qty}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
