import Layout from "../components/Layout";
import Footer from "../components/Footer";
import UploadCard from "../components/UploadCard";
import UploadedProducts from "../components/UploadedProducts";
import CardsProfiles from "../components/CardsProfiles";
import axios from "axios";
// import { apiRequest } from "utils/apiRequest";
import { apiRequest } from "../utils/apiRequest";
import sellHistory from "../components/SellHistory";

import React, { useEffect, useState } from "react";

export default function Profiles() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [objSubmit, setObjSubmit] = useState("");
  const [image, setImage] = useState("");
  console.log(image);
  const [productName, setProductName] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [price, setPrice] = useState("");
  // const [disabled, setDisabled] = useState(true);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async (e) => {
    var requestOptions = {
      // var username= localStorage.getItem("username")
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
      // setImage()
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    // setLoading(true);
    e.preventDefault();

    const formData = new FormData();
    for (const key in objSubmit) {
      formData.append(key, objSubmit[key]);
    }
    apiRequest(
      "https://ecommerce-alta.online/products",
      "post",
      objSubmit,
      "multipart/form-data"
    )
      .then((res) => {
        const { message } = res.data;
        alert(message);
        setObjSubmit({});
      })
      .catch((err) => {
        const { data } = err.response;
        alert(data.message);
      })
      .finally(() => getUser());
  };

  // -------------------------edit Profile
  //  const editData = (e) => {
  //   e.preventDefault();
  //   const data = { name: name, email: email };
  //   axios
  //     .put("http://18.142.161.140/users", data, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then(() => getData())
  //     .catch((error) => console.log(error));
  // };

  //----------------------Logout
  // const handleLogout = () => {
  //   setToken("0");
  //   localStorage.removeItem("token");
  //   navigate("/");
  //   alert("you have been log out.....");
  // };

  // -----------------------Delete Account
  // const handleDeleteAccount = () => {
  //   var axios = require("axios");

  //   var config = {
  //     method: "delete",
  //     url: "http://18.142.161.140/users",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`,
  //     },
  //   };

  // axios(config)
  //   .then(function (response) {
  //     setToken("0");
  //     localStorage.removeItem("token");
  //     navigate("/");
  //     alert("your accout has been deleted");
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <div>
      <Layout />
      <div className="mx-3 mt-10  md:mx-32 md:mt-20">
        <div className="flex justify-between  md:gap-7 w-full ">
          <CardsProfiles email={email} username={username} />

          <div className="flex flex-col space-y-7 md:mb-10">
            {/* onSubmit={(e) => handlePost(e)} */}
            <form onSubmit={(e) => handleSubmit(e)}>
              <UploadCard
                imgPrev={image}
                capValue={productName}
                onChangeCaption={(e) => setProductName(e.target.capValue)}
                descValue={productDesc}
                onChangeDesc={
                  (e) => setProductDesc(e.target.descValue)
                  // handleChange(e.target.value, "product_detail")
                }
                priceVal={price}
                onChangePrice={(e) =>
                  // handleChange(e.target.value, "price").
                  setPrice(e.target.descValue)
                }
                onChangeImg={(e) => {
                  setImage(URL.createObjectURL(e.target.files[0]));
                  handleChange(e.target.files[0], "product_picture");
                }}
              />
            </form>

            <UploadedProducts className="mt-[4rem]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
