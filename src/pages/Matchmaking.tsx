import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Matched from '../components/Matched';
import MatchingUp from '../components/MatchingUp';
import NoUserFound from '../components/NoUserFound';
import { setTopic } from '../redux/actions/auth';
import { setRoomId } from '../redux/actions/room';
import { authSelector } from '../redux/selectors/auth';
import { stores } from '../redux/stores';
import socket from '../socket';

const Matchmaking: React.FC = () => {
  const [status, setStatus] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { topic } = useSelector(authSelector);

  const handleNotFound = () => {
    socket.emit('matchNotFound', topic.toString());
    setStatus(2);
    dispatch(setTopic(-1));
  };

  useEffect(() => {
    if (topic === -1) {
      navigate('/', { replace: true });
    }
    socket.on('matched', (roomId) => {
      setStatus(1);
      dispatch(setTopic(-1));
      navigate('/chat');
      clearTimeout(matchmakingTimeout);
      dispatch(setRoomId(roomId));
    });

    const matchmakingTimeout = setTimeout(() => {
      handleNotFound();
    }, 30000);

    return () => handleNotFound();
  }, []);

  return (
    <>
      {status === 0 ? (
        <MatchingUp />
      ) : status === 1 ? (
        <Matched />
      ) : (
        <NoUserFound />
      )}
    </>
  );
};

export default Matchmaking;
