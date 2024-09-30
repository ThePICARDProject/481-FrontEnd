import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Papa from "papaparse"
import  { useAuth } from "../authprovider/authprovider"
const FileUploader = () => {


    const handleFileChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
            const formData = new FormData()
            formData.append('file', file)
            const res = await axios.post("http://localhost:5080/api/dataset/upload", formData, {
                headers: {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            }).then((res) => console.log(res))
        }
    return (
        <form>
            <input onChange={handleFileChange} type='file' /> 
        </form>  
    );
};

export default FileUploader;
