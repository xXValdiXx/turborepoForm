import React from 'react';

interface SpinnerProps {
  size?: string; 
  color?: string; 
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'h-8 w-8', color = 'border-blue-500' }) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`animate-spin rounded-full ${size} border-t-2 border-b-2 ${color}`}
      ></div>
    </div>
  );
};

export default Spinner;
