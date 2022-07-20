import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {
  setNewTopicModal,
  setPrivacyPolicyModal,
  setReportModal,
} from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import { stores } from '../redux/stores';
import { Button } from 'antd';

const ReduxDemo: React.FC = () => {
  // Redux adalah library react yang bertujuan untuk mencentralisasi data
  // Salah satu manfaatnya adalah bisa mengakses seluruh variabel yang dibutuhkan antar komponen
  // Tanpa redux, kita hanya bisa menyalurkan variabel dari parent ke children element menggunakan props
  // dengan adanya redux, kita dapat mengakses suatu variabel dari manapun

  console.log(stores.getState());
  // stores.getState() berfungsi untuk melihat keseluruhan store

  /* 
  contohnya, store = {
    modal: {
      privacy_policy_modal: false,
      new_topic_modal: false,
      tutorial_modal: false,
      report_modal: false,
    },
    auth: {
      isLoggedIn: true,
      username: "haikal",
      role: "anggota",
    }
  }
  */

  const modalState = useSelector(modalSelector);
  console.log(modalState);
  // useSelector untuk menyeleksi beberapa bagian dari keseluruhan state redux
  /*
    isi dari modalState adalah 
    {
      privacy_policy_modal: false,
      new_topic_modal: false,
      tutorial_modal: false,
      report_modal: false,
    }
  */

  const {
    privacy_policy_modal,
    new_topic_modal,
    tutorial_modal,
    report_modal,
  } = useSelector(modalSelector);
  // gunakan destructuring jika hanya ingin mengambil satu property dari modalState

  const dispatch = useDispatch();
  // dispatch merupakan sarana untuk mengubah isi dari state

  const togglePrivacyPolicy = () => {
    dispatch(setPrivacyPolicyModal(!privacy_policy_modal));
    // mengubah privacy_policy_modal
  };

  const toggleNewTopicModal = () => {
    dispatch(setNewTopicModal(!new_topic_modal));
  };

  const toggleTutorialModal = () => {
    dispatch(setNewTopicModal(!tutorial_modal));
  };

  const toggleReportModal = () => {
    dispatch(setReportModal(!report_modal));
  };

  return (
    <div>
      <div>Privacy Modal: {privacy_policy_modal.toString()}</div>
      <div>New Topic Modal: {new_topic_modal.toString()}</div>
      <div>Tutorial Modal: {tutorial_modal.toString()}</div>
      <div>Report Modal: {report_modal.toString()}</div>

      <div className="flex w-[500px] justify-between">
        <Button type="primary" onClick={togglePrivacyPolicy}>
          Privacy Policy
        </Button>
        <button className="bg-red-500" onClick={toggleNewTopicModal}>
          New Topic Modal
        </button>
        <button className="bg-green-500" onClick={toggleTutorialModal}>
          Tutorial Modal
        </button>
        <button className="bg-yellow-500" onClick={toggleReportModal}>
          Report Modal
        </button>
      </div>
    </div>
  );
};

export default ReduxDemo;
