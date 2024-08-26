import React, { useState, useEffect } from 'react';

const FileUpload = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fileLimit = 25 * 1024 * 1024; // 25 MB

  useEffect(() => {
    const storedFiles = localStorage.getItem('uploadedFiles');
    if (storedFiles) {
      setFiles(JSON.parse(storedFiles));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('uploadedFiles', JSON.stringify(files));
  }, [files]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFiles = Array.from(e.target.files || []);
    validateAndSetFiles(newFiles);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const newFiles = Array.from(e.dataTransfer.files);
    validateAndSetFiles(newFiles);
  };

  const validateAndSetFiles = (newFiles: File[]) => {
    const validFiles = newFiles.filter(file => {
      if (file.size > fileLimit) {
        setError(`File ${file.name} exceeds the 25MB limit.`);
        return false;
      }
      if (file.type !== 'application/pdf') {
        setError(`File ${file.name} is not a PDF.`);
        return false;
      }
      return true;
    });

    if (validFiles.length > 0) {
      setFiles([...files, ...validFiles]);
      setError(null);
    }
  };

  return (
    <div>
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        className="border-dashed border-2 border-gray-400 p-6 rounded-lg text-center cursor-pointer"
      >
        Drag and drop your PDF files here or click to upload
        <input
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <ul className="mt-4">
        {files.map((file, index) => (
          <li key={index} className="text-gray-600">
            {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
