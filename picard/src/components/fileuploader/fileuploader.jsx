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
    const chunkSize = 1024 * 1024;
    let start = 0;
    let total = Math.ceil(file.size / chunkSize);
    while (start < file.size) {
      const formData = new FormData();
      formData.append("file", file.slice(start, start + chunkSize));
      formData.append("name", file.name);
      formData.append("description", "test");
      const res = await axios.post(
        "http://localhost:5080/api/dataset/upload",
        formData,
        {
          withCredentials: true,
          headers: {
            ChunkNumber: start + 1,
            TotalChunks: total,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      start += chunkSize;
    }
  };
  return (
    <form>
      <input type="file" onChange={handleFileChange} />
    </form>
  );
};

export default FileUploader;
