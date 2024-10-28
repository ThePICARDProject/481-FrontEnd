import "./Experiment.css";
import Header from "../components/header/header";
import Parameter from "../components/parameter/parameter";
import { useState } from "react";
import FileUploader from "../components/fileuploader/fileuploader";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";

function Experiment() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const experimentId = queryParams.get("experimentId");

  const parameters = [
    { parameterType: "number", placeholder: "160Gb" },
    { parameterType: "number", placeholder: "160Gb" },
    { parameterType: "number", placeholder: "160Gb" },
    { parameterType: "number", placeholder: "160Gb" },
    { parameterType: "number", placeholder: "160Gb" },
    { parameterType: "number", placeholder: "160Gb" },
    { parameterType: "number", placeholder: "160Gb" },
    { parameterType: "number", placeholder: "160Gb" },
  ];

  let dataSets = null;

  if (experimentId === "1") {
    dataSets = [
      "Boston Housing Data 1",
      "Boston Housing Data 2",
      "Boston Housing Data 3",
      "Boston Housing Data 4",
      "Boston Housing Data 5",
    ];
  }

  if (experimentId === "2") {
    dataSets = [
      "ICS Power Data 1",
      "ICS Power Data 2",
      "ICS Power Data 3",
      "ICS Power Data 4",
      "ICS Power Data 5",
    ];
  }

  if (experimentId === "3") {
    dataSets = [
      "NOAA Weather Data 1",
      "NOAA Weather Data 2",
      "NOAA Weather Data 3",
      "NOAA Weather Data 4",
      "NOAA Weather Data 5",
    ];
  }

  if (experimentId === "4") {
    dataSets = [
      "Pulsar Data 1",
      "Pulsar Data 2",
      "Pulsar Data 3",
      "Pulsar Data 4",
      "Pulsar Data 5",
    ];
  }

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/visualization?experimentId=${experimentId}`);
  };

  const handleRunExperimentClick = () => {
    navigate("/queue");
  };

  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios
      .post("http://localhost:5080/api/dataset/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => console.log(res));
  };

  const triggerFileUpload = () => {
    document.getElementById("file-upload").click();
  };

  return (
    <>
      <div className="mt-3 main grid grid-cols-3 grid-rows-8 gap-4 h-screen p-3">
        <Header className="col-span-2" />
        <div className="col-span-3"></div>

        <div
          className="bg-[#001D3D] row-span-4 rounded-2xl border border-white overflow-hidden"
          style={{
            maxHeight: "450px",
            overflowY: "auto",
            padding: "10px",
            scrollbarWidth: "none",
          }}
          onWheel={(e) => e.preventDefault()}
        >
          <div className="text-white mt-3 w-full" style={{ fontSize: "20px" }}>
            Virtual Machine Parameters
          </div>

          <div className="flex flex-col mr-3">
            <div className="flex items-center mt-2 ">
              {" "}
              <label className="text-white mr-2" style={{ width: "150px" }}>
                Node Count
              </label>{" "}
              <input
                className="w-80 rounded h-8 p-2"
                placeholder="Format: 1-10"
              />
            </div>

            <div className="flex items-center mt-2">
              <label className="text-white mr-2" style={{ width: "150px" }}>
                Driver Memory
              </label>
              <input
                className="w-80 rounded h-8 p-2"
                placeholder="Format: 2048m"
              />
            </div>

            <div className="flex items-center mt-2">
              <label className="text-white mr-2" style={{ width: "150px" }}>
                Driver Cores
              </label>
              <input
                className="w-80 rounded h-8 p-2"
                placeholder="Format: 1-10"
              />
            </div>

            <div className="flex items-center mt-2">
              <label className="text-white mr-2" style={{ width: "150px" }}>
                Executor Number
              </label>
              <input
                className="w-80 rounded h-8 p-2"
                placeholder="Format: 1-10"
              />
            </div>

            <div className="flex items-center mt-2">
              <label className="text-white mr-2" style={{ width: "150px" }}>
                Executor Cores
              </label>
              <input
                className="w-80 rounded h-8 p-2"
                placeholder="Format: 1-10"
              />
            </div>

            <div className="flex items-center mt-2">
              <label className="text-white mr-2" style={{ width: "150px" }}>
                Executor Memory
              </label>
              <input
                className="w-80 rounded h-8 p-2"
                placeholder="Format: 2048m"
              />
            </div>

            <div className="flex items-center mt-2">
              <label className="text-white mr-2" style={{ width: "150px" }}>
                Memory Overhead
              </label>
              <input
                className="w-80 rounded h-8 p-2"
                placeholder="Format: 1-10"
              />
            </div>
          </div>
        </div>

        <div className=" col-span-2 bg-[#001D3D] row-span-6 rounded-2xl p-5 overflow-y-hidden border border-white">
          <div className="w-full h-full rounded-2xl">
            <h1 className="text-5xl">Current Data Sets</h1>
            <hr className="my-4 border-white" />

            {dataSets.map((dataSet, index) => (
              <div
                key={index}
                onClick={handleNavigation}
                className="cursor-pointer"
              >
                <h2 className="ml-2 text-3xl text-left">{dataSet}</h2>
                <hr className="my-4 border-gray-300" />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-y-hidden border border-white">
          <div
            style={{
              maxHeight: "400px",
              overflowY: "auto",
              padding: "10px",
              scrollbarWidth: "none",
            }}
            onWheel={(e) => e.preventDefault()}
          >
            <div
              className="text-white mt-3 w-full"
              style={{ fontSize: "20px" }}
            >
              Experiment Parameters
            </div>

            <div className="flex flex-col mr-3">
              <div className="flex items-center mt-2">
                {" "}
                <label className="text-white mr-2" style={{ width: "150px" }}>
                  Node Count
                </label>{" "}
                <input
                  className="w-80 rounded h-8 p-2"
                  placeholder="Format: 1-10"
                />
              </div>

              <div className="flex items-center mt-2">
                <label className="text-white mr-2" style={{ width: "150px" }}>
                  Driver Memory
                </label>
                <input
                  className="w-80 rounded h-8 p-2"
                  placeholder="Format: 2048m"
                />
              </div>

              <div className="flex items-center mt-2">
                <label className="text-white mr-2" style={{ width: "150px" }}>
                  Driver Cores
                </label>
                <input
                  className="w-80 rounded h-8 p-2"
                  placeholder="Format: 1-10"
                />
              </div>

              <div className="flex items-center mt-2">
                <label className="text-white mr-2" style={{ width: "150px" }}>
                  Executor Number
                </label>
                <input
                  className="w-80 rounded h-8 p-2"
                  placeholder="Format: 1-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#001D3D] rounded-2xl text-3xl border border-white">
          <button className="w-full h-full" onClick={handleRunExperimentClick}>
            Run Experiment
          </button>
        </div>

        <div className="bg-[#001D3D] rounded-2xl text-3xl border border-white">
          <input
            onChange={handleFileChange}
            type="file"
            id="file-upload"
            className="hidden"
          />
          <Button
            onClick={triggerFileUpload} // Trigger file input click
            variant="contained"
            component="span"
            className="w-[90%] h-[90%] rounded-2xl text-3xl bg-[#001D3D] border border-white"
            sx={{
              alignContent: "center",
              fontSize: "20px",
              backgroundColor: "#001D3D",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#001D3D",
                boxShadow: "none",
              },
            }}
          >
            Choose File
          </Button>
        </div>
        <div />
      </div>
    </>
  );
}

export default Experiment;
