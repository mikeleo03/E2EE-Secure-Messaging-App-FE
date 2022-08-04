import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Identity from '../components/Identity';
import OnlineUsers from '../components/OnlineUsers';
import OrangeButton from '../components/OrangeButton';
import Topics from '../components/Topics';
import { authSelector } from '../redux/selectors/auth';
import socket from '../socket';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirectFindMatch: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    navigate('/matchmaking', { replace: true });
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
    <div className="bg-white w-[100vw] h-[100vh] relative py-8">
      <div className="flex flex-col items-center text-center">
        <Identity name="John Doe" nim="13514045"></Identity>
        <OrangeButton className="mt-3 mb-6" onClick={handleRedirectSeeHistory}>
          See Chat History
        </OrangeButton>
        <OnlineUsers numUsers={1500} />
        <Topics />
        <OrangeButton onClick={handleRedirectFindMatch}>
          Find Match
        </OrangeButton>
      </div>
    </div>
  );
};

export default Home;
