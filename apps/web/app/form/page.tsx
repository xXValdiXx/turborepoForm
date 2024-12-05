import React from 'react';
import FormWithSpinner from './components/FormWithSpinner/FormWithSpinner';

const MyPage: React.FC = () => {
  return (
    <div className="p-8  min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Form</h1>
      <FormWithSpinner/>
    </div>
  );
};

export default MyPage;
