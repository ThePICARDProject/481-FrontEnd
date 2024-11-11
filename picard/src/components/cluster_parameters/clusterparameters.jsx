import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const ClusterParameters = ({ onClusterParametersChange }) => {
  const [clusterParameters, setClusterParameters] = useState([]);

  useEffect(() => {
    fetch("../config.json")
      .then((response) => response.json())
      .then((data) => {
        setClusterParameters(data.cluster_parameters);
        onClusterParametersChange(data.cluster_parameters);
      })
      .catch((error) =>
        console.error("Error fetching cluster parameters:", error)
      );
  }, [onClusterParametersChange]);

  return (
    <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-hidden">
      {" "}
      <p className="text-white my-3 w-full text-xl">Cluster Parameters</p>{" "}
      {clusterParameters.map((parameter, index) => (
        <Form key={index}>
          {" "}
          <Form.Group className="mb-3">
            {" "}
            <Form.Label
              className="mb-3 d-flex align-items-center mx-3"
              style={{ color: `white` }}
            >
              {" "}
              {parameter.name}{" "}
            </Form.Label>{" "}
            <Form.Control
              className="mb-3 d-flex align-items-center mx-3"
              type="text"
              style={{ width: "80%", backgroundColor: "#cbd5e1" }}
              placeholder={parameter.value}
              disabled
            />{" "}
          </Form.Group>{" "}
        </Form>
      ))}{" "}
    </div>
  );
};

export default ClusterParameters;
