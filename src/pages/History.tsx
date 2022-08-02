import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import HistoryChat from '../components/HistoryChat';
import HistoryHeading from '../components/HistoryHeading';
import HistoryNametag from '../components/HistoryNametag';

const History: React.FC = () => {
  const [isHistorySelected, setIsHistorySelected] = useState(false);

  return (
    <div className="h-screen max-h-screen overflow-hidden">
      <HistoryHeading />
      <div className="flex relative">
        <div className="w-full lg:w-[644px] max-w-full flex-shrink-0 bg-primaryBlue">
          <div className="bg-primaryRed px-4 md:px-12 py-[14px] md:py-6 flex items-center gap-6">
            <input
              type="text"
              className="bg-secondaryGrey rounded-2xl h-[26px] md:h-11 
              flex-grow px-4 focus:outline-none text-body font-alegreyasans"
            />
            <IoIosSearch className="flex-shrink-0 w-[26px] md:w-10" size={40} />
          </div>
          <div className="md:pr-6">
            <div
              className="overflow-y-auto max-h-[calc(100vh-234px)] md:max-h-[calc(100vh-302px)] 
            h-screen px-4 md:pr-8 md:pl-11 py-8 flex flex-col gap-5"
            >
              {Array(10)
                .fill(0)
                .map((_, i) => (
                  <HistoryNametag
                    key={i}
                    name="Nama Orang 1"
                    lastChat={{
                      message: 'Ini chat terakhirnya',
                      time: new Date('5 July 2022 22:00+07:00'),
                    }}
                    onClick={() => setIsHistorySelected(true)}
                  />
                ))}
            </div>
          </div>
        </div>
        <HistoryChat
          show={isHistorySelected}
          backCallback={() => setIsHistorySelected(false)}
        />
      </div>
    </div>
  );
};

export default History;
