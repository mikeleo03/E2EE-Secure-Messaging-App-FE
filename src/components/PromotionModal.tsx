/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';
import Iklan from '../assets/iklan.png';
import { modalSelector } from '../redux/selectors/modal';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { setPromotionModal } from '../redux/actions/modal';

const PromotionModal: React.FC = () => {
  const { promotion_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(setPromotionModal(false));
  };

  return (
    <>
      {promotion_modal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden fixed z-50 left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] outline-none focus:outline-none ">
            <div className="relative w-auto mx-auto">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <img
                  src={Iklan}
                  alt=""
                  className="max-w-[300px] sm:max-w-[400px]"
                />
                <div
                  onClick={closeModal}
                  className="text-[30px] absolute top-5 right-5 bg-white/70 rounded-full cursor-pointer"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default PromotionModal;
