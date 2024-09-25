import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import Papa from "papaparse"
import  { useAuth } from "../authprovider/authprovider"
const FileUploader = () => {


    const handleFileChange = (e) => {
        const file = e.target.files[0]
        Papa.parse(file, {
            complete: (res) => {
                console.log(res.data)
            }
        })
    }
    return (
        <form>
            <input onChange={handleFileChange} type='file' /> 
        </form>  
    );
};

export default FileUploader;
