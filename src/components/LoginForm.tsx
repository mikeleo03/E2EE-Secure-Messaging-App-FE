import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPrivacyPolicyModal } from '../redux/actions/modal';
import PrivacyPolicyModal from './PrivacyPolicyModal';

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
    setUsername(username);
    setPassword(password);

    setTimeout(() => {
      setIsLoading(false);
      dispatch(setPrivacyPolicyModal(true));
    }, 300);
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
