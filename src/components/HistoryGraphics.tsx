import React from 'react';
import jamur from '../assets/vistock/history/jamur.svg';
import kunang from '../assets/vistock/history/kunang.svg';
import kunang2 from '../assets/vistock/history/kunang2.svg';
import VStock from '../components/VStock';

const HistoryGraphics: React.FC = () => {
  return (
    <div className="xs:hidden 3xl:flex">
      <VStock className="absolute w-[170px] top-[100px]" src={jamur} />

      <VStock
        className="absolute w-[350px] top-[50px] left-[280px]"
        src={kunang}
      />
      <VStock
        className="absolute w-[350px] top-[50px] left-[850px]"
        src={kunang2}
      />
    </div>
  );
};

export default HistoryGraphics;
