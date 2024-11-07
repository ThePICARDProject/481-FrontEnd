import "./Experiment.css";
import Header from "../components/header/header";
import Parameter from "../components/parameter/parameter";
import { useState } from "react";
import FileUploader from "../components/fileuploader/fileuploader";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import ClusterParameters from "../components/cluster_parameters/clusterparameters";
import { useEffect } from "react";
import Jsonify from "../components/formDataUtility/jsonify.jsx";
import axios from "axios";

// DatasetEntry component for individual dataset buttons
const DatasetEntry = ({ name, isSelected, onClick }) => (
  <button
    type="button"
    className={`dataset-entry ${isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    {name}
  </button>
);

// PackageEntry component for individual package buttons
const PackageEntry = ({ name, isSelected, onClick }) => (
  <button
    type="button"
    className={`dataset-entry ${isSelected ? "selected" : ""}`} // Reusing the same class for style consistency
    onClick={onClick}
  >
    {name}
  </button>
);

function Experiment() {
  const [clusterParameters, setClusterParameters] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState(null); // Track selected dataset
  const [selectedPackage, setSelectedPackage] = useState(null); // Track selected package
  const [parameterValues, setParameterValues] = useState({}); // Track parameter values
  const [mode, setMode] = useState("datasets");
  const [datasets, setDatasets] = useState();
  const [packages, setPackages] = useState();
  const [additionalParameters, setAdditionalParameters] = useState([]);
  const [newParameterName, setNewParameterName] = useState("");
  const [newParameterValue, setNewParameterValue] = useState("");

  useEffect(() => {
    fetch("../config.json")
      .then((response) => response.json())
      .then((data) => setClusterParameters(data.cluster_parameters))
      .catch((error) =>
        console.error("Error fetching cluster parameters:", error)
      );

    axios.get("http://127.0.0.1:5000/getDataset").then((res) => {
      setDatasets(res.data.datasets);
      setPackages(res.data.packages);
    });

    axios.get("http://127.0.0.1:5000/getParameters").then((res) => {
      setParameterValues(res.data.parameters);
    });
  }, []);

  // Handle parameter change
  const handleParameterChange = (name, value) => {
    setParameterValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const addAdditionalParameter = () => {
    if (newParameterName && newParameterValue) {
      setAdditionalParameters([
        ...additionalParameters,
        { name: newParameterName, value: newParameterValue },
      ]);
      setNewParameterName("");
      setNewParameterValue("");
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // No need to map or modify cluster parameters, we’ll use them as is
    const jsonData = Jsonify({
      selectedDataset:
        selectedDataset !== null ? datasets[selectedDataset] : null,
      selectedPackage:
        selectedPackage !== null ? packages[selectedPackage] : null,
      parameterValues,
      additionalParameters,
      clusterParameters, // Pass cluster parameters directly from config.json
    });

    // Send the jsonData to the backend
    axios
      .post("http://localhost:5080/api/experiment/submit", {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jsonData),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      {/* Wrap all elements in a form */}
      <form
        onSubmit={handleSubmit}
        className="mt-3 main grid grid-cols-3 grid-rows-8 gap-4 h-screen p-3"
      >
        <Header className="col-span-2" />
        <div className="col-span-3"></div>

        {/* Cluster Parameters, see component */}
        <ClusterParameters />

        {/* datasets and packages section */}
        <div className="col-span-2 bg-[#001D3D] row-span-6 rounded-2xl p-5">
          <div className="w-full h-full rounded-2xl">
            <h1 className="underline text-5xl">
              <span
                className={`cursor-pointer ${
                  mode === "datasets" ? "text-yellow-500" : ""
                }`}
                onClick={() => setMode("datasets")}
              >
                Current Data Sets
              </span>
              {" / "}
              <span
                className={`cursor-pointer ${
                  mode === "packages" ? "text-yellow-500" : ""
                }`}
                onClick={() => setMode("packages")}
              >
                Current Packages
              </span>
            </h1>
            <div className="dataset-list">
              {datasets && datasets.length > 0 ? (
                (mode === "datasets" ? datasets : packages).map((item, index) =>
                  mode === "datasets" ? (
                    <DatasetEntry
                      key={index}
                      name={item}
                      isSelected={selectedDataset === index}
                      onClick={() => setSelectedDataset(index)}
                    />
                  ) : (
                    <PackageEntry
                      key={index}
                      name={item}
                      isSelected={selectedPackage === index}
                      onClick={() => setSelectedPackage(index)}
                    />
                  )
                )
              ) : (
                <p>No mode selected</p>
              )}
            </div>
          </div>
        </div>

        {/* Experiment Parameters */}
        <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-auto">
          <div className="text-white mt-3 w-full">Experiment Parameters</div>
          {parameterValues && parameterValues.length > 0 ? (
            parameterValues.map((parameter, index) => (
              <div key={index} className="flex items-center mt-2">
                <label className="text-white w-1/4 pl-4">
                  {parameter.name}:
                </label>
                <Parameter
                  parameterType={parameter.parameterType}
                  placeholder={parameter.placeholder}
                  name={parameter.name}
                  onChange={handleParameterChange}
                  className="flex-grow"
                />
              </div>
            ))
          ) : (
            <p>No mode selected</p>
          )}
          {additionalParameters.map((param, index) => (
            <div key={index} className="flex items-center mt-2">
              <label className="text-white w-1/4 pl-4">{param.name}:</label>
              <input
                type="text"
                value={param.value}
                readOnly
                className="rounded-3xl m-4 flex-grow text-white bg-[#001D3D]"
              />
            </div>
          ))}
          <div className="flex items-center mt-2">
            <input
              type="text"
              placeholder="Parameter Name"
              value={newParameterName}
              onChange={(e) => setNewParameterName(e.target.value)}
              className="rounded-3xl m-4 flex-grow text-black bg-white"
            />
            <input
              type="text"
              placeholder="Parameter Value"
              value={newParameterValue}
              onChange={(e) => setNewParameterValue(e.target.value)}
              className="rounded-3xl m-4 flex-grow text-black bg-white"
            />
            <button
              type="button"
              onClick={addAdditionalParameter}
              className="rounded-3xl bg-blue-500 text-white p-2"
            >
              Add Parameter
            </button>
          </div>
        </div>

        <div className="bg-[#001D3D] rounded-2xl text-3xl">
          <button type="submit" className="w-full h-full run-experiment-button">
            Run Experiment
          </button>
        </div>
        <div className="bg-[#001D3D] rounded-2xl text-3xl border border-white">
          <input type="file" id="file-upload" className="hidden" />
          <Button>
            <FileUploader />
          </Button>
        </div>
      </form>
    </>
  );
}

export default Experiment;
