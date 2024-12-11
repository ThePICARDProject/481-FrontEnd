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
  const experimentID = searchParams.get("experimentId");
  const algorithmID = searchParams.get("algorithmId");

  console.log("Experiment ID: ", experimentID);
  console.log("Algorithm ID: ", algorithmID);

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

  return (
    // <div>
    //   <Header />
    //   <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-auto">
    //     <div className="text-white my-3 w-full text-xl">Cluster Parameters</div>
    //     <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-hidden">

    //     </div>
    //   </div>
    // </div>
    <div className="w-screen items-center h-screen grid grid-cols-2 grid-rows-6">
      {/* Header section */}
      <div className="col-span-2 row-span-1">
        <Header />
      </div>

      {/* Algorithms Section */}
      <div className="col-span-1 bg-[#001D3D] row-span-4 rounded-2xl p-5 h-full mx-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl text-white pb-2">Cluster Parameters</h1>
          <Form>
            <Form.Group className="mb-3">
              {/* Cluster Parameters Name */}
              <Form.Label
                className="d-flex align-items-center mx-3"
                style={{ color: "white" }}
              >
                Cluster Parameters Name
              </Form.Label>
              <Form.Control
                type="text"
                className="d-flex align-items-center mx-3"
                style={{ width: "80%", backgroundColor: "#cbd5e1" }}
                placeholder="string"
              />

              {/* Operator */}
              <Form.Label
                className="d-flex align-items-center mx-3"
                style={{ color: "white" }}
              >
                Operator
              </Form.Label>
              <Form.Select
                name="algorithmType"
                value="0"
                // onChange={handleTypeChange}
                className="d-flex align-items-center mx-3"
                style={{ width: "80%", backgroundColor: "#cbd5e1" }}
              >
                <option value="&gt;">&gt;</option>
                <option value="=">=</option>
                <option value="&lt;">&lt;</option>
              </Form.Select>

              {/* Value */}
              <Form.Label
                className="d-flex align-items-center mx-3"
                style={{ color: "white" }}
              >
                Value
              </Form.Label>
              <Form.Control
                type="text"
                className="d-flex align-items-center mx-3"
                style={{ width: "80%", backgroundColor: "#cbd5e1" }}
                placeholder="string"
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* Datasets Section */}
      <div className="col-span-1 bg-[#001D3D] row-span-4 rounded-2xl p-5 h-full mx-1 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl text-white pb-2">Algorithm Parameters</h1>
          <Form>
            <Form.Group className="mb-3">
              {/* Cluster Parameters Name */}
              <Form.Label
                className="d-flex align-items-center mx-3"
                style={{ color: "white" }}
              >
                Algortithm Parameter
              </Form.Label>
              <Form.Select
                name="algorithmParams"
                className="d-flex align-items-center mx-3"
                style={{ width: "80%", backgroundColor: "#cbd5e1" }}
              >
                <option value="">Select an Algorithm Parameter</option>
                {algorithmParams.map((param, index) => (
                  <option key={index} value={param.parameterID}>
                    {param.parameterName}
                  </option>
                ))}
              </Form.Select>

              {/* Operator */}
              <Form.Label
                className="d-flex align-items-center mx-3"
                style={{ color: "white" }}
              >
                Operator
              </Form.Label>
              <Form.Select
                name="algorithmType"
                value="0"
                // onChange={handleTypeChange}
                className="d-flex align-items-center mx-3"
                style={{ width: "80%", backgroundColor: "#cbd5e1" }}
              >
                <option value="&gt;">&gt;</option>
                <option value="=">=</option>
                <option value="&lt;">&lt;</option>
              </Form.Select>

              {/* Value */}
              <Form.Label
                className="d-flex align-items-center mx-3"
                style={{ color: "white" }}
              >
                Value
              </Form.Label>
              <Form.Control
                type="text"
                className="d-flex align-items-center mx-3"
                style={{ width: "80%", backgroundColor: "#cbd5e1" }}
                placeholder="string"
              />
            </Form.Group>
          </Form>
        </div>
      </div>

      {/* Proceed to Experiment Setup */}
      <div className="col-span-2 row-span-1 flex justify-center mt-4">
        <Button>Download Experiment Results</Button>
      </div>
    </div>
  );
}

export default ResultsPage;
