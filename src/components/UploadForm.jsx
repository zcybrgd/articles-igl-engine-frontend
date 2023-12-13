import React, { useState } from 'react';
import { uploadPDF } from '../services/api';

const UploadForm = () => {
  const [fileType, setFileType] = useState('file');
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState('');
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please select a valid PDF file.');
    }
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleUpload = async () => {
    try {
      if ((fileType === 'file' && file) || (fileType === 'url' && url)) {
        console.log("inside the iff")
        const response = await uploadPDF(fileType === 'file' ? file : url);
        // Check if the response has a 'message' property
        if (response && response.message) {
          console.log("Here is our response message: " + response.message);
        } else {
          console.log("Unexpected response structure:", response);
        }
      }
    } catch (error) {
      console.error('Error during upload:', error);
      setError('Error during upload. Please try again.');
    }
  };
  

  return (
    <div>
      <label>
        <input type="radio" value="file" checked={fileType === 'file'} onChange={() => setFileType('file')} />
        Upload File
      </label>
      <input type="file" accept=".pdf" onChange={handleFileChange} disabled={fileType !== 'file'} />

      <label>
        <input type="radio" value="url" checked={fileType === 'url'} onChange={() => setFileType('url')} />
        Upload URL
      </label>
      <input type="text" placeholder="Enter PDF URL" onChange={handleUrlChange} disabled={fileType !== 'url'} />

      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button onClick={handleUpload} disabled={!file && !url}>
        Upload
      </button>
    </div>
  );
};

export default UploadForm;
