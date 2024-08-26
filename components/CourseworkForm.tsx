import React, { useState } from 'react';

type Coursework = {
  courseworkType: string;
  subject: string;
  essayTitle: string;
};

const CourseworkForm = () => {
  const [courseworkType, setCourseworkType] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [essayTitle, setEssayTitle] = useState<string>('');

  const handleSave = () => {
    const formData: Coursework = { courseworkType, subject, essayTitle };
    const storedCourseworks = localStorage.getItem('courseworks');
    const courseworks: Coursework[] = storedCourseworks ? JSON.parse(storedCourseworks) : [];
    courseworks.push(formData);
    localStorage.setItem('courseworks', JSON.stringify(courseworks));
  };

  return (
    <div className="mt-6">
      <div className="mb-4">
        <label className="block text-gray-700">Coursework Type</label>
        <select
          value={courseworkType}
          onChange={(e) => setCourseworkType(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Type</option>
          <option value="essay">Essay</option>
          <option value="project">Project</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Subject</label>
        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        >
          <option value="">Select Subject</option>
          <option value="math">Mathematics</option>
          <option value="science">Science</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Essay Title</label>
        <input
          type="text"
          value={essayTitle}
          onChange={(e) => setEssayTitle(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </div>
      <button
        onClick={handleSave}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Save
      </button>
    </div>
  );
};

export default CourseworkForm;
