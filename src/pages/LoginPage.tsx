import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {

  return (
    <div className="bg-[#FFC176] w-[100vw] h-[100vh] relative py-8">
      <div className="absolute w-full h-[10vh] top-32 lg:top-52 left-0 right-0 z-2">
        <div className="flex justify-center">
          <div className="bg-[#F27267] xs:w-[54vw] sm:w-[40vw] lg:w-[25vw] xs:h-40 lg:h-24 z-40 rounded-lg"/>
        </div>
      </div>
      <div className="absolute w-full xs:h-[50vh] lg:h-80 xs:bottom-0 lg:top-96 z-2">
        <div className="flex justify-center">
          <div className='bg-[#F7F7F8] xs:w-[70vw] sm:w-[50vw] lg:w-[35vw] rounded-lg 
            xs:px-8 lg:px-16 xs:pt-4 lg:pt-9 xs:pb-0 lg:pb-2'>
            <LoginForm/>
          </div>  
        </div>
      </div>
      <div className="absolute bg-[#79C7D4] w-full xs:h-52 lg:h-64 top-0 z-1"/>
    </div>
  );
};

export default LoginPage;
