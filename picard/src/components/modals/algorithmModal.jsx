import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function AlgorithmModal() {
  const [show, setShow] = useState(false);
  const [jarFile, setJarFile] = useState(null);
  const [parameters, setParameters] = useState([{ name: "", dataType: "int" }]);
  const [AlgorithmName, setAlgorithmName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (e) => setJarFile(e.target.files[0]);

  const handleParameterChange = (index, event) => {
    const { name, value } = event.target;
    const newParameters = [...parameters];
    newParameters[index][name] = value;
    setParameters(newParameters);
  };

  const handleAlgNameChange = (e) => {
    setAlgorithmName(e.target.value);
  };

  const addParameter = () =>
    setParameters([...parameters, { name: "", dataType: "int" }]);

  const removeParameter = (index) => {
    const newParameters = parameters.filter((_, i) => i !== index);
    setParameters(newParameters);
  };

  const handleModalSubmit = () => {
    const algorithmData = {
      algorithmName: AlgorithmName,
      parameters,
      jarFileName: jarFile ? jarFile.name : null,
    };
    console.log(algorithmData);
    handleClose();
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        + Add New Algorithm
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          style={{ backgroundColor: `#001D3D`, color: `white` }}
          closeButton
        >
          <Modal.Title>Add New Algorithm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/* JAR File Upload */}
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Upload JAR File</Form.Label>
              <Form.Control type="file" onChange={handleFileChange} />

              {/* Algorithm Name Input */}
              <Form.Control
                type="text"
                placeholder="Algorithm Name"
                value={AlgorithmName}
                onChange={handleAlgNameChange}
                className="mt-3"
              />
            </Form.Group>

            {/* Parameters Section */}
            <div>
              <h5>Parameters</h5>
              {parameters.map((param, index) => (
                <div key={index} className="d-flex mb-2">
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Parameter Name"
                    value={param.name}
                    onChange={(e) => handleParameterChange(index, e)}
                    className="me-2"
                  />
                  <Form.Select
                    name="dataType"
                    value={param.dataType}
                    onChange={(e) => handleParameterChange(index, e)}
                    className="me-2"
                  >
                    <option value="int">int</option>
                    <option value="float">float</option>
                    <option value="boolean">boolean</option>
                    <option value="string">string</option>
                  </Form.Select>
                  <Button
                    variant="danger"
                    onClick={() => removeParameter(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="15"
                      height="15"
                      viewBox="0 0 26 26"
                    >
                      <path d="M 11 -0.03125 C 10.164063 -0.03125 9.34375 0.132813 8.75 0.71875 C 8.15625 1.304688 7.96875 2.136719 7.96875 3 L 4 3 C 3.449219 3 3 3.449219 3 4 L 2 4 L 2 6 L 24 6 L 24 4 L 23 4 C 23 3.449219 22.550781 3 22 3 L 18.03125 3 C 18.03125 2.136719 17.84375 1.304688 17.25 0.71875 C 16.65625 0.132813 15.835938 -0.03125 15 -0.03125 Z M 11 2.03125 L 15 2.03125 C 15.546875 2.03125 15.71875 2.160156 15.78125 2.21875 C 15.84375 2.277344 15.96875 2.441406 15.96875 3 L 10.03125 3 C 10.03125 2.441406 10.15625 2.277344 10.21875 2.21875 C 10.28125 2.160156 10.453125 2.03125 11 2.03125 Z M 4 7 L 4 23 C 4 24.652344 5.347656 26 7 26 L 19 26 C 20.652344 26 22 24.652344 22 23 L 22 7 Z M 8 10 L 10 10 L 10 22 L 8 22 Z M 12 10 L 14 10 L 14 22 L 12 22 Z M 16 10 L 18 10 L 18 22 L 16 22 Z"></path>
                    </svg>
                  </Button>
                </div>
              ))}
              <Button className="bg-[#001D3D]" onClick={addParameter}>
                + Add Parameter
              </Button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={handleModalSubmit}>
            Save Algorithm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlgorithmModal;
