import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { useLocation } from "react-router-dom";

// Set the workerSrc for PDF.js
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js`;


export const Reportcontent = ({ pdfUrl: propPdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const location = useLocation();
  
  // Retrieve the PDF URL from query parameters if not provided as a prop
  const params = new URLSearchParams(location.search);
  const pdfUrl = propPdfUrl || params.get("pdfUrl");

  // Callback for when the document is successfully loaded
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      {pdfUrl ? (
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      ) : (
        <p>No PDF available.</p>
      )}
      
      <div>
        <button
          disabled={pageNumber <= 1}
          onClick={() => setPageNumber(pageNumber - 1)}
        >
          Previous
        </button>
        <span> Page {pageNumber} of {numPages} </span>
        <button
          disabled={pageNumber >= numPages}
          onClick={() => setPageNumber(pageNumber + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
