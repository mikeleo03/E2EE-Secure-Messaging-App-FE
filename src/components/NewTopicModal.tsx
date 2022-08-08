import { Form, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNewTopicModal } from '../redux/actions/modal';
import { modalSelector } from '../redux/selectors/modal';
import { requestNewTopic } from '../services/modal-services';
import Heading from './Heading';

const NewTopicModal: React.FC = () => {
  const { new_topic_modal } = useSelector(modalSelector);
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const [confirmLoading, setConfirmLoading] = useState(false);
  const [newTopicValue, setNewTopicValue] = useState('');
  const [modalText, setModalText] = useState('');

  const handleOtherChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTopicValue(e.target.value);
  };

  const handleOk = async () => {
    setModalText('Great! Your topic has been added to wait list!');
    setConfirmLoading(true);
    try {
      await requestNewTopic(newTopicValue);
      setNewTopicValue('');
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        dispatch(setNewTopicModal(false));
        setConfirmLoading(false);
        setNewTopicValue('');
        form.resetFields();
      }, 1000);
    }
  };

  const handleCancel = () => {
    dispatch(setNewTopicModal(false));
    setNewTopicValue('');
    form.resetFields();
  };

  return (
    <>
      <Modal
        okButtonProps={{
          disabled: newTopicValue === '',
        }}
        visible={new_topic_modal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
        className="modalStyle rounded-[15px]"
        width={486}
      >
        <Heading className="text-center mt-[80px]">New Topic</Heading>
        <Form form={form}>
          <Form.Item
            name="topic"
            rules={[
              {
                required: newTopicValue === '',
                message: 'Please write new topic!',
              },
            ]}
          >
            <Input.TextArea
              placeholder="Write new topic"
              value={newTopicValue}
              onChange={handleOtherChange}
              maxLength={26}
              showCount={true}
              autoSize={{ minRows: 1, maxRows: 2 }}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default NewTopicModal;
