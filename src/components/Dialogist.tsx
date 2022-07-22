import React from 'react';
import WhiteButton from './WhiteButton';
import { MdReport } from 'react-icons/md';

interface DialogistProps {
  name: string;
  reveal: boolean;
  setReveal: (reveal: boolean) => void;
}

const Dialogist: React.FC<DialogistProps> = ({ name, reveal, setReveal }) => {
  return (
    <div className="w-[441px] h-[570px] bg-primaryRed rounded-[15px] flex flex-col items-center">
      <div className="inline-block h-[245px] w-[245px] rounded-full bg-black mt-[57px] mb-[44px]"></div>
      <div className="flex items-center mb-[19px]">
        <p className="font-alegreya text-[40px] m-0 mr-[15px]">{name}</p>
        <div className="h-[28px] w-[28px] rounded-full bg-secondaryGreen"></div>
      </div>
      <WhiteButton className="mb-[23px]" onClick={() => setReveal(!reveal)}>
        Reveal My Name
      </WhiteButton>
      <WhiteButton
        className="text-secondaryRed"
        color="red"
        Icon={<MdReport />}
      >
        Report
      </WhiteButton>
    </div>
  );
};

export default Dialogist;
