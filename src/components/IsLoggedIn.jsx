import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { ButtonPrimary } from "../components/CustomButtons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleAuth, handleUser } from "../utils/redux/reducers/reducer";
import axios from "axios";
import Swal from "sweetalert2";
import InputPrimary from "./CustomInput";

const BLoggin = () => {
  const isLoggedin = useSelector((state) => state.data.isLoggedin);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    if (getToken) {
      dispatch(handleAuth(true));
    } else {
      dispatch(handleAuth(false));
    }
    axios.defaults.headers.common["Authorization"] = getToken
      ? `Bearer ${getToken}`
      : "";
  }, [isLoggedin]);

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
      .post(`https://my-ecommerce.xyz/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res?.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully logged in !",
            showConfirmButton: true,
          });
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("username", res.data.data.username);
          dispatch(handleAuth(true));
          dispatch(handleUser(res.data.data));
        }
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

  const validasiAddCartOnNavbar = () => {
    if (!isLoggedin) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "You have to login first!",
        showConfirmButton: true,
      });
      return;
    }
  };

  return (
    <div className="flex items-center justify-end   md:ml-0 ml-1 w-16  md:w-52 ">
      <BsCart3
        className="md:w-14 md:h-[28px] w-4 md:-mr-4 h-[20px] cursor-pointer"
        style={{ color: "#69C665" }}
        onClick={validasiAddCartOnNavbar}
      />
      <label
        htmlFor="modal-login"
        className="all-btn cursor-pointer flex justify-center ml-1 rounded-sm w-[30px] h-[17px] md:h-[30px] md:w-[70px] md:ml-7 bg-base text-white text-[8px] md:text-[14px]  items-center lg:rounded-md"
      >
        Login
      </label>

      <input type="checkbox" id="modal-login" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white w-[85%] lg:h-[35rem] lg:w-[35%]">
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
                placeholder="example@mail.com"
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

const ALoggin = (props) => {
  const isLoggedin = useSelector((state) => state.data.isLoggedin);
  const navigate = useNavigate();

  const [myCart, setMyCart] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      fetchMyCart();
    }, 700);
  }, []);

  const fetchMyCart = () => {
    if (isLoggedin) {
      axios
        .get(`https://my-ecommerce.xyz/cart`)
        .then((res) => {
          if (res.data.data !== null) {
            setMyCart(res.data.data.length);
          }
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
    } else {
      return;
    }
  };

  const validasiEmptyCartOnNavbar = () => {
    if (isLoggedin && myCart === 0) {
      Swal.fire({
        position: "center",
        icon: "info",
        title: "The shopping cart is still empty. Please shop first!",
        showConfirmButton: true,
      });
    } else {
      navigate("/Cart");
    }
  };

  return (
    <div className="flex">
      <div className="absolute top-2 ml-6 badge badge-warning badge-sm font-bold font-font-quick">
        {myCart}
      </div>

      <BsCart3
        className="flex flex-end text-2xl lg:text-3xl mr-5 cursor-pointer "
        style={{ color: "#69C665" }}
        onClick={() => {
          validasiEmptyCartOnNavbar();
        }}
      />

      <Link to="/Profiles">
        <img
          className="flex flex-end w-8 h-8 bg-base text-white items-center rounded-full"
          src="https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=842&q=80"
          alt=""
        />
      </Link>
    </div>
  );
};

export { BLoggin, ALoggin };
