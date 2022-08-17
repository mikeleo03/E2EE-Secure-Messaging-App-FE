import { message } from 'antd';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import Identity from '../components/Identity';
import NewTopicModal from '../components/NewTopicModal';
import OrangeButton from '../components/OrangeButton';
import Topics from '../components/Topics';
import TutorialModal from '../components/TutorialModal';
import config from '../config';
import topicData from '../utils/topics';
import { authSelector } from '../redux/selectors/auth';
import socket from '../socket';
import Loading from '../components/Loading';
import { commonSelector } from '../redux/selectors/common';
import { useDispatch } from 'react-redux';
import { setIsLoading } from '../redux/actions/common';
import { setTopic } from '../redux/actions/auth';
import { setRoomId } from '../redux/actions/room';
import authServices from '../services/auth-services';
import HomeGraphics from '../components/HomeGraphics';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { is_loading } = useSelector(commonSelector);
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

  const connectSocket = async () => {
    const username = userData?.username as string;
    try {
      const res = await authServices.canConnectSocket(username);
      if (res.canConnect || !is_loading) {
        socket.connect();
      } else {
        navigate('/connection-error', { replace: true });
      }
    } catch (error) {
      console.error(error);
      navigate('/connection-error', { replace: true });
    }
  };

  useEffect(() => {
    socket.auth = { token };
    connectSocket();

    // socket.on('onlineUsers', (value) => {
    //   setOnlineUsers(value);
    // });

    socket.on('continueMatch', () => {
      navigate('/matchmaking', { replace: true });
    });

    socket.on('quotaExceeded', () => {
      // eslint-disable-next-line quotes
      message.error("Your daily matchmaking quota has reached it's limit");
    });

    socket.on('finishLoading', () => {
      dispatch(setIsLoading(false));
    });

    socket.on('connect_error', (err) => {
      // TODO: Handle and redirect to error page
      console.error(err);
      navigate('/connection-error', { replace: true });
    });

    socket.on('matched', (roomId) => {
      dispatch(setTopic(-1));
      navigate('/chat');
      dispatch(setRoomId(roomId));
    });

    socket.emit('getOnlineUsers');
  }, []);

  return (
    <>
      <TutorialModal />
      <NewTopicModal />
      {is_loading ? (
        <Loading />
      ) : (
        <div className="bg-white w-[100vw] h-[100vh] relative py-8">
          <HomeGraphics />
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
            {/* <OnlineUsers numUsers={onlineUsers} /> */}
            <Topics topics={topicData} />
            <OrangeButton onClick={handleRedirectFindMatch}>
              Find Match
            </OrangeButton>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
