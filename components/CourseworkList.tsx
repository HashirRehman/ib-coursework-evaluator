import React, { useState, useEffect } from 'react';

type Coursework = {
  courseworkType: string;
  subject: string;
  essayTitle: string;
};

const CourseworkList = () => {
  const [courseworks, setCourseworks] = useState<Coursework[]>([]);

  useEffect(() => {
    const storedCourseworks = localStorage.getItem('courseworks');
    if (storedCourseworks) {
      setCourseworks(JSON.parse(storedCourseworks));
    }
  }, []);

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">Uploaded Courseworks</h2>
      <ul>
        {courseworks.map((coursework, index) => (
          <li key={index} className="mb-2 p-4 border rounded-lg shadow">
            <h3 className="text-lg font-semibold">{coursework.essayTitle}</h3>
            <p>Subject: {coursework.subject}</p>
            <p>Coursework Type: {coursework.courseworkType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseworkList;
