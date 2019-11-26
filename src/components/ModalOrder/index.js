import { Modal, Input, Form } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
const ModalOrder = ({
  title,
  visible,
  handleOk,
  confirmLoading,
  handleCancel,
  detail,
  image,
  queue,
  order,
  setOrder,
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
      title={title}
      visible={visible}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <img className="center" src={image} />
      <div className="mv-1">
        <Form {...formItemLayout}>
          <Form.Item label="รายละเอียด">
            <Input disabled type="text" value={detail} />
          </Form.Item>
          <Form.Item label="จำนวนคิว">
            <Input type="text" disabled value={queue} />
          </Form.Item>

          <Form.Item label="สั่งอาหาร">
            <Input
              value={order}
              type="text"
              placeholder="กรอกรายการอาหาร"
              onChange={e=>setOrder(e.target.value)}
            />
          </Form.Item>
        </Form>
      </div>
    </Modal>
  )
}
ModalOrder.propTypes = {
  title: PropTypes.string,
  visible: PropTypes.bool,
  handleOk: PropTypes.func,
  confirmLoading: PropTypes.func,
  handleCancel: PropTypes.func,
  detail: PropTypes.string,
  ModalText: PropTypes.string,
  queue: PropTypes.number,
  image: PropTypes.string,
  order: PropTypes.string,
  setOrder: PropTypes.func,
}

export default ModalOrder
