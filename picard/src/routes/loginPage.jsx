import React from "react";
import pulsarBg from "../assets/pulsar_background.jpg";
import logo from "../assets/PICARD_logo.png";
import "../App.css";
import { useAuth } from "../components/authprovider/authprovider";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Login = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = () => {
    window.location.href = "http://localhost:5080/Authentication/login";
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

            {/* Account Request Form */}
            <div className="row-span-1 flex items-center">
              <button
                className="w-full h-12 bg-[#FFD60A] rounded-md"
                onClick={handleLogin}
              >
                Login with Mix Account
              </button>
            </div>

            <div className="row-span-1 flex items-center" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
