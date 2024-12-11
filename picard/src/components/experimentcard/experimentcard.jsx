import React from "react";

const ExperimentCard = ({
  experimentName,
  link,
  resultsLink,
  experimentState,
}) => {
  const getExperimentState = (state) => {
    switch (state) {
      case 1:
        return { message: "In Progress", color: "text-yellow-500" };
      case 2:
        return { message: "In Progress", color: "text-yellow-500" };
      case 3:
        return { message: "Completed", color: "text-green-500" };
      case 4:
        return { message: "Failed", color: "text-red-500" };
    }
  };
  const { message, color } = getExperimentState(experimentState);

  return (
    <div className="card flex justify-between items-center p-5 m-2 border-2 bg-[#001D3D] rounded-lg shadow-md w-full">
      <div className="card-content flex justify-between items-center w-full">
        <h3
          className="m-0 text-lg flex-1 text-white"
          style={{ fontSize: "25px" }}
        >
          {experimentName}
        </h3>
        <a
          href={link}
          className="text-white no-underline flex-1 text-center"
          style={{ fontSize: "25px" }}
        >
          View Experiment
        </a>

        <a
          href={resultsLink}
          className="text-white no-underline flex-1 text-center"
          style={{ fontSize: "25px" }}
        >
          View Results
        </a>

        <div
          className={`progress-box text-lg flex-1 text-right ${color}`}
          style={{ fontSize: "25px" }}
        >
          <h5>{message}</h5>
        </div>
      </div>
    </div>
  );
};

export default ExperimentCard;
