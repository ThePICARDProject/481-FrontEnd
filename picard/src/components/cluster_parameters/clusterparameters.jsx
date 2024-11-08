import React, { useEffect, useState } from "react";

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
      <div className="text-white mt-3 w-full">Cluster Parameters</div>
      {clusterParameters.map((parameter, index) => (
        <div key={index} className="flex items-center mt-2">
          <label className="text-white w-1/4 pl-4">{parameter.name}:</label>
          <input
            className="text-white flex"
            placeholder={parameter.value}
            disabled
          ></input>
        </div>
      ))}
    </div>
  );
};

export default ClusterParameters;
