import React from "react";
import pulsarBg from "../assets/pulsar_background.jpg";
import logo from "../assets/PICARD_logo.png";
import "../assets/css/landingPages.css";

function AccessPage() {
    // Placeholder information (will eventually come from OAuth2)
    const firstName = "First Name";
    const lastName = "Last Name";
    const email = "email@mix.wvu.edu.com";

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

                        {/* Access Request Message */}
                        <div className="row-span-2 flex justify-center items-center text-white">
                            <div className="text-center p-4">
                                <p className="mb-4 text-lg">
                                    The email address entered is not a registered email address for our application.
                                </p>
                                <p className="mb-4 text-lg">
                                    Access was requested for:
                                </p>
                                <div className="text-xl font-bold">
                                    <p>{firstName}</p>
                                    <p>{lastName}</p>
                                    <p>{email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccessPage;
