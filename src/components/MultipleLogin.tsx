import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import config from '../config';
import image from '../resources/no-user-found.png';
import OrangeButton from './OrangeButton';

const MultipleLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleRelogin = () => {
    const cookie = new Cookies();
    cookie.remove('token', { path: '/', domain: config.DOMAIN_URL });
    window.location.reload();
  };

  return (
    <motion.div
      className="bg-white flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img className="w-[300px] md:w-[421px] mb-5" src={image} />
      <div className="font-magilio text-heading">Connection Error</div>
      <div className="font-magilio text-xs">
        Are you logged in on another tab/device?
      </div>
      <OrangeButton onClick={() => navigate('/')}>Try again</OrangeButton>
      <OrangeButton onClick={handleRelogin}>Re-login</OrangeButton>
    </motion.div>
  );
};

export default MultipleLogin;
