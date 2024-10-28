import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import { useAuth } from "../components/authprovider/authprovider";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/header/header";

function ProcessPage() {
  const [position, setPosition] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => prev - 1);
    }, 20000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          color: "white",
        }}
      >
        <CircularProgress size={60} sx={{ marginBottom: 2 }} />
        <Typography variant="h6">
          Experiment added to queue, current position: {position}
        </Typography>
      </div>
    </>
  );
}

export default ProcessPage;
