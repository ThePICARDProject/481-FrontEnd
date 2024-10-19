import React from "react";
import pulsarBg from "./assets/pulsar_background.jpg";
import logo from "./assets/PICARD_logo.png";
import "./App.css";
import { useAuth } from "./components/authprovider/authprovider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    window.open(
      "http://localhost:5080/authentication/login?returnUrl=http://localhost:5173/",
      "_self"
    );
    setToken("14f26f3a-fe87-4d1f-a2d1-eac4bd1ef673");
    navigate("/", { replace: true });
  };

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-3 h-full">
        {/* Pulsar Image */}
        <img
          src={pulsarBg}
          alt="Pulsar Background"
          className="h-full object-cover col-span-2 flex"
        />

        {/* User Content */}
        <div className="col-span-1 h-full flex justify-center items-center bg-[#001D3D] text-black">
          <div className="grid grid-rows-3 h-full">
            {/* PICARD Logo */}
            <div className="row-span-1 flex justify-center items-center">
              <img src={logo} alt="PICARD Logo" className="h-20" />
            </div>

            {/* Sign Up Form */}
            <div className="row-span-2 flex justify-center items-center">
              <form className="grid grid-rows-4 w-96">
                {/* Email Field */}
                <div className="row-span-1 my-2">
                  <label className="text-[#FFFFFF] my-2">
                    Enter your mix email address
                  </label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-12 p-2 rounded-md text-center text-white placeholder:text-[#FFFFFF]"
                  />
                </div>

                {/* Password Field */}
                <div className="row-span-1 my-2">
                  <label className="text-[#FFFFFF] my-2">
                    Enter your password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 p-2 rounded-md text-center text-white placeholder:text-[#FFFFFF]"
                  />
                </div>

                {/* Submit Button */}
                <div className="row-span-1 flex justify-center items-center my-2">
                  <button
                    className="w-full h-12 bg-[#FFD60A] rounded-md"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                </div>

                <div className="row-span-1 my-2">
                  <div className="grid grid-cols-2">
                    {/* Create Account Button */}
                    <button
                      type="submit"
                      className="w-full h-12 bg-[#FFD60A] rounded-md mr-1"
                    >
                      Create Account
                    </button>

                    {/* Forgot Password Button */}
                    <button
                      type="submit"
                      className="w-full h-12 bg-[#FFD60A] rounded-md ml-1"
                    >
                      Forgot Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
