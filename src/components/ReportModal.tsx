import { Button, Form, Input, Modal, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReportModal } from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import { submitReport } from '../services/modal-services';
import socket from '../socket';
import Heading from './Heading';

const ReportModal: React.FC = () => {
  const { report_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [reportValue, setReportValue] = useState(0);
  const [otherValue, setOtherValue] = useState('');
  const [modalText, setModalText] = useState('Content of the modal');
  console.log(socket);

  //   const handleOk = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
  //     }).catch(() => console.log('Oops errors!'));
  //   };

  const handleOtherChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherValue(e.target.value);
  };

  const handleRadioChange = (e: RadioChangeEvent) => {
    setReportValue(e.target.value);
  };

  const handleOk = async () => {
    setModalText('Thank you for your report!');
    setConfirmLoading(true);
    // setTimeout(() => {
    //   dispatch(setReportModal(false));
    //   setConfirmLoading(false);
    // }, 2000);

    // try{
    //   const res = (await submitReport({}))
    // }
  };

  const handleCancel = () => {
    dispatch(setReportModal(false));
  };

  return (
    <>
      <Modal
        okButtonProps={{
          disabled:
            reportValue === 0 || (reportValue === 5 && otherValue === ''),
        }}
        visible={report_modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="modalStyle rounded-[15px]"
      >
        <Heading>Why are you reporting this account?</Heading>
        <Form form={form}>
          <Form.Item
            name="radio"
            rules={[{ required: true, message: 'Please select an option!' }]}
          >
            <Radio.Group onChange={handleRadioChange} value={reportValue}>
              <Radio value={1}>It&apos;s a spam</Radio>
              <br />
              <Radio value={2}>Nudity or sexual activity</Radio>
              <br />
              <Radio value={3}>Hate speech</Radio>
              <br />
              <Radio value={4}>I just dont like it</Radio>
              <br />
              <Radio value={5}>Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="other"
            rules={[
              {
                required: reportValue === 5 && otherValue === '',
                message: 'Please give explaination!',
              },
            ]}
          >
            <Input.TextArea
              placeholder="Please explain"
              value={otherValue}
              onChange={handleOtherChange}
              maxLength={200}
              showCount={true}
              autoSize={{ minRows: 3, maxRows: 10 }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ReportModal;
