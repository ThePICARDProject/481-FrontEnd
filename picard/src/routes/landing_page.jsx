import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleEnterClick = () => {
    navigate("/login");
  };

  return (
    <div className="w-screen min-h-screen flex flex-col justify-between items-center bg-[#001D3D]">
      <h1
        className="text-[72px] font-bold mt-8"
        style={{ fontFamily: "Tourney, sans-serif", color: "#FFD60A" }}
      >
        THE PICARD
      </h1>
      <pre
        className="text-white text-center"
        style={{ fontFamily: "monospace", color: "#FFD60A" }}
      >
        {`___________________          _-_
         \\==============_=_/ ____.---'---\`---.____
                    \\_ \\    \\----._________.----/
               \\ \\   /  /    \`-_-'
     __,--\`.-'..'-_
      /____          ||
          \`--.____,-'
`}
      </pre>
      <div className="mb-8">
        <button
          className="text-[36px] font-bold"
          style={{
            fontFamily: "Tourney, sans-serif",
            color: "#FFD60A",
            backgroundColor: "transparent",
          }}
          onClick={handleEnterClick}
        >
          ENTER
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
