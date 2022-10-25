import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary } from "../components/CustomButtons";
import gbrEcommerce from "../assets/Ecommerce-checkout.png";
import axios from "axios";
import Swal from "sweetalert2";
import InputPrimary from "../components/CustomInput";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (email && username && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [username, email, password]);

  const handleRegister = async (e) => {
    e.preventDefault(false);

    if (username.length == 0 || email.length == 0 || password.length == 0) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Data cannot be empty !",
        showConfirmButton: true,
      });
      return;
    }

    if (username.length < 8) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Username must be longer than 8 characters !",
        showConfirmButton: true,
      });
      return;
    }

    const body = {
      username,
      email,
      password,
    };
    axios
      .post(`https://ecommerce-alta.online/users`, {
        username: username,
        email: email,
        password: password,
      })
      .then((result) => {
        if (result?.status === 201) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Register successful ! Please Login !",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          Swal.fire({
            icon: "error",
            text: "Username or password is already registered !",
          });
        } else if (error.response?.status === 500) {
          Swal.fire({
            icon: "error",
            text: "Username or password is already registered !",
          });
        }
      })
      .finally();
  };

  return (
    <div className="flex justify-between ">
      <div className="w-[50%] h-screen ">
        <img src={gbrEcommerce} alt="" />
      </div>
      <div className="flex flex-col items-center pl-4 pr-2  pt-[3rem] lg:pr-[4rem] ">
        <h1 className="text-4xl font-bold text-base-green mb-7">
          Create your account
        </h1>
        <form
          className="flex flex-col gap-4 min-w-[40%] items-center "
          onSubmit={(e) => handleRegister(e)}
        >
          <div>
            <p className="mb-1 text-lg text-base-green font-semibold">Email</p>
            <InputPrimary
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="input-email"
              type="email"
              placeholder="example@mail.com"
              name="email"
            />
          </div>
          <div>
            <p className="mb-1 text-lg text-base-green font-semibold">
              Username
            </p>

            <InputPrimary
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="input-username"
              type="text"
              placeholder="greenshhop"
              name="username"
            />
          </div>
          <div className="mb-3">
            <p className="mb-1 text-lg text-base-green font-semibold">
              Password
            </p>
            <InputPrimary
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="input-password"
              type="password"
              placeholder="password"
              name="username"
            />
          </div>
          <ButtonPrimary id="input-submit" label="Sign Up" />
          <p className="text-[16px] text-base-green mt-1 ">
            Already have an account ?
            <Link to="/">
              <span className="text-base font-semibold cursor-pointer">
                Sign in
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
