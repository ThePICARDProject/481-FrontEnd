import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";

const ClusterParameters = ({}) => {
  const [clusterParameters, setClusterParameters] = useState([]);

  useEffect(() => {
    fetch("../config.json")
      .then((response) => response.json())
      .then((data) => setClusterParameters(data.cluster_parameters))
      .catch((error) =>
        console.error("Error fetching cluster parameters:", error)
      );
  }, []);

  return (
    <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-hidden">
      <p className="text-white mt-3 w-full text-xl">Cluster Parameters</p>
      {clusterParameters.map((parameter, index) => (
        <Form>
          <Form.Group className="mb-3">
            <Form.Label
              className="mb-3 d-flex align-items-center mx-5"
              style={{ color: `white` }}
            >
              {parameter.name}
            </Form.Label>
            <Form.Control
              className="mb-3 d-flex align-items-center mx-5"
              type="text"
              style={{ width: "80%" }}
              placeholder={parameter.value}
              disabled
            />
          </Form.Group>
        </Form>
      ))}
    </div>
  );
};

export default ClusterParameters;
