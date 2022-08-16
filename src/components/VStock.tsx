/* eslint-disable max-len */
import React from 'react';

interface VStockProps {
  className?: string;
  src?: string;
}

const VStock: React.FC<VStockProps> = ({ className, src }) => {
  return (
    <div>
      <img className={`${className} pointer-events-none`} src={src} />
    </div>
  );
};

export default VStock;
