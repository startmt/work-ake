import React, { useState, useEffect } from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'
import { List, Skeleton, Typography } from 'antd'
import { confirmOrder } from '../api/restaurant'
const { Title, Text } = Typography
const RecieveOrderContainer = ({
  data,
  title,
  statusOk,
  handleThenProcess,
  acceptText,
}) => {
  const [initLoading, setInitLoading] = useState(true)
  const handleConfirm = (state, id) => {
    const status = {
      status: state,
    }
    confirmOrder(status, id).then(() =>
      handleThenProcess(id),
    )
  }
  const handleReject = (id) => {
    const status = {
      status: 'Reject',
    }
    confirmOrder(status, id).then(() => {
      handleThenProcess(id)
    })
  }
  useEffect(() => {
    if (data) {
      setInitLoading(false)
    }
  }, [])
  return (
    <div className="mv-3 ">
      <Title className="text-center">{title}</Title>
      <div className="container">
        <List
          className="list-console"
          loading={initLoading}
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item) => (
            <List.Item
              actions={[
                <div
                  className="green"
                  key={`${item.id}-${statusOk}`}
                  onClick={() => {
                    handleConfirm(statusOk, item.id)
                  }}>
                  {acceptText}
                </div>,
                <Text
                  type="danger"
                  key={`${item.id}-reject`}
                  onClick={() => {
                    handleReject(item.id)
                  }}>
                  ยกเลิก
                </Text>,
              ]}>
              <Skeleton
                title={false}
                loading={item.loading}
                active>
                <List.Item.Meta
                  title={`${item.customer.firstName} ${item.customer.lastName}`}
                  description={item.detail}
                />
                <div>
                  {moment(item.createdAt).format(
                    'MMMM Do YYYY, h:mm:ss a',
                  )}
                </div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}
RecieveOrderContainer.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  statusOk: PropTypes.string,
  handleThenProcess: PropTypes.func,
  acceptText: PropTypes.string
}
RecieveOrderContainer.defaultProps = {
  title: 'Title',
  data: [],
  statusOk: '',
}
export default RecieveOrderContainer
