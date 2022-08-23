import { ModalAction, ModalType } from '../types/modal';

const {
  SET_PRIVACY_POLICY_MODAL,
  SET_NEW_TOPIC_MODAL,
  SET_TUTORIAL_MODAL,
  SET_REPORT_MODAL,
  SET_PROMOTION_MODAL,
} = ModalType;

export const setPrivacyPolicyModal = (value: boolean): ModalAction => {
  return {
    type: SET_PRIVACY_POLICY_MODAL,
    payload: value,
  };
};

export const setNewTopicModal = (value: boolean): ModalAction => {
  return {
    type: SET_NEW_TOPIC_MODAL,
    payload: value,
  };
};

export const setTutorialModal = (value: boolean): ModalAction => {
  return {
    type: SET_TUTORIAL_MODAL,
    payload: value,
  };
};

export const setReportModal = (value: boolean): ModalAction => {
  return {
    type: SET_REPORT_MODAL,
    payload: value,
  };
};

export const setPromotionModal = (value: boolean): ModalAction => {
  return {
    type: SET_PROMOTION_MODAL,
    payload: value,
  };
};
