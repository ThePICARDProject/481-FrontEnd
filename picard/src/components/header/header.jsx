import React, { useState } from "react";
import { useAuth } from "../authprovider/authprovider";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    window.location.replace(
      "http://localhost:5080/Authentication/logout",
      -self
    );
    setToken();
    window.location.replace(
      "http://localhost:5080/Authentication/logout",
      "_self"
    );
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#001D3D] fixed top-0 left-0 w-full p-4 z-10">
      <div className="flex justify-between items-center w-full">
        {/* Left - The PICARD text with Home and Experiments */}
        <div className="flex items-center space-x-32">
          <span
            className="text-3xl font-semibold"
            style={{ fontFamily: "Tourney, sans-serif", color: "#FFD60A" }}
          >
            THE PICARD
          </span>

          {/* Home and Experiments buttons */}
          <div
            className="flex space-x-32 text-lg"
            style={{ fontFamily: "Tourney, sans-serif", color: "#FFD60A" }}
          >
            <a
              href="/home"
              className="hover:text-blue-700"
              style={{ fontSize: "25px" }}
            >
              Home
            </a>
          </div>
        </div>

        {/* Right - Styled Hamburger Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center space-x-2 bg-[#001D3D] text-[#FFD60A] px-4 py-2 rounded-full hover:bg-[#002b5e] focus:outline-none"
            style={{ fontFamily: "Tourney, sans-serif" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            <span style={{ fontSize: "20px" }}>Menu</span>{" "}
            {/* Optional text to make the button match better */}
          </button>

          {/* Dropdown menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-[#001D3D] rounded-md shadow-lg py-2">
              <a
                href="#"
                className="block px-4 py-2 text-[#FFD60A] hover:bg-[#002b5e] hover:text-white"
                style={{ fontFamily: "Tourney, sans-serif", fontSize: "20px" }}
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-[#FFD60A] hover:bg-[#002b5e] hover:text-white"
                style={{ fontFamily: "Tourney, sans-serif", fontSize: "20px" }}
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-[#FFD60A] hover:bg-[#002b5e] hover:text-white"
                style={{ fontFamily: "Tourney, sans-serif", fontSize: "20px" }}
                onClick={handleLogout}
              >
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
