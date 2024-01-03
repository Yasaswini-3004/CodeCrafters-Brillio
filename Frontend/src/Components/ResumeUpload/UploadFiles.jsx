import React, { useState} from 'react';
import './UploadFiles.css'; // Import the CSS file

const UploadFiles = () => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      // Simulate file upload progress
      const interval = setInterval(() => {
        setUploadProgress((prevProgress) => {
          if (prevProgress === 100) {
            clearInterval(interval);
            return 100;
          }
          return prevProgress + 20;
        });
      }, 500);
    } else {
      console.log('Please select a file');
    }
  };

  return (
    <div className="upload-container">
      <h1>Upload Resume</h1>
      <hr></hr>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleFileChange}
      />
      <button className="resume-upload-button" onClick={handleUpload}>Upload</button>
      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default UploadFiles;
