/* eslint-disable max-len */
import React from 'react';
import WhiteButton from './WhiteButton';
import { MdReport } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setReportModal } from '../redux/actions/modal';

interface DialogistProps {
  name: string;
  reveal: boolean;
  setReveal: (reveal: boolean) => void;
}

const Dialogist: React.FC<DialogistProps> = ({ name, reveal, setReveal }) => {
  const dispatch = useDispatch();

  const openReportModal = () => {
    dispatch(setReportModal(true));
  };

  return (
    <div className="lg:w-[380px] xl:w-[441px] xs:h-[100%] lg:h-[570px] bg-primaryRed xs:rounded-t-[15px] lg:rounded-b-[15px] flex lg:flex-col items-center xs:justify-around lg:justify-center xs:py-2 lg:py-0">
      <div className="inline-block xs:h-[67px] lg:h-[245px] xs:w-[67px] lg:w-[245px] rounded-full bg-black lg:mt-[57px] lg:mb-[44px]"></div>
      <div className="flex flex-col items-center">
        <div className="flex items-center xs:mb-[8px] lg:mb-[19px]">
          <p className="font-alegreya xs:text-body lg:text-[40px] m-0 mr-[15px]">
            {name}
          </p>
          <div className="xs:h-[14px] lg:h-[28px] xs:w-[14px] lg:w-[28px] rounded-full bg-secondaryGreen"></div>
        </div>
        <WhiteButton
          className="xs:mb-[7px] lg:mb-[23px]"
          onClick={() => setReveal(!reveal)}
        >
          Reveal My Name
        </WhiteButton>
        <WhiteButton
          onClick={openReportModal}
          className="text-secondaryRed"
          color="red"
          Icon={<MdReport />}
        >
          Report
        </WhiteButton>
      </div>
    </div>
  );
};

export default Dialogist;
