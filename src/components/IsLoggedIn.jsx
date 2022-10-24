import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import InputPrimary from "./CustomInput";
import { ButtonPrimary } from "../components/CustomButtons";
import { Link, useNavigate } from "react-router-dom";
import { handleAuth } from "../utils/redux/reducers/reducer";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";

const BLoggin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };
    axios
      .post(`https://ecommerce-alta.online/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        const { token } = res.data;
        console.log(token);
        localStorage.setItem("token", token);
        if (res?.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "success login",
            showConfirmButton: true,
          });
        }
        dispatch(handleAuth(true));
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
    <div className="flex items-center justify-end   md:ml-0 ml-1 w-16  md:w-52 ">
      <BsCart3
        className="md:w-14 md:h-[28px] w-4 md:-mr-4 h-[20px] "
        style={{ color: "#69C665" }}
      />
      <label
        htmlFor="modal-login"
        className="all-btn cursor-pointer flex justify-center ml-1 rounded-sm w-[30px] h-[17px] md:h-[30px] md:w-[70px] md:ml-7 bg-base text-white text-[8px] md:text-[14px]  items-center lg:rounded-md"
      >
        Login
      </label>

      <input type="checkbox" id="modal-login" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white h-[35rem] w-[35%]">
          <label
            htmlFor="modal-login"
            className="cursor-pointer btn-sm  absolute right-2 top-2 bg-white border-white"
          >
            ✕
          </label>
          <form
            className="flex flex-col items-center pt-5"
            onSubmit={(e) => handleLogin(e)}
          >
            <h1 className="text-3xl font-bold text-base-green mb-4">
              Login to your account
            </h1>
            <div className="mt-2">
              <p className="mb-1 text-lg text-base-green font-semibold">
                Email
              </p>
              <InputPrimary
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                id="input-email"
                type="email"
                placeholder="contoh@gmail.com"
              />
            </div>
            <div className="mt-4 my-[2rem]">
              <p className="mb-1 text-lg text-base-green font-semibold">
                Password
              </p>
              <InputPrimary
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                id="input-password"
                type="password"
                placeholder="*******"
              />
            </div>
            <ButtonPrimary
              id="input-submit"
              label="Sign In"
              className="all-btn"
            />
            <p className="text-[14px] text-base-green mt-1 ">
              Don’t have any account ?
              <Link to="/Register">
                <span className="text-[14px] text-base font-semibold cursor-pointer">
                  Sign Up
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const ALoggin = () => {
  return (
    <div className="flex items-center justify-end  md:ml-0 ml-1 w-16  md:w-52 ">
      <BsCart3
        className="md:w-14 md:h-[28px] w-4 md:-mr-7 h-[20px]"
        style={{ color: "#69C665" }}
      />

      <img
        className=" flex justify-center ml-1  h-[17px]   w-10 md:w-[28px] md:h-[28px] md:ml-7 bg-base text-white   items-center  rounded-full"
        src="https://dazedimg-dazedgroup.netdna-ssl.com/592/azure/dazed-prod/1060/8/1068776.jpg"
        alt=""
      />
    </div>
  );
};

export { BLoggin, ALoggin };
