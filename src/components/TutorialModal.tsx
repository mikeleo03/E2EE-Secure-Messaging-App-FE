import { Modal } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTutorialModal } from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import Heading from './Heading';
import CaptionCard from './CaptionCard';

const TutorialModal: React.FC = () => {
  const { tutorial_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(setTutorialModal(false));
  };

  return (
    <>
      <Modal
        visible={tutorial_modal}
        className="modalStyle rounded-[15px] bg-primaryBlue"
        onCancel={handleCancel}
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
              <CaptionCard text="1. Choose Your Topic." />
            </div>
            <div>
              <CaptionCard
                text="2. Click Finding Match Button to find a match. 
              Matchmaking is limited to 50 times/day"
              />
            </div>
            <div>
              <CaptionCard text="3. Wait for a match to occur." />
            </div>
            <div>
              <CaptionCard
                text="4. If after a period of time you havent found a match, you will be asked to 
              choose another topic."
              />
            </div>
            <div>
              <CaptionCard
                text="5. if there is a match found, you will be redirected to the chat room with 
              your matching person."
              />
            </div>
            <div>
              <CaptionCard text="6. Click Reveal My Name button together to reveal name." />
            </div>
            <div>
              <CaptionCard text="7. Click Next button for finding new match." />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TutorialModal;
