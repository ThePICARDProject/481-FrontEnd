
const Jsonify = ({
    selectedDataset,
    selectedPackage,
    parameterValues,
    additionalParameters,
    clusterParameters
}) => {
    const experiment_parameters = {
        classname: parameterValues["Class Name"] || "",
        jarname: parameterValues["Jar Name"] || "",
        dataset: selectedDataset || "",
        package: selectedPackage || "",
        hdfsOutput: parameterValues["HDFS Output File"] || ""
    };

    const clusterParams = clusterParameters.reduce((acc, param) => {
        acc[param.name] = param.value;
        return acc;
    }, {});

    const additionalArgs = additionalParameters.map((param, index) => ({
        argName: param.name,
        value: param.value,
        index: index + 1
    }));

    const jsonObject = {
        experiment_parameters,
        clusterParams,
        additionalArgs
    };

    console.log("JSON Object to send:", jsonObject);
    return jsonObject;
};

export default Jsonify;
