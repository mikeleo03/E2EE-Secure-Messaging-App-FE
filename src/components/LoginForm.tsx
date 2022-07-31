import { Button, Checkbox, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Modal, Radio } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrivacyPolicy from './PrivacyPolicy';

const LoginForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    setVisible(true);
  };

  const [visible, setVisible] = useState(false);

  const navigate = useNavigate();
  const navigateToHome = () => {
    if (value != ''){
      navigate('/');
    }
  };

  const [value, setValue] = useState('');

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

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
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
        <div className='flex justify-center h-auto'>
          <Button type="primary" htmlType='submit'
          style={{background:'#4699B7', borderRadius:'15px', borderColor:"#4699B7"}}>
            <p className='font-alegreya text-body px-5 text-white'>Sign In</p>
          </Button>
        </div>

        <Modal
          centered
          visible={visible}
          bodyStyle={{backgroundColor: '#797979'}}
          footer={null}
          width={1000}
          closable={false}
        >
          <div className='flex justify-center h-[50vh]'>
            <div className='bg-[#FFFFFF] w-[90vw] h-[50vh] top-10 rounded-lg'>
              <div className='flex justify-center h-auto'>
                <h1 className='font-magilio text-subHeading pt-2'>Terms and Conditions</h1>
              </div>
              <div className='overflow-y-auto h-[37vh] px-5'>
               <PrivacyPolicy/>
              </div>
            </div>
          </div>
          <div className='relative h-auto z-40'>
            <Form>
              <Form.Item
                name="radio"
                rules={[{ required: true, message: "You must agree to the Terms and Conditions to use the app." }]}
                className='p-0 font-alegreyasans'
              >
                <Radio.Group onChange={onChange} value={value} className='h-5'>
                  <Radio value={"checked"}>
                    <p className='font-alegreyasans text-body text-white font-bold pt-3'>I have read and agree to these terms and conditions</p>
                  </Radio>
                </Radio.Group>
              </Form.Item>
              <div className='flex justify-center h-auto'>
                <Button htmlType='submit' onClick={navigateToHome} 
                style={{background:'#FFA06E', borderRadius:'15px', borderColor:"#FFA06E"}}>
                  <p className='font-alegreya text-body px-16 text-white'>Submit</p>
                </Button>
              </div>
            </Form>
          </div>
        </Modal>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;