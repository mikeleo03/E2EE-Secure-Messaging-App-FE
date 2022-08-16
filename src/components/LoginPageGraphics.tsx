import React from 'react';
import pilarkiri from '../assets/vistock/loginpage/pilarkiri.svg';
import pilarkanan from '../assets/vistock/loginpage/pilarkanan.svg';
import awankiri from '../assets/vistock/loginpage/awankiri.svg';
import awankanan from '../assets/vistock/loginpage/awankanan.svg';
import awantebal from '../assets/vistock/loginpage/awantebal.svg';
import awantipis from '../assets/vistock/loginpage/awantipis.svg';
import bintang from '../assets/vistock/loginpage/bintang.svg';

import VStock from '../components/VStock';

const LoginPageGraphics: React.FC = () => {
  return (
    <div className="xs:hidden lg:flex bg-black">
      <VStock className="absolute w-[600px] bottom-[0px]" src={pilarkiri} />
      <VStock
        className="absolute w-[500px] bottom-[0px] right-[0px]"
        src={pilarkanan}
      />
      <VStock className="absolute w-[400px] top-[0px] z-40" src={awankiri} />
      <VStock
        className="absolute w-[400px] top-[0px] z-40 right-[0px]"
        src={awankanan}
      />
      <VStock
        className="absolute w-[400px] top-[0px] z-40 right-[0px]"
        src={awankanan}
      />
      <VStock
        className="absolute w-[550px] top-[0px] z-40 right-[200px]"
        src={awantipis}
      />
      <VStock
        className="absolute w-[600px] top-[0px] z-30 right-[650px]"
        src={awantebal}
      />
      <VStock
        className="absolute top-[0px] z-40 left-[430px] top-[75px]"
        src={bintang}
      />
    </div>
  );
};

export default LoginPageGraphics;
