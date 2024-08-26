import React from 'react';

const EvaluationDisplay = () => {
  const dummyEvaluation = {
    score: 85,
    criteria: {
      A: 28,
      B: 30,
      C: 27,
    },
    date: '2024-08-26',
  };

  return (
    <div className="mt-8 p-6 border rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Evaluation Results</h2>
      <div className="mb-4">
        <p className="text-gray-700">Overall Score:</p>
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-3xl font-bold">
          {dummyEvaluation.score}%
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">Score Breakdown:</p>
        <ul className="list-disc pl-5">
          <li>Criteria A: {dummyEvaluation.criteria.A}</li>
          <li>Criteria B: {dummyEvaluation.criteria.B}</li>
          <li>Criteria C: {dummyEvaluation.criteria.C}</li>
        </ul>
      </div>
      <div className="mb-4">
        <p className="text-gray-700">Evaluation Date:</p>
        <p>{dummyEvaluation.date}</p>
      </div>
    </div>
  );
};

export default EvaluationDisplay;
