import { Modal, Table, Divider, Tag } from 'antd'
import React from 'react'
import PropTypes from 'prop-types'
const ModalHistory = ({
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
  const columns = [
    {
      title: "ร้านค้า",
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },
    {
      title: 'รายละเอียดเมนู',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'เวลาที่สั่ง',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'สถานะ',
      key: 'tags',
      dataIndex: 'tags',
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
  ];
  return (
    <Modal
      className="modal-wrapper"
      title={title}
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}>
      <div className="mv-1">
        <Table columns={columns} dataSource={data} />
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
