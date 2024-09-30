// FileUploadButton.js
import React, { useRef } from 'react';
import { BsCloudUploadFill } from 'react-icons/bs';

const FileUploadButton = () => {
  const fileInputRef = useRef(null);

  const handleButtonClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      console.log('Selected file:', files[0]); // You can handle the file as needed
    }
  };

  return (
    <div>
      <button 
        type="button" 
        className="uploadbtn" 
        onClick={handleButtonClick}
      >
        <BsCloudUploadFill />   Browse data
      </button>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        style={{ display: 'none' }} // Hide the input
      />
    </div>
  );
};

export default FileUploadButton;
