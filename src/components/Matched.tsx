import { motion } from 'framer-motion';
import React from 'react';
import image from '../resources/matched.png';

const Matched: React.FC = () => {
  return (
    <motion.div
      className="bg-white flex flex-col items-center justify-center h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <img className="w-[300px] md:w-[421px] mb-5" src={image} />
      <div className="font-magilio text-heading">atched</div>
    </motion.div>
  );
};

export default Matched;
