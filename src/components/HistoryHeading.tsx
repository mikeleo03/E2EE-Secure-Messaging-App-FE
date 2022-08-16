import React from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authSelector } from '../redux/selectors/auth';
import Heading from './Heading';
import HistoryGraphics from './HistoryGraphics';
import Nametag from './Nametag';
import jamur2 from '../assets/vistock/history/jamur2.svg';
import VStock from '../components/VStock';

const HistoryHeading: React.FC = () => {
  const navigate = useNavigate();
  const { userData } = useSelector(authSelector);
  return (
    <div className="px-6 py-4 lg:pt-5 lg:pb-12">
      <HistoryGraphics />
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
        <div> </div>
        <div className="justify-self-center items-center m-0 mt-[22px] lg:mt-0 flex">
          <VStock src={jamur2} />
          <Heading className="m-auto">History</Heading>
        </div>
        <Nametag
          name={userData?.name}
          nim={userData?.username}
          className="justify-self-end row-start-1 lg:col-start-3"
        />
      </div>
    </div>
  );
};

export default HistoryHeading;
