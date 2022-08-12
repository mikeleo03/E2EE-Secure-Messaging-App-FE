import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Identity from '../components/Identity';
import NewTopicModal from '../components/NewTopicModal';
import OnlineUsers from '../components/OnlineUsers';
import OrangeButton from '../components/OrangeButton';
import Topics from '../components/Topics';
import TutorialModal from '../components/TutorialModal';
import config from '../config';
import topicData from '../utils/topicdata';
import { authSelector } from '../redux/selectors/auth';
import socket from '../socket';
import { stores } from '../redux/stores';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { userData, topic } = useSelector(authSelector);

  const handleRedirectFindMatch: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    if (topic != -1 && topic != topicData.length + 1) {
      socket.emit('matchmaking', topic.toString());
    } else {
      message.error('Select a topic!');
    }
  };

  const handleLogout: React.MouseEventHandler<HTMLButtonElement> = () => {
    console.log('logout');
    const cookie = new Cookies();
    cookie.remove('token', { path: '/', domain: config.DOMAIN_URL });
    window.location.reload();
  };

  const handleRedirectSeeHistory: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    navigate('/history');
  };

  const { token } = useSelector(authSelector);
  const [onlineUsers, setOnlineUsers] = useState(0);

  useEffect(() => {
    socket.auth = { token };
    socket.connect();

    socket.on('onlineUsers', (value) => {
      setOnlineUsers(value);
    });

    socket.on('continueMatch', () => {
      navigate('/matchmaking', { replace: true });
    });

    socket.on('quotaExceeded', () => {
      // eslint-disable-next-line quotes
      message.error("Your daily matchmaking quota has reached it's limit");
    });

    socket.emit('getOnlineUsers');
  }, []);

  console.log(stores.getState());

  return (
    <>
      <TutorialModal />
      <NewTopicModal />
      <div className="bg-white w-[100vw] h-[100vh] relative py-8">
        <div className="flex flex-col items-center text-center">
          <Identity name={userData?.name} nim={userData?.username}></Identity>
          <OrangeButton className="mt-3 mb-6" onClick={handleLogout}>
            Logout
          </OrangeButton>
          <OrangeButton
            className="mt-3 mb-6"
            onClick={handleRedirectSeeHistory}
          >
            See Chat History
          </OrangeButton>
          <OnlineUsers numUsers={onlineUsers} />
          <Topics topics={topicData} />
          <OrangeButton onClick={handleRedirectFindMatch}>
            Find Match
          </OrangeButton>
        </div>
      </div>
    </>
  );
};

export default Home;
