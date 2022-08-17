import React from 'react';
import Heading from '../components/Heading';
import LoginForm from '../components/LoginForm';
import LoginPageGraphics from '../components/LoginPageGraphics';
import Logo from '../assets/LogoOnly.png';

const LoginPage: React.FC = () => {
  return (
    <div>
      <LoginPageGraphics />
      <div className="h-screen w-screen flex items-center flex-col gap-48 bg-[#FFC176]">
        <div className="w-full h-[200px] lg:h-[225px] flex items-center justify-center relative bg-[#79C7D4]">
          <div
            className="bg-[#F27267] w-[54vw] sm:w-[40vw] lg:w-[25vw] h-40 lg:h-24 z-40 rounded-lg
        absolute mx-auto xs:top-28 lg:top-44 flex justify-center items-center"
          >
            <Heading className="text-white m-auto"> amir</Heading>
          </div>
        </div>
        <div className="absolute top-72 flex">
          <div className="font-alegreyasans text-body m-auto mr-[10px]">
            Presented by
          </div>
          <img src={Logo} className="w-[40px]"></img>
        </div>
        <div
          className="bg-[#F7F7F8] xs:w-[70vw] sm:w-[50vw] lg:w-[35vw] rounded-lg
        xs:px-8 lg:px-16 xs:pt-4 lg:pt-9 xs:pb-0 lg:pb-2 m-[-40px]"
        >
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
