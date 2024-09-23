import React from "react";
import pulsarBg from "../assets/pulsar_background.jpg";
import logo from "../assets/PICARD_logo.png";
import "../assets/css/LandingPages.css";

function ForgotPassword() {
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
              <form className="grid grid-rows-3 w-96">
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

                {/* Password Reset Button */}
                <div className="row-span-1 flex justify-center items-center my-2">
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#FFD60A] rounded-md"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
