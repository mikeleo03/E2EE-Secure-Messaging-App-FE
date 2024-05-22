import { Button, Form, Input, message } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPrivacyPolicyModal } from '../redux/actions/modal';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import authServices from '../services/auth-services';
import { setIsAuthorized, setToken, setUserData } from '../redux/actions/auth';
import { LoginStatusResponse } from '../interfaces/auth';
import Cookies from 'universal-cookie';
import config from '../config';
import { AxiosError } from 'axios';

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onFinish = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    setIsLoading(true);
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
      setIsLoading(false);
    }
  };

  return (
    <>
      <PrivacyPolicyModal username={username} password={password} />
      <Form
        name="basic"
        wrapperCol={{ span: 25 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <div className="flex justify-center h-auto">
            <Button
              type="primary"
              htmlType="submit"
              style={{
                background: '#4699B7',
                borderRadius: '15px',
                borderColor: '#4699B7',
              }}
              loading={isLoading}
            >
              <p className="font-alegreya text-body px-5 text-white">Sign In</p>
            </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
