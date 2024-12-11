import Header from "../components/header/header";
import { useNavigate, useSearchParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function ResultsPage() {
  const [searchParams] = useSearchParams();
  const [algorithmParams, setAlgorithmParams] = useState([]);
  const [clusterParameterName, setClusterParameterName] = useState("");
  const [clusterOperator, setClusterOperator] = useState(">");
  const [clusterValue, setClusterValue] = useState("");
  const [aggregateId, setAggregateId] = useState("");

  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");
  const [algorithmOperator, setAlgorithmOperator] = useState(">");
  const [algorithmValue, setAlgorithmValue] = useState("");

  const experimentID = searchParams.get("experimentId");
  const algorithmID = searchParams.get("algorithmId");

  console.log("Experiment ID: ", experimentID);
  console.log("Algorithm ID: ", algorithmID);

  // Fetch algorithm parameters
  useEffect(() => {
    if (algorithmID) {
      axios
        .get(
          `http://localhost:5080/api/algorithms/algorithmParameters?algorithmId=${algorithmID}`,
          { withCredentials: true }
        )
        .then((res) => {
          setAlgorithmParams(res.data);
          console.log("Algorithm Parameters: ", res.data);
        })
        .catch((error) => {
          console.error("Error fetching algorithm parameters:", error);
        });
    }
  }, [algorithmID]);

  const handleDownload = () => {
    const payload = {
      clusterParameters: [
        {
          clusterParameterName,
          operator: clusterOperator,
          value: clusterValue,
        },
      ],
      algorithmParameters: [
        {
          algorithmParameterId: selectedAlgorithm,
          operator: algorithmOperator,
          value: algorithmValue,
        },
      ],
    };

    axios
      .post("http://localhost:5080/api/result/aggregateData", payload, {
        withCredentials: true,
      })
      .then((res) => {
        const newAggregateId = res.data.aggregateDataId;
        console.log("Aggregate ID:", newAggregateId);

        return axios.get(
          `http://localhost:5080/api/result/getProcessedResults/${newAggregateId}`,
          {
            responseType: "blob",
            withCredentials: true,
          }
        );
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        const contentDisposition = response.headers["content-disposition"];
        const filename = contentDisposition
          ? contentDisposition.split("filename=")[1]?.replace(/['"]/g, "") ||
            "download.zip"
          : "download.zip";

        link.href = url;
        link.setAttribute("download", "results.zip");
        document.body.appendChild(link);
        link.click();

        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);
        console.log("File download triggered successfully.");
      })
      .catch((error) => {
        console.error("Error during data processing or file download:", error);
      });
  };

  return (
    <div className="w-screen items-center h-screen grid grid-cols-2 grid-rows-6">
      {/* Header section */}
      <div className="col-span-2 row-span-1">
        <Header />
      </div>

      {/* Cluster Parameters */}
      <div className="col-span-1 bg-[#001D3D] row-span-4 rounded-2xl p-5 h-full mx-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl text-white pb-2">Cluster Parameters</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>
                Cluster Parameter Name
              </Form.Label>
              <Form.Control
                type="text"
                value={clusterParameterName}
                onChange={(e) => setClusterParameterName(e.target.value)}
                style={{
                  width: "80%",
                  backgroundColor: "#cbd5e1",
                  marginBottom: "10px",
                }}
                placeholder="Enter name"
              />
              <Form.Label style={{ color: "white" }}>Operator</Form.Label>
              <Form.Select
                value={clusterOperator}
                onChange={(e) => setClusterOperator(e.target.value)}
                style={{
                  width: "80%",
                  backgroundColor: "#cbd5e1",
                  marginBottom: "10px",
                }}
              >
                <option value="&gt;">&gt;</option>
                <option value="=">=</option>
                <option value="&lt;">&lt;</option>
              </Form.Select>
              <Form.Label style={{ color: "white" }}>Value</Form.Label>
              <Form.Control
                type="text"
                value={clusterValue}
                onChange={(e) => setClusterValue(e.target.value)}
                style={{
                  width: "80%",
                  backgroundColor: "#cbd5e1",
                  marginBottom: "10px",
                }}
                placeholder="Enter value"
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* Algorithm Parameters */}
      <div className="col-span-1 bg-[#001D3D] row-span-4 rounded-2xl p-5 h-full mx-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl text-white pb-2">Algorithm Parameters</h1>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label style={{ color: "white" }}>
                Algorithm Parameter
              </Form.Label>
              <Form.Select
                value={selectedAlgorithm}
                onChange={(e) => setSelectedAlgorithm(e.target.value)}
                style={{
                  width: "80%",
                  backgroundColor: "#cbd5e1",
                  marginBottom: "10px",
                }}
              >
                <option value="">Select an Algorithm Parameter</option>
                {algorithmParams.map((param, index) => (
                  <option key={index} value={param.parameterID}>
                    {param.parameterName}
                  </option>
                ))}
              </Form.Select>
              <Form.Label style={{ color: "white" }}>Operator</Form.Label>
              <Form.Select
                value={algorithmOperator}
                onChange={(e) => setAlgorithmOperator(e.target.value)}
                style={{
                  width: "80%",
                  backgroundColor: "#cbd5e1",
                  marginBottom: "10px",
                }}
              >
                <option value="&gt;">&gt;</option>
                <option value="=">=</option>
                <option value="&lt;">&lt;</option>
              </Form.Select>
              <Form.Label style={{ color: "white" }}>Value</Form.Label>
              <Form.Control
                type="text"
                value={algorithmValue}
                onChange={(e) => setAlgorithmValue(e.target.value)}
                style={{
                  width: "80%",
                  backgroundColor: "#cbd5e1",
                  marginBottom: "10px",
                }}
                placeholder="Enter value"
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* Download Button */}
      <div className="col-span-2 row-span-1 flex justify-center mt-4">
        <Button onClick={handleDownload}>Download Experiment Results</Button>
      </div>
    </div>
  );
}

export default ResultsPage;
