import React, { useState } from "react";
import { Toast, Button } from "react-bootstrap";
import "./HowToExperiment.css";

const HowToExperiment = () => {
  const [show, setShow] = useState(false);

  const toggleToast = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {/* Button to trigger the toast */}
      <Button
        className="position-fixed bottom-0 end-0 m-4"
        style={{ zIndex: 1050 }}
        variant="primary"
        onClick={toggleToast}
      >
        How to Run an Experiment
      </Button>

      {/* Toast Component */}
      <Toast
        show={show}
        onClose={toggleToast}
        className="position-fixed bottom-0 end-0 m-4 custom-toast"
        style={{ zIndex: 1050, width: "500px" }}
        autohide={false} // Keeps the toast open until closed by the user
      >
        <Toast.Header>
          <strong className="me-auto">Experiment Guide</strong>
          <button
            type="button"
            className="btn-close"
            onClick={toggleToast}
            aria-label="Close"
          ></button>
        </Toast.Header>
        <Toast.Body>
          <ol>
            <li>Click "Add New Algorithm" to upload or select an algorithm.</li>
            <li>Click "Add New CSV Data" to upload.</li>
            <li>
              Click "Proceed to Experiment Setup" to configure and run your
              experiment.
            </li>
            <li>
              Configure parameters and start the experiment on the next page.
            </li>
          </ol>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default HowToExperiment;
