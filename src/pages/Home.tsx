import { message } from 'antd';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Identity from '../components/Identity';
import NewTopicModal from '../components/NewTopicModal';
import OnlineUsers from '../components/OnlineUsers';
import OrangeButton from '../components/OrangeButton';
import Topics from '../components/Topics';
import { TopicData } from '../interfaces';
import { authSelector } from '../redux/selectors/auth';
import socket from '../socket';

const topics: TopicData[] = [
  { topic_id: 1, topic_name: 'Anjay1', hot_status: true },
  { topic_id: 2, topic_name: 'Anjay2', hot_status: false },
  { topic_id: 3, topic_name: 'Anjay3', hot_status: false },
  { topic_id: 4, topic_name: 'Anjay4', hot_status: false },
  { topic_id: 5, topic_name: 'Anjay5', hot_status: false },
  { topic_id: 6, topic_name: 'Anjay6', hot_status: false },
  { topic_id: 7, topic_name: 'Anjay7', hot_status: false },
  { topic_id: 8, topic_name: 'Anjay8', hot_status: false },
  { topic_id: 9, topic_name: 'Anjay9', hot_status: false },
];

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { userData, topic } = useSelector(authSelector);
  const handleRedirectFindMatch: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (topic != -1 && topic != topics.length + 1) {
      socket.emit('matchmaking', topic.toString());
      navigate('/matchmaking', { replace: true });
    } else {
      message.error('Select a topic!');
    }
  };

  const handleRedirectSeeHistory: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    navigate('/history');
  };

  const { token } = useSelector(authSelector);

  useEffect(() => {
    // TODO: Set socket auth
    socket.auth = { token };
    socket.connect();
  }, []);

  return (
    <>
      <NewTopicModal />
      <div className="bg-white w-[100vw] h-[100vh] relative py-8">
        <div className="flex flex-col items-center text-center">
          <Identity name={userData?.name} nim={userData?.username}></Identity>
          <OrangeButton
            className="mt-3 mb-6"
            onClick={handleRedirectSeeHistory}
          >
            See Chat History
          </OrangeButton>
          <OnlineUsers numUsers={1500} />
          <Topics topics={topics} />
          <OrangeButton onClick={handleRedirectFindMatch}>
            Find Match
          </OrangeButton>
        </div>
      </div>
    </>
  );
};

export default Home;
