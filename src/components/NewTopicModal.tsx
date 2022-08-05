import { Button, Form, Input, Modal, Radio, RadioChangeEvent } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewTopicModal } from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import Heading from './Heading';

const NewTopicModal: React.FC = () => {
  const { new_topic_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [otherValue, setOtherValue] = useState('');
  const [modalText, setModalText] = useState('Content of the modal');

  const handleOtherChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setOtherValue(e.target.value);
  };

  const handleOk = () => {
    setModalText('Great! Your topic has been added to wait list!');
    setConfirmLoading(true);
    setTimeout(() => {
      dispatch(setNewTopicModal(false));
      setConfirmLoading(false);
    }, 2000);
  };

  const handleCancel = () => {
    dispatch(setNewTopicModal(false));
  };
  return (
    <>
      <Modal
        okButtonProps={{
          disabled: otherValue === '',
        }}
        visible={new_topic_modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="modalStyle rounded-[15px]"
        width={486}
      >
        <Heading className="text-center mt-[80px]">New Topic</Heading>
        <Form.Item
          name="topic"
          rules={[
            {
              required: otherValue === '',
              message: 'Please write new topic!',
            },
          ]}
        >
          <Input.TextArea
            placeholder="Write new topic"
            value={otherValue}
            onChange={handleOtherChange}
            maxLength={26}
            showCount={true}
            autoSize={{ minRows: 1, maxRows: 2 }}
          />
        </Form.Item>
      </Modal>
    </>
  );
};

export default NewTopicModal;
