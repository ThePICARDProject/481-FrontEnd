import React from 'react';
import { useState } from 'react';
import axios from 'axios'
const FileUploader = () => {
    const handleUpload = async (e) => {
        e.preventDefault()
        if (!file) {
            console.log("No file selected");
            return;
        }
        const fd = new FormData();
        fd.append('file', file)
        await axios.post('https://echo.free.beeceptor.com', fd, {
            headers: {
                
            }
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
