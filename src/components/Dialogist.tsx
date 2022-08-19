/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import WhiteButton from './WhiteButton';
import { MdReport } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { setReportModal } from '../redux/actions/modal';
import axios from 'axios';
import UnknownAvatar from '../assets/profile/UnknownAvatar.png';
import { trimString } from '../utils';
import socket from '../socket';

interface DialogistProps {
  dialogist?: string;
  handleReveal: () => void;
}

const Dialogist: React.FC<DialogistProps> = ({ dialogist, handleReveal }) => {
  const dispatch = useDispatch();
  const [randomName, setRandomName] = useState('');
  const [revealButtonText, setRevealButtonText] = useState(
    'Request Name Reveal'
  );

  useEffect(() => {
    getRandomName();
  }, []);

  const getRandomName = async () => {
    const res = await axios.get('https://randomuser.me/api/');
    setRandomName('Anonymous ' + res.data.results[0].name.first);
  };

  const openReportModal = () => {
    dispatch(setReportModal(true));
  };

  const requestNameReveal = () => {
    setRevealButtonText('Requested');
    socket.emit('message', {
      content: 'I have requested name reveal!',
    });
    handleReveal();
  };

  return (
    <div className="lg:w-[380px] xl:w-[441px] xs:h-[100%] lg:h-[570px] bg-primaryRed xs:rounded-t-[15px] lg:rounded-b-[15px] flex lg:flex-col items-center xs:justify-around lg:justify-center xs:py-2 lg:py-0">
      <img
        src={UnknownAvatar}
        className="inline-block xs:h-[67px] lg:h-[245px] xs:w-[67px] lg:w-[245px] rounded-full lg:mt-[57px] lg:mb-[44px]"
      />
      <div className="flex flex-col items-center">
        <div className="flex items-center xs:mb-[8px] lg:mb-[19px]">
          <p className="font-alegreya xs:text-body lg:text-[40px] m-0 mr-[15px]">
            {trimString(dialogist) || randomName}
          </p>
        </div>
        <WhiteButton
          className="xs:mb-[7px] lg:mb-[23px]"
          onClick={requestNameReveal}
        >
          {dialogist ? 'Revealed' : revealButtonText}
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
