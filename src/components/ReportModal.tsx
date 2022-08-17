import { Button, Form, Input, Modal, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setReportModal } from '../redux/actions/modal';
import { authSelector } from '../redux/selectors/auth';
import { modalSelector } from '../redux/selectors/modal';
import { roomSelector } from '../redux/selectors/room';
import { submitReport } from '../services/modal-services';
import socket from '../socket';
import Heading from './Heading';

const ReportModal: React.FC = () => {
  const { report_modal } = useSelector(modalSelector);
  const { token, userData } = useSelector(authSelector);
  const { room_id } = useSelector(roomSelector);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [reportValue, setReportValue] = useState('');
  const [otherValue, setOtherValue] = useState('');
  const [modalText, setModalText] = useState('Content of the modal');

  const handleOtherChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherValue(e.target.value);
  };

  const handleRadioChange = (e: RadioChangeEvent) => {
    setReportValue(e.target.value);
  };

  const handleOk = async () => {
    setModalText('Thank you for your report!');
    setConfirmLoading(true);
    try {
      await submitReport({
        chat_id: room_id,
        issuer_id: userData?.username,
        reason: reportValue === 'Other' ? otherValue : reportValue,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        dispatch(setReportModal(false));
        setConfirmLoading(false);
        setReportValue('');
        setOtherValue('');
        form.resetFields();
      }, 1000);
    }
  };

  const handleCancel = () => {
    dispatch(setReportModal(false));
  };

  return (
    <>
      <Modal
        okButtonProps={{
          disabled:
            reportValue === '' ||
            (reportValue === 'Other' && otherValue === ''),
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
              <Radio value="It's a spam">It&apos;s a spam</Radio>
              <br />
              <Radio value="Nudity or sexual activity">
                Nudity or sexual activity
              </Radio>
              <br />
              <Radio value="Hate speech">Hate speech</Radio>
              <br />
              <Radio value="I just dont like it">I just dont like it</Radio>
              <br />
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="other"
            rules={[
              {
                required: reportValue === 'Other' && otherValue === '',
                message: 'Please give explaination! (For Other option)',
              },
            ]}
          >
            <Input.TextArea
              placeholder="Please explain (For other option)"
              disabled={reportValue !== 'Other'}
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
