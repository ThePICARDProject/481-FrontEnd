import React from "react";
import Header from "../components/header/header";
import BasicTable from "../components/datatable/new_data_table";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const DataVisualization = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const experimentId = queryParams.get("experimentId");

  if (experimentId === "1") {
    console.log("Experiment 1");
  }

  return (
    <div className="w-screen min-h-screen">
      {/* Navbar */}
      <Header />

      {/* Page Content */}
      <div className="flex flex-col justify-center items-center min-h-screen">
        {/* Experiment Header */}
        <h1
          className="text-4xl font-bold mb-8 my-20"
          style={{ fontFamily: "Tourney, sans-serif", color: "#FFD60A" }}
        >
          <BasicTable experimentId={experimentId} />
        </h1>

        {/* Container for visualized data */}
        {/* <div className="w-3/4 h-3/4 bg-gray-200 rounded-lg flex justify-center items-center"> */}
        {/* Placeholder for future data visualization */}
        {/* <span className="text-lg text-gray-700">Data Visualization Area</span>
        </div> */}
      </div>
    </div>
  );
};

export default DataVisualization;
