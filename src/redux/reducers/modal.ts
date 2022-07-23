/* eslint-disable indent */
import { ModalAction, ModalState, ModalType } from '../types/modal';

const initialState: ModalState = {
  privacy_policy_modal: false,
  new_topic_modal: false,
  tutorial_modal: false,
  report_modal: false,
};

const {
  SET_PRIVACY_POLICY_MODAL,
  SET_NEW_TOPIC_MODAL,
  SET_TUTORIAL_MODAL,
  SET_REPORT_MODAL,
} = ModalType;

const modal = (
  state: ModalState = initialState,
  action: ModalAction
): ModalState => {
  const { type } = action;

  const setPrivacyPolicyModal = (): ModalState => {
    const { payload: privacy_policy_modal } = action;
    return {
      ...state,
      privacy_policy_modal,
    };
  };

  const setNewTopicModal = (): ModalState => {
    const { payload: new_topic_modal } = action;
    return {
      ...state,
      new_topic_modal,
    };
  };

  const setTutorialModal = (): ModalState => {
    const { payload: tutorial_modal } = action;
    return {
      ...state,
      tutorial_modal,
    };
  };

  const setReportModal = (): ModalState => {
    const { payload: report_modal } = action;
    return {
      ...state,
      report_modal,
    };
  };

  switch (type) {
    case SET_PRIVACY_POLICY_MODAL:
      return setPrivacyPolicyModal();
    case SET_NEW_TOPIC_MODAL:
      return setNewTopicModal();
    case SET_TUTORIAL_MODAL:
      return setTutorialModal();
    case SET_REPORT_MODAL:
      return setReportModal();
    default:
      return state;
  }
};

export default modal;
