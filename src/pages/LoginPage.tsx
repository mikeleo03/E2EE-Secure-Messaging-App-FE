import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {

  return (
    <div className="bg-[#FFC176] w-[100vw] h-[100vh] relative py-8">
        <div className="absolute w-full h-[10vh] top-36 left-0 right-0 z-2">
            <div className="flex justify-center">
                <div className="bg-[#F27267] w-[25vw] h-[15vh] w-[30vw] top-0 z-40 rounded-lg"/>
            </div>
        </div>
        <div className="absolute w-full h-[50vh] bottom-0 z-2">
          <div className="flex justify-center">
            <div className='bg-[#F7F7F8] w-[35vw] rounded-lg px-16 pt-9 pb-2'>
              <LoginForm/>
            </div>  
          </div>
        </div>
        <div className="absolute bg-[#79C7D4] w-full h-[30vh] top-0 z-1"/>
    </div>
  );
};

export default LoginPage;
