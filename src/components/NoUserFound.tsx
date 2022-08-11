import { motion } from 'framer-motion';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import OrangeButton from '../components/OrangeButton';
import image from '../resources/no-user-found.png';

const Matched: React.FC = () => {
  const navigate = useNavigate();
  const handleRedirect: React.MouseEventHandler<HTMLButtonElement> = () => {
    navigate('/', { replace: true });
  };

  return (
    <motion.div
      className="bg-white flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img className="w-[300px] md:w-[421px] mb-5" src={image} />
      <div className="font-magilio text-heading">No ser ound</div>
      <OrangeButton className="my-6" onClick={handleRedirect}>
        Back To Main Page
      </OrangeButton>
    </motion.div>
  );
};

export default Matched;
