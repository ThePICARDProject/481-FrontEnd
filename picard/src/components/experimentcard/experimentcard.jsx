import React from "react";

const ExperimentCard = ({ experimentName, link, experimentState }) => {
  const getExperimentState = (state) => {
    switch (state) {
      case "Completed":
        return { message: "Completed", color: "text-green-500" };
      case "In Progress":
        return { message: "In Progress", color: "text-yellow-500" };
      case "Not Started":
        return { message: "Not Started", color: "text-red-500" };
    }
  };
  const { message, color } = getExperimentState(experimentState);

  return (
    <div className="card flex justify-between items-center p-5 m-2 border-2 bg-[#001D3D] rounded-lg shadow-md w-full">
      <div className="card-content flex justify-between items-center w-full">
        <h3 className="m-0 text-lg flex-1 text-white">{experimentName}</h3>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white no-underline flex-1 text-center hover:underline"
        >
          View Experiment
        </a>
        <div className={`progress-box text-lg flex-1 text-right ${color}`}>
          <h5>{message}</h5>
        </div>
      </div>
    </div>
  );
};

export default ExperimentCard;
