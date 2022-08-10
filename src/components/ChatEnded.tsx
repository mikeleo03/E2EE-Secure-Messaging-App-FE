import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../resources/image.png';
import OrangeButton from './OrangeButton';

interface ChatEndedProps {
  msg: string;
}

const ChatEnded: React.FC<ChatEndedProps> = ({ msg }) => {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate('/', { replace: true });
  };

  return (
    <motion.div
      className="bg-white flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img className="w-[300px] md:w-[421px] mb-5" src={image} />
      <div className="font-magilio text-heading">{msg}</div>
      <OrangeButton onClick={handleGoToHome}>Go To Home</OrangeButton>
    </motion.div>
  );
};

export default ChatEnded;
