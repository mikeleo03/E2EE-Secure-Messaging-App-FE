import { message } from 'antd';
import React, { useEffect, useState, useRef, useCallback } from 'react';
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
import OnlineUsers from '../components/OnlineUsers';
import { computeSharedSecret, generateKeyPair } from '../algorithms/ECDH/ECDHUtils'
import { ECPoint, EllipticCurve } from '../algorithms/ECC/EllipticCurve';
import { setWithExpiry } from '../utils/expiryStorage';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { is_loading } = useSelector(commonSelector);
  const { userData, topic } = useSelector(authSelector);

  const [onlineUsers, setOnlineUsers] = useState(0);
  const userPrivateKeyRef = useRef<string>('');

  // Define the curve
  const curve = new EllipticCurve();

  const handleRedirectFindMatch: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    if (topic != -1 && topic != topicData.length + 1) {
      // HANDSAKING
      // SEND ACK TO SERVER
      // User's key pair
      const userKeys = generateKeyPair(curve);
      const privateKey = userKeys.privateKey.toString();
      userPrivateKeyRef.current = privateKey;
      socket.emit('handshakeServer', userKeys.publicKey.toString());
    } else {
      message.error('Select a topic!');
    }
  }, [topic]);

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

  const connectSocket = useCallback(async () => {
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
  }, [userData?.username, is_loading, navigate]);

  useEffect(() => {
    socket.auth = { token };
    connectSocket();

    socket.on('onlineUsers', (value) => {
      setOnlineUsers(value);
    });

    socket.on('continueMatch', () => {
      navigate('/matchmaking', { replace: true });
    });

    socket.on('quotaExceeded', () => {
      // eslint-disable-next-line quotes
      message.error("Your daily matchmaking quota has reached its limit");
    });

    socket.on('finishLoading', () => {
      dispatch(setIsLoading(false));
    });

    socket.on('connect_error', (err) => {
      // TODO: Handle and redirect to error page
      console.error(err);
      navigate('/connection-error', { replace: true });
    });

    socket.emit('getOnlineUsers');

    return () => {
      socket.off('onlineUsers');
      socket.off('continueMatch');
      socket.off('quotaExceeded');
      socket.off('finishLoading');
      socket.off('connect_error');
    };
  }, [connectSocket, dispatch, navigate]);

  useEffect(() => {
    socket.on('handshakeClient', (serverPublicKey: string) => {
      const serverPublic = ECPoint.fromString(serverPublicKey);
      const userPrivateKey = userPrivateKeyRef.current; // Get the latest private key from ref
      const userServerSharedSecret = computeSharedSecret(BigInt(userPrivateKey), serverPublic, curve);
      const data = JSON.stringify({ x: userServerSharedSecret.x.toString(), y: userServerSharedSecret.y.toString() });
      setWithExpiry(socket.id, data, 10 * 60 * 1000);
      socket.emit('matchmaking', topic.toString());
    });

    return () => {
      socket.off('handshakeClient');
    };
  }, [topic]);

  return (
    <>
      <NewTopicModal />
      {is_loading ? (
        <Loading />
      ) : (
        <div className="bg-white w-full h-[100vh] relative py-8">
          <HomeGraphics />
          <div className="flex flex-col items-center text-center">
            <Identity name={userData?.name} nim={userData?.username}></Identity>
            <div className="xs:w-[90%] lg:w-[281px]">
              <p className="text-primaryRed">
                Samitra akan ditutup pada 28 Agustus 2022 pukul 22:00 WIB
              </p>
            </div>
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
      )}
    </>
  );
};

export default Home;
