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

  const [hiddenDataSets, setHiddenDataSets] = useState([]);

  const handleHideDataSet = (dataSet) => {
    setHiddenDataSets([...hiddenDataSets, dataSet]);
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

        <div className="col-span-2 bg-[#001D3D] row-span-6 rounded-2xl p-5 overflow-y-hidden border border-white">
          <div className="w-full h-full rounded-2xl">
            <h1 className="text-5xl">Current Data Sets</h1>
            <hr className="my-4 border-white" />

            {dataSets
              .filter((dataSet) => !hiddenDataSets.includes(dataSet))
              .map((dataSet, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between my-2"
                >
                  <h2
                    className="text-3xl text-left cursor-pointer"
                    onClick={handleNavigation}
                  >
                    {dataSet}
                  </h2>
                  <button
                    onClick={() => handleHideDataSet(dataSet)}
                    className="text-white bg-red-500 rounded px-3 py-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24px"
                      height="24px"
                    >
                      <path d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z" />
                    </svg>
                  </button>
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
          <Button>
            <FileUploader />
          </Button>
        </div>
        <div />
      </div>
    </>
  );
}

export default Experiment;
