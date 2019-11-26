import { Modal, Input, Form } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
const ModalOrder = ({
  title,
  visible,
  handleOk,
  handleCancel,
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
      onCancel={handleCancel}>
      <div className="mv-1">
          hello
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
