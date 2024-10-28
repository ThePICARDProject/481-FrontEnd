import React from "react";
import { useState } from "react";
import axios from "axios";
import Papa from "papaparse";
import { useAuth } from "../authprovider/authprovider";
const FileUploader = () => {
  const handleFileChange = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", file.name);
    formData.append("description", "test");
    const res = await axios.post(
      "http://localhost:5080/api/dataset/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  return (
    <form>
      <input type="file" onChange={handleFileChange} />
    </form>
  );
};

export default FileUploader;
