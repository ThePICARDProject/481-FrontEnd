import "./Experiment.css";
import Header from "../components/header/header";
import Parameter from "../components/parameter/parameter";
import { useState } from "react";
import FileUploader from "../components/fileuploader/fileuploader";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import ClusterParameters from "../components/cluster_parameters/clusterparameters";
import { useEffect } from "react";
import Jsonify from "../components/formDataUtility/jsonify.jsx";
import axios from "axios";
import Form from "react-bootstrap/Form";

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
    className={`dataset-entry ${isSelected ? "selected" : ""}`}
    onClick={onClick}
  >
    {name}
  </button>
);

function Experiment() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [clusterParameters, setClusterParameters] = useState([]);
  const [selectedDataset, setSelectedDataset] = useState(null); // Track selected dataset
  const [selectedPackage, setSelectedPackage] = useState(null); // Track selected package
  const [selectedAlgorithm, setSelectedAlgorithm] = useState(null); // Track selected algorithm
  const [parameterValues, setParameterValues] = useState({}); // Track parameter values
  const [algorithmValues, setAlgorithmValues] = useState({}); // Track parameter values
  const [mode, setMode] = useState("datasets");
  const [datasets, setDatasets] = useState();
  const [algName, setAlgName] = useState();
  // const [packages, setPackages] = useState();
  const [additionalParameters, setAdditionalParameters] = useState([]);
  const [newParameterName, setNewParameterName] = useState("");
  const [newParameterValue, setNewParameterValue] = useState("");
  const location = useLocation();
  const algId = searchParams.get("algorithmId");
  useEffect(() => {
    fetch("../config.json")
      .then((response) => response.json())
      .then((data) => setClusterParameters(data.cluster_parameters))
      .catch((error) =>
        console.error("Error fetching cluster parameters:", error)
      );

    axios
      .get("http://localhost:5080/api/dataset", { withCredentials: true })
      .then((res) => {
        setDatasets(res.data);
      });

    axios
      .get("http://localhost:5080/api/algorithms/algorithmParameters", {
        withCredentials: true,
        params: {
          algorithmId: algId,
        },
      })
      .then((res) => {
        setParameterValues(res.data);
      });

    axios
      .get("http://localhost:5080/api/algorithms/algorithms", {
        withCredentials: true,
      })
      .then((res) => {
        setAlgorithmValues(res.data);

        // Search for algorithmName right after setting algorithmValues
        const foundAlgorithm = res.data.find(
          (algorithm) => "" + algorithm.algorithmID === algId
        );

        const algorithmName = foundAlgorithm
          ? foundAlgorithm.algorithmName
          : null;

        setAlgName(algorithmName);
      });
  }, [algId]); // Add id to the dependency array to trigger effect when it changes

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
    e.preventDefault();

    const clusterParamsData = clusterParameters.reduce((acc, param) => {
      acc[param.name] = param.value || null;
      return acc;
    }, {});

    const jsonData = {
      algorithmId: algId || 0,
      datasetName:
        selectedDataset !== null ? datasets[selectedDataset] : "null",
      ...clusterParamsData,
      parameterValues: Object.entries(parameterValues).map(([name, value]) => ({
        parameterId: value.parameterID,
        value: "value",
      })),
    };

    console.log("Experiment Data:", JSON.stringify(jsonData, null, 2));

    axios
      .post("http://localhost:5080/api/experiment/submit", jsonData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Success:", response.data);
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
        className="mt-3 main grid grid-cols-3 grid-rows-8 gap-4 w-screen h-screen p-3"
      >
        <Header className="col-span-2" />
        <div className="col-span-3"></div>

        <ClusterParameters />

        {/* datasets and packages section */}
        <div className="col-span-2 bg-[#001D3D] row-span-6 rounded-2xl p-5 h-full overflow-y-hidden border border-white">
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
            </h1>
            <div className="dataset-list">
              {datasets && datasets.length > 0 ? (
                datasets.map((item, index) => (
                  <DatasetEntry
                    key={index}
                    name={item.name}
                    isSelected={selectedDataset === index}
                    onClick={() => setSelectedDataset(index)}
                  />
                ))
              ) : (
                <p>No mode selected</p>
              )}
            </div>
          </div>
        </div>

        {/* Experiment Parameters */}
        <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-auto">
          <div className="text-white my-3 w-full text-xl">
            Experiment Parameters
          </div>

          <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-hidden">
            <Form>
              <Form.Group className="mb-3">
                <Form.Label
                  className="mb-3 d-flex align-items-center mx-3"
                  style={{ color: `white` }}
                >
                  Algorithm
                </Form.Label>
                <Form.Control
                  className="mb-3 bg-gray-400 d-flex align-items-center mx-3"
                  type="text"
                  style={{ width: "80%", backgroundColor: "#cbd5e1" }}
                  placeholder={algName}
                  disabled
                />
              </Form.Group>

              <div className="param-list">
                {parameterValues && parameterValues.length > 0 ? (
                  parameterValues.map((parameter, index) => (
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Label
                          className="mb-3 d-flex align-items-center mx-3"
                          style={{ color: `white` }}
                        >
                          {parameter.parameterName}
                        </Form.Label>
                        <Form.Control
                          className="mb-3 d-flex align-items-center mx-3"
                          type="text"
                          style={{ width: "80%", backgroundColor: "#cbd5e1" }}
                          placeholder={parameter.dataType}
                        />
                      </Form.Group>
                    </Form>
                  ))
                ) : (
                  <p className="text-white mx-5">No mode selected</p>
                )}
              </div>
            </Form>
          </div>
        </div>

        <div className="bg-[#001D3D] rounded-2xl text-3xl">
          <button type="submit" className="w-full h-full run-experiment-button">
            Run Experiment
          </button>
        </div>
      </form>
    </>
  );
}

export default Experiment;
