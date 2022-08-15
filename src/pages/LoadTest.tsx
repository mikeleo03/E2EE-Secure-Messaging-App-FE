import React from 'react';
import { loadTest } from '../socket/load-test';

const LoadtTestPage: React.FC = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center content-center flex-col gap-48 bg-[#79C7D4]">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => loadTest()}
      >
        Test
      </button>
    </div>
  );
};

export default LoadtTestPage;
