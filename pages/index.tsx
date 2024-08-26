import React from 'react';
import Link from 'next/link';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">IB Coursework Evaluator</h1>
      <p className="mb-4">Welcome to the IB Coursework Evaluator application.</p>
      <Link href="/upload">
        <span className="text-blue-500 underline">Go to Upload Page</span>
      </Link>
    </div>
  );
};

export default HomePage;
