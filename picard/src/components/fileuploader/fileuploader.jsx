import React from 'react';
import Papa from "papaparse";
import './fileuploader.css';
const FileUploader = () => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        Papa.parse(file, {
            complete: (res) => {
                console.log(res.data);
            }
        });
    };

    return (
        <form style={{ margin: 0, padding: 0, width: '100%' }}>
            <label className="upload-button">
                Upload Data Set File
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