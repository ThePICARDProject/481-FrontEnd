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

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const userID = params.get("userID");
    const userEmail = params.get("userEmail");
    const firstName = params.get("firstName");
    const lastName = params.get("lastName");

    if (userID) {
      setToken(userID, userEmail, firstName, lastName);
      console.log("UserID retrieved:", userID);
      navigate("/home");
    } else {
      console.error("No UserID found URL.");
      navigate("/login");
    }
  }, [location.search]);
};

export default Login;
