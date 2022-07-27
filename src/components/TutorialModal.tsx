import { Button, Form, Input, Modal, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTutorialModal } from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import Heading from './Heading';
import Card from './Card';
import CaptionCard from './CaptionCard';

const TutorialModal: React.FC = () => {
  const { tutorial_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        visible={true}
        className="modalStyle rounded-[15px] bg-primaryBlue"
        footer={null}
        width={930}
        bodyStyle={{
          backgroundColor: '#79C7D4',
        }}
      >
        <Heading className="text-center">Tutorial</Heading>
        <div className="">
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <CaptionCard
                text="1. Choose Your Topic."
                className={`font-alegreyasans xs:text-body md:text-subHeading flex items-center px-10 xs:w-[280px] md:w-[700px]`}
              />
            </div>
            <div>
              <CaptionCard
                text="2. Click Finding Match Button to find a match."
                className={`font-alegreyasans xs:text-body md:text-subHeading items-center pl-10 h-[80px] xs:w-[280px] xs:h-[50px] md:w-[700px]`}
              />
            </div>
            <div>
              <CaptionCard
                text="3. Wait for a match to occur."
                className={`font-alegreyasans xs:text-body md:text-subHeading flex items-center pl-10 xs:w-[280px] md:w-[700px]`}
              />
            </div>
            <div>
              <CaptionCard
                text="4. If after a period of time you havent found a match, you will be asked to choose another topic."
                className={`font-alegreyasans xs:text-body md:text-subHeading flex items-center pl-10 xs:w-[280px] xs:h-[80px] md:w-[700px] md:h-[80px]`}
              />
            </div>
            <div>
              <CaptionCard
                text="5. if there is a match found, you will be redirected to the chat room with your matching person."
                className={`font-alegreyasans xs:text-body md:text-subHeading flex items-center pl-10 xs:w-[280px] md:w-[700px] h-[80px]`}
              />
            </div>
            <div>
              <CaptionCard
                text="6. Click Reveal My Name button together to reveal name."
                className={`font-alegreyasans xs:text-body md:text-subHeading flex items-center pl-10 xs:w-[280px] md:w-[700px] h-[50px]`}
              />
            </div>
            <div>
              <CaptionCard
                text="7. Click Next button for finding new match."
                className={`font-alegreyasans xs:text-body md:text-subHeading flex items-center pl-10 xs:w-[280px] md:w-[700px] h-[80px]`}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TutorialModal;
