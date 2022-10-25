import React, { useEffect, useState } from "react";
import InputPrimary from "../components/CustomInput";
import { ButtonPrimary } from "../components/CustomButtons";
import gbrEcommerce from "../assets/Ecommerce-checkout.png";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

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
            title: "Register Success!",
            showConfirmButton: true,
          });
        }
        dispatch(handleAuth(true));
      })
      .catch((error) => {
        if (error.response?.status === 400) {
          Swal.fire({
            icon: "error",
            text: "Username atau password sudah terdaftar",
          });
        } else if (error.response?.status === 500) {
          Swal.fire({
            icon: "error",
            text: "Username atau password sudah terdaftar",
          });
        }
      })
      .finally();
  };

  return (
    <div className="flex justify-between ">
      <div className="w-[50%] h-screen">
        <img src={gbrEcommerce} alt="" />
      </div>
      <div className="pr-[5rem] pt-[3rem]">
        <h1 className="text-4xl font-bold text-base-green mb-7">
          Create your account
        </h1>
        <form
          className="flex flex-col gap-4 min-w-[40%] items-center"
          onSubmit={(e) => handleRegister(e)}
        >
          <div>
            <p className="mb-1 text-lg text-base-green font-semibold">Email</p>
            <InputPrimary
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="input-email"
              type="email"
              placeholder="contoh@gmail.com"
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
              placeholder="TokoHijau"
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
            Already have an account ?{/* <Link to="/"> */}
            <span className="text-base font-semibold cursor-pointer">
              Sign in
            </span>
            {/* </Link> */}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
