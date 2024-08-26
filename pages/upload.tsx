import React from 'react';
import FileUpload from '../components/FileUpload';
import CourseworkForm from '../components/CourseworkForm';
import EvaluationDisplay from '../components/EvaluationDisplay';
import CourseworkList from '../components/CourseworkList';

const UploadPage = () => {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Upload Coursework</h1>
      <FileUpload />
      <CourseworkForm />
      <EvaluationDisplay />
      <CourseworkList />
    </div>
  );
};

export default UploadPage;
