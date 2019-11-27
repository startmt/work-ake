import { Modal, Table, Tag, Button } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
const ModalHistory = ({
  title,
  visible,
  handleOk,
  order,
}) => {
  const columns = [
    {
      title: 'ร้านค้า',
      dataIndex: 'restaurant.name',
      key: 'name',
    },
    {
      title: 'รายละเอียดเมนู',
      dataIndex: 'detail',
      key: 'detail',
    },
    {
      title: 'เวลาที่สั่ง',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (createdAt) =>
        moment(createdAt).format('YYYY/MM/DD'),
    },
    {
      title: 'สถานะ',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let color = 'green'
        if (status === 'Init') color = 'grey'
        if (status === 'Process') color = 'blue'
        if (status === 'Finish') color = 'green'
        if (status === 'Reject') color = 'red'
        return (
          <span>
            <Tag color={color} key={status}>
              {status.toUpperCase()}
            </Tag>
          </span>
        )
      },
    },
  ]

  return (
    <Modal
      className="modal-wrapper"
      title={title}
      visible={visible}
      closeIcon={() => null}
      footer={[
        <Button key="back" onClick={handleOk}>
          Close
        </Button>,
      ]}
      onCancel={handleOk}>
      <div className="mv-1">
        <Table
          columns={columns}
          size={'small'}
          dataSource={order}
        />
      </div>
    </Modal>
  )
}
ModalHistory.propTypes = {
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

export default ModalHistory
