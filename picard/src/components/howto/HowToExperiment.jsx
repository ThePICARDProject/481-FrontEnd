import React, { useState } from "react";

const HowToExperiment = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded((prev) => !prev);
    };

    return (
        <div style={{ margin: "10px 0" }}>
            <button
                onClick={toggleExpand}
                className="bg-[#001D3D] text-white px-4 py-2 rounded"
                style={{ width: "100%", textAlign: "center", cursor: "pointer" }}
            >
                {isExpanded ? "How to Run an Experiment" : "How to Run an Experiment"}
            </button>
            {isExpanded && (
                <div
                    className="bg-gray-100 p-4 rounded mt-2 shadow"
                    style={{ maxHeight: "200px", overflowY: "auto" }}
                >
                    <p>
                        1. Click "Add New Algorithm" to upload or select an algorithm for your experiment.
                    </p>
                    <p>
                        2. Click "Add New CSV Data" to upload or select a dataset for the experiment.
                    </p>
                    <p>
                        3. Once both an algorithm and dataset are selected, click "Proceed to Experiment Setup."
                    </p>
                    <p>
                        4. Configure your experiment parameters and start the experiment from the setup page.
                    </p>
                </div>
            )}
        </div>
    );
};

export default HowToExperiment;
