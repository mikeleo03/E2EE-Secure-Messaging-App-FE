import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useMemo, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { useSelector } from 'react-redux';
import HistoryChat, { HistoryData } from '../components/HistoryChat';
import HistoryHeading from '../components/HistoryHeading';
import HistoryNametag from '../components/HistoryNametag';
import { authSelector } from '../redux/selectors/auth';
import { getAllHistories } from '../services/history-services';

const History: React.FC = () => {
  const [selectedHistory, setSelectedHistory] = useState<HistoryData | null>(
    null
  );
  const { userData } = useSelector(authSelector);
  const [histories, setHistories] = useState<Array<HistoryData>>([]);
  const [search, setSearch] = useState('');
  const filteredHistories = useMemo(
    () =>
      histories.filter(
        (h) =>
          h.topic_name.toLowerCase().includes(search) ||
          h.message.toLowerCase().includes(search)
      ),
    [histories, search]
  );

  useEffect(() => {
    async function fetchHistories() {
      if (userData?.username) {
        try {
          const histories = await getAllHistories(userData.username);
          setHistories(histories);
        } catch (error) {
          console.log(error);
        }
      }
    }
    fetchHistories();
  }, [userData?.username]);

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
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
            />
            <IoIosSearch className="flex-shrink-0 w-[26px] md:w-10" size={40} />
          </div>
          <div className="md:pr-6">
            <div
              className="overflow-y-auto max-h-[calc(100vh-234px)] md:max-h-[calc(100vh-302px)] 
            h-screen px-4 md:pr-8 md:pl-11 py-8 flex flex-col gap-5"
            >
              <AnimatePresence exitBeforeEnter>
                {filteredHistories.map((history) => (
                  <HistoryNametag
                    key={history.chat_id}
                    name={history.topic_name}
                    lastChat={{
                      message: history.message,
                      time: new Date(history.timestamp),
                    }}
                    onClick={() => setSelectedHistory(history)}
                  />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <HistoryChat
          history={selectedHistory}
          backCallback={() => setSelectedHistory(null)}
        />
      </div>
    </div>
  );
};

export default History;
