import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../resources/matching-up.png';
import OrangeButton from './OrangeButton';

const Matched: React.FC = () => {
  const [loadingFrame, setLoadingFrame] = useState(0);
  const [isCancelButton, setIsCancelButton] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingFrame((loadingFrame) => (loadingFrame + 1) % 4);
    }, 300);

    setTimeout(() => {
      setIsCancelButton(true);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white flex flex-col items-center justify-center h-screen">
      <motion.img
        className="w-[300px] md:w-[421px] mb-5"
        src={image}
        animate={{ opacity: [1, 0.7, 0.6, 1], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
      />
      <div className="font-magilio text-heading">
        atching Up{'.'.repeat(Math.abs(loadingFrame))}
      </div>
      {isCancelButton && (
        <OrangeButton onClick={() => navigate('/', { replace: true })}>
          Cancel
        </OrangeButton>
      )}
    </div>
  );
};

export default Matched;
