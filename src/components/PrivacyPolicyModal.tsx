import { Checkbox, Form, Input, message, Modal } from 'antd';
import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import config from '../config';
import { LoginStatusResponse } from '../interfaces/auth';
import { setIsAuthorized, setToken, setUserData } from '../redux/actions/auth';
import { setPrivacyPolicyModal } from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import authServices from '../services/auth-services';
import Heading from './Heading';
import PrivacyPolicyContent from './PrivacyPolicyContent';

interface PrivacyPolicyModalProps {
  username: string;
  password: string;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  username,
  password,
}) => {
  const { privacy_policy_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [modalText, setModalText] = useState('');

  const handleOk = async () => {
    setModalText('Great! Your topic has been added to wait list!');
    setConfirmLoading(true);
    try {
      const res = (await authServices.login({
        username,
        password,
      })) as LoginStatusResponse;
      dispatch(setToken(res.jwt));
      dispatch(setIsAuthorized(true));
      dispatch(
        setUserData({
          username: res.user.username,
          name: res.user.name,
          sex: res.user.sex,
          campus: res.user.campus,
          faculty: res.user.faculty,
        })
      );

      // Set cookies
      const cookie = new Cookies();
      const maxAge = 30 * 24 * 3600;
      cookie.set('token', res.jwt, {
        path: '/',
        maxAge,
        domain: config.DOMAIN_URL,
      });
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      if (err.response?.status === 403) {
        message.error('You are Banned!');
      } else if (err.response?.status === 400) {
        message.error('Wrong username/password');
      } else {
        message.error('Unknown error! Please try again later');
      }
    } finally {
      setConfirmLoading(false);
    }
  };

  const handleCancel = () => {
    dispatch(setPrivacyPolicyModal(false));
    setIsChecked(false);
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
            checked={isChecked}
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
