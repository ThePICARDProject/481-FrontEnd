import "./Experiment.css";
import Header from "../components/header/header";
import AlgorithmModal from "../components/modals/algorithmModal.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import FileUploader from "../components/fileuploader/fileuploader";
import React from "react";
import axios from "axios";
import Papa from "papaparse";
import { useAuth } from "../components/authprovider/authprovider";
import { useEffect } from "react";

function ExperimentSetup() {
  const navigate = useNavigate();
  const [selectedAlgorithm, setSelectedAlgorithm] = useState([]);
  const [selectedDatasets, setSelectedDatasets] = useState([]);
  const [file, setFile] = useState(null); // For managing file state
  const [datasets, setDatasets] = useState();
  const [algorithms, setAlgorithms] = useState();

  const handleAlgorithmChange = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const handleDatasetChange = (dataset) => {
    setSelectedDatasets((prev) =>
      prev.includes(dataset)
        ? prev.filter((item) => item !== dataset)
        : [...prev, dataset]
    );
  };

  const proceedToExperiment = () => {
    navigate("/experiment", {
      state: { algorithm: selectedAlgorithm, datasets: selectedDatasets },
    });
  };

  useEffect(() => {
    fetch("../config.json")
      .then((response) => response.json())
      .then((data) => setClusterParameters(data.cluster_parameters))
      .catch((error) =>
        console.error("Error fetching cluster parameters:", error)
      );

    axios.get("http://127.0.0.1:5000/getDataset").then((res) => {
      setDatasets(res.data.datasets);
      setAlgorithms(res.data.algorithms);
    });

    axios.get("http://127.0.0.1:5000/getParameters").then((res) => {
      setParameterValues(res.data.parameters);
    });
  }, []);

  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file.name.split(".").pop() === "jar") {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("name", file.name);
      const res = await axios
        .post("https://httpbin.org/post", formData, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => console.log(res));
    } else {
      const formData = new FormData();
      const chunkSize = 1024 * 1024;
      let start = 0;
      let total = Math.ceil(file.size / chunkSize);
      while (start < file.size) {
        const formData = new FormData();
        formData.append("file", file.slice(start, start + chunkSize));
        formData.append("name", file.name);
        formData.append("description", "test");
        const res = await axios.post(
          "http://localhost:5080/api/dataset/upload",
          formData,
          {
            withCredentials: true,
            headers: {
              ChunkNumber: start + 1,
              TotalChunks: total,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        start += chunkSize;
      }
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center h-screen grid grid-cols-2 grid-rows-6">
        {/* Header section */}
        <div className="col-span-2 row-span-1">
          <Header />
        </div>

        {/* Algorithms Section */}
        <div className="col-span-1 bg-[#001D3D] row-span-4 rounded-2xl p-5 h-full mx-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl text-white">Algorithms</h1>
            <form>
              {algorithms && algorithms.length > 0 ? (
                algorithms.map((algorithm) => (
                  <div key={algorithm} className="text-white">
                    <input
                      style={{ marginRight: "10px" }}
                      type="radio"
                      name="algorithm"
                      value={algorithm}
                      checked={selectedAlgorithm.includes(algorithm)}
                      onChange={() => handleAlgorithmChange(algorithm)}
                    />
                    <label>{algorithm}</label>
                  </div>
                ))
              ) : (
                <p>No mode selected</p>
              )}
            </form>
          </div>
          <AlgorithmModal />
        </div>

        {/* Datasets Section */}
        <div className="col-span-1 bg-[#001D3D] row-span-4 rounded-2xl p-5 h-full mx-1 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl text-white">Datasets</h1>
            <form>
              {datasets && datasets.length > 0 ? (
                datasets.map((dataset) => (
                  <div key={dataset} className="text-white">
                    <input
                      style={{ marginRight: "10px" }}
                      type="checkbox"
                      name="dataset"
                      value={dataset}
                      checked={selectedDatasets.includes(dataset)}
                      onChange={() => handleDatasetChange(dataset)}
                    />
                    <label>{dataset}</label>
                  </div>
                ))
              ) : (
                <p>No mode selected</p>
              )}
            </form>
          </div>
          <Button
            variant="warning"
            onClick={() => document.getElementById("fileInput").click()}
          >
            + Add New CSV Data
          </Button>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>

        {/* Proceed to Experiment Setup */}
        <div className="col-span-2 row-span-1 flex justify-center mt-4">
          <Button variant="dark" onClick={proceedToExperiment}>
            Proceed to Experiment Setup
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ExperimentSetup;
