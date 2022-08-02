import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import Heading from './Heading';
import Nametag from './Nametag';

const HistoryHeading: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 py-4 lg:pt-5 lg:pb-12">
      <button
        className="font-alegreya hidden lg:flex items-center gap-2.5 text-subHeading h-10"
        onClick={() => navigate('/', { replace: true })}
      >
        <FiChevronLeft
          strokeWidth={3}
          className="flex-shrink-0"
          stroke="#B7B7B7"
          size={24}
        />
        <span className="mt-1">Main Menu</span>
      </button>
      <div className="grid lg:grid-cols-3 items-end">
        <div></div>
        <Heading className="justify-self-center items-center m-0 mt-[22px] lg:mt-0">
          History
        </Heading>
        <Nametag
          name="Namanya siapa"
          nim="123456789"
          className="justify-self-end row-start-1 lg:col-start-3"
        />
      </div>
    </div>
  );
};

export default HistoryHeading;
