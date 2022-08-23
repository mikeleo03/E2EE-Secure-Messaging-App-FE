export enum ModalType {
  SET_PRIVACY_POLICY_MODAL = 'SET_POLICY_MODAL',
  SET_NEW_TOPIC_MODAL = 'SET_NEW_TOPIC_MODAL',
  SET_TUTORIAL_MODAL = 'SET_TUTORIAL_MODAL',
  SET_REPORT_MODAL = 'SET_REPORT_MODAL',
  SET_PROMOTION_MODAL = 'SET_PROMOTION_MODAL',
}

export interface ModalState {
  privacy_policy_modal: boolean;
  new_topic_modal: boolean;
  tutorial_modal: boolean;
  report_modal: boolean;
  promotion_modal: boolean;
}

export interface SetModal {
  type:
    | ModalType.SET_PRIVACY_POLICY_MODAL
    | ModalType.SET_NEW_TOPIC_MODAL
    | ModalType.SET_TUTORIAL_MODAL
    | ModalType.SET_REPORT_MODAL
    | ModalType.SET_PROMOTION_MODAL;
  payload: boolean;
}

export type ModalAction = SetModal;
