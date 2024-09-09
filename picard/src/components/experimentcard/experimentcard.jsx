import React from 'react';
import './experimentcard.css';

const ExperimentCard = ({ experimentName, link, experimentState }) => {
  return (
    <div className="card">
      <div className="card-content">
        <h3>{experimentName}</h3>
        <a href={link} target="_blank" rel="noopener noreferrer">View Experiment</a>
      </div>
      <div className="progress-box">
        <h5>✔️{experimentState}</h5>
      </div>
    </div>
  );
};

export default ExperimentCard;
