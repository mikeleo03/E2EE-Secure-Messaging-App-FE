import { Button, Form, Input} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import React, { useRef, useState, useEffect } from 'react';

const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" 
          // onChange={(e) => setUser(e.target.value)} value={user}
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
          // onChange={(e) => setPwd(e.target.value)} value={pwd}
        />
      </Form.Item>

      <Form.Item>
        <div className='flex justify-center h-auto'>
          <Button type="primary" htmlType='submit'
            style={{background:'#4699B7', borderRadius:'15px', borderColor:'#4699B7'}}>
            <p className='font-alegreya text-body px-5 text-white'>Sign In</p>
          </Button>
        </div>

      </Form.Item>
    </Form>
  );
};

export default LoginForm;