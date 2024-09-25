import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Papa from "papaparse"
import  { useAuth } from "../authprovider/authprovider"
const FileUploader = () => {


    const handleFileChange = async (e) => {
        e.preventDefault()
        const file = e.target.files[0]
        const chunkSize = 1024*1024
        let start = 0

        while (start < file.size()) {
            const formData = new FormData()
            formData.append('file', file.slice(start, start + chunkSize))
            
            const res = await axios.post("http://127.0.0.1:5000/upload", formData, {
                headers: {
                    headers: { 'Content-Type': 'multipart/form-data' }
                }
            }).then((res) => console.log(res))
            
            start += chunkSize

        }
    }
    return (
        <form>
            <input onChange={handleFileChange} type='file' /> 
        </form>  
    );
};

export default FileUploader;
