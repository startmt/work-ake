import { Modal, Input, Form } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
const ModalOrder = ({
  visible,
  handleOk,
  confirmLoading,
  handleCancel,
  ModalText,
}) => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 6 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  return (
    <Modal
      title="ร้านป้าแก้ว"
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <img
        className="center"
        src="https://timsnepal.com/wp-content/uploads/2019/04/Traditional-Nepali-Dishes-1-300x300.jpg"
      />
      <p>{ModalText}</p>
      <Form {...formItemLayout}>
        <Form.Item label="จำนวนคิว">
          <Input
            type="text"
            disabled
            value="10"
          />
        </Form.Item>
        <Form.Item label="วัตถุดิบที่หมด">
          <Input
            disabled
            type="text"
            value="ไก่, กุ้ง"
          />
        </Form.Item>
        <Form.Item label="สั่งอาหาร">
          <Input
            type="text"
            placeholder="กรอกรายการอาหาร"
          />
        </Form.Item>
      </Form>
    </Modal>
  )
}
ModalOrder.propTypes = {
  visible: PropTypes.bool,
  handleOk: PropTypes.func,
  confirmLoading: PropTypes.func,
  handleCancel: PropTypes.func,
  ModalText: PropTypes.string,
}

export default ModalOrder
