import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import  { useAuth } from "../authprovider/authprovider"
const FileUploader = () => {
    const handleUpload = async (e) => {
        e.preventDefault()
        if (!file) {
            console.log("No file selected");
            return;
        }
        const fd = new FormData();
        fd.append('file', file)
        await axios.post('https://httpbin.org/post', {
                experimentName: "Image Classification",
                algorithmId: "alg123",
                parameters: {
                    numTrees: 100,
                    maxDepth: 10,
                    minSamplesSplit: 2
                },
                dockerParams: {
                    driverMemory: 4,
                    executorMemory: 8,
                    cores: 4,
                    nodes: 3,
                    memoryOverhead: 512
                },
                user: {
                    userId: "user123",
                    email: "user@wvu.edu",
                    role: "Student"
                },
                file: fd,
        }, {
            'Host': "api.example.com",
            'Authorization': 'Bearer',
            'Content-Type': 'multipart/from-data;'
        })
        .then(res => console.log(res.data))
        .catch(err => console.err(err))
    }
    const [file, setFile] = useState(null);

    return (
        <form>
            <input onChange={(e) => setFile(e.target.files[0])} type='file' /> 
            <button onClick={ handleUpload }>Upload Data</button>
        </form>  
    );
};

export default FileUploader;
