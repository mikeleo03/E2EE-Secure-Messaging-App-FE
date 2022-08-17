import { Checkbox, Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrivacyPolicyModal } from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import Heading from './Heading';
import PrivacyPolicyContent from './PrivacyPolicyContent';

const PrivacyPolicyModal: React.FC = () => {
  const { privacy_policy_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleOk = async () => {
    setModalText('Great! Your topic has been added to wait list!');
    setConfirmLoading(true);
    // try {
    //   await requestNewTopic(newTopicValue);
    //   setNewTopicValue('');
    // } catch (error) {
    //   console.log(error);
    // } finally {
    //   setTimeout(() => {
    //     dispatch(setNewTopicModal(false));
    //     setConfirmLoading(false);
    //     setNewTopicValue('');
    //     form.resetFields();
    //   }, 1000);
    // }
    setConfirmLoading(false);
    dispatch(setPrivacyPolicyModal(false));
  };

  const handleCancel = () => {
    dispatch(setPrivacyPolicyModal(false));
    form.resetFields();
  };

  return (
    <>
      <Modal
        okButtonProps={{
          disabled: !isChecked,
        }}
        visible={privacy_policy_modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="modalStyle rounded-[15px]"
        width={486}
      >
        <Heading className="text-center mt-[80px]">Privacy Policy</Heading>
        <Form form={form}>
          <PrivacyPolicyContent />
          <Checkbox
            style={{ paddingLeft: '1.25rem', paddingTop: '10px' }}
            onChange={(e) => setIsChecked(e.target.checked)}
          >
            I agree to the privacy policy agreement
          </Checkbox>
        </Form>
      </Modal>
    </>
  );
};

export default PrivacyPolicyModal;
