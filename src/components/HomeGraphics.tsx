import React from 'react';
import batukiri from '../assets/vistock/home/batukiri.png';
import batukanan from '../assets/vistock/home/batukanan.png';
import bintang from '../assets/vistock/home/bintang.png';
import VStock from '../components/VStock';

const HomeGraphics: React.FC = () => {
  return (
    <div>
      <div className="xs:hidden lg:flex">
        <VStock
          className="absolute w-[550px] left-[0px] top-[0px]"
          src={batukiri}
        />

        <VStock
          className="absolute w-[550px] top-[0px] right-[0px]"
          src={batukanan}
        />
      </div>
      <div className="xs:hidden 3xl:flex">
        <VStock
          className="absolute w-[200px] top-[100px] left-[950px]"
          src={bintang}
        />
        <VStock
          className="absolute w-[200px] top-[100px] left-[380px]"
          src={bintang}
        />
      </div>
    </div>
  );
};

export default HomeGraphics;
