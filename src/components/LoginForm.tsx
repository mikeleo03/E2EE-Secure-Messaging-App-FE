import { Button, Form, Input, Modal } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import PrivacyPolicy from './PrivacyPolicy';
import authServices from '../services/auth-services';
import { useDispatch } from 'react-redux';
import { setIsAuthorized, setToken } from '../redux/actions/auth';

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const onFinish = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    console.log('Success:', { username, password });
    setIsLoading(true);
    try {
      const res = await authServices.login({ username, password });
      dispatch(setToken(res.jwt));
      dispatch(setIsAuthorized(true));
      setVisible(true);
    } catch (error) {
      // TODO: Handle warning invalid usenrame/pasword
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [visible, setVisible] = useState(false);

  return (
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
        <Input
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

        <Modal
          centered
          visible={visible}
          bodyStyle={{ backgroundColor: '#797979' }}
          footer={null}
          width={1000}
          closable={false}
        >
          <PrivacyPolicy />
        </Modal>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;