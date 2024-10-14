import React from "react";
import Papa from "papaparse";
import axios from "axios";
import "./fileuploader.css";
const FileUploader = () => {
  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    const res = await axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          headers: { "Content-Type": "multipart/form-data" },
        },
      })
      .then((res) => console.log(res));
  };
  return (
    <form style={{ margin: 0, padding: 0, width: "100%" }}>
      <label className="upload-button">
        Upload Data Set or Driver Package
        <input
          type="file"
          onChange={handleFileChange}
          className="hidden-file-input"
        />
      </label>
    </form>
  );
};

export default FileUploader;
