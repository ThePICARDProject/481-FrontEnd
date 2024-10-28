// TODO make the form json poops!
import React from "react";

// Function to handle JSON-ifying the form data
const Jsonify = ({
    selectedDataset,
    selectedPackage,
    parameterValues,
    additionalParameters
}) => {
    // JSON structure for the required arguments
    const requiredArgs = {
        classname: parameterValues["Class Name"] || "",
        jarname: parameterValues["Jar Name"] || "",
        dataset: selectedDataset || "",
        hdfsOutput: parameterValues["HDFS Output File"] || ""
    };

    // JSON structure for algorithm parameters
    const algorithmParams = {
        nodeCount: parameterValues["Node Count"] || "",
        driverMemory: parameterValues["Driver Memory"] || "",
        driverCores: parameterValues["Driver Cores"] || "",
        executorNum: parameterValues["Executor Number"] || "",
        executorCores: parameterValues["Executor Cores"] || "",
        executorMemory: parameterValues["Executor Memory"] || "",
        memoryOverhead: parameterValues["Memory Overhead"] || ""
    };

    // JSON structure for additional arguments
    const additionalArgs = additionalParameters.map((param, index) => ({
        argName: param.name,
        value: param.value,
        index: index + 1 // Adjusting index if needed for order
    }));

    // Final JSON object
    const jsonObject = {
        requiredArgs,
        algorithmParams,
        additionalArgs
    };

    // Log to check JSON structure
    console.log("JSON Object to send:", jsonObject);

    return jsonObject; 
};

export default Jsonify;
