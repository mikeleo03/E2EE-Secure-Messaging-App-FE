import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Identity from '../components/Identity';
import OnlineUsers from '../components/OnlineUsers';
import OrangeButton from '../components/OrangeButton';
import Topics from '../components/Topics';
import socket from '../socket';
import {Modal} from 'antd';
import PrivacyPolicy from '../components/PrivacyPolicy';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirectFindMatch: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    navigate('/matching-up', { replace: true });
  };
  const handleRedirectSeeHistory: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/history');
  };

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // TODO: Set socket auth
    setVisible(true);
    socket.connect();
  }, []);

  return (
    <div className="bg-white w-[100vw] h-[100vh] relative py-8">
      <Modal
        centered
        visible={visible}
        bodyStyle={{backgroundColor: '#797979'}}
        footer={null}
        width={1000}
        closable={false}
      >
        <PrivacyPolicy/>
      </Modal>
      <div className="flex flex-col items-center text-center">
        <Identity name="John Doe" nim="13514045"></Identity>
        <OrangeButton className="mt-3 mb-6" onClick={handleRedirectSeeHistory}>
          See Chat History
        </OrangeButton>
        <OnlineUsers numUsers={1500} />
        <Topics />
        <OrangeButton className="my-6" onClick={handleRedirectFindMatch}>
          Find Match
        </OrangeButton>
      </div>
    </div>
  );
};

export default Home;
