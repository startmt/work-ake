import React, { useState } from 'react'
import {
  List,
  Avatar,
  Button,
  Skeleton,
  Typography,
} from 'antd'
const { Title } = Typography
const RecieveOrderContainer = () => {
  const [initLoading, setInitLoading] = useState(true)
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState([])
  const [list, setList] = useState([])
  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: 'center',
          marginTop: 12,
          height: 32,
          lineHeight: '32px',
        }}>
        <Button onClick={this.onLoadMore}>
          loading more
        </Button>
      </div>
    ) : null
  return (
    <div className="mv-3">
      <Title className="text-center">
        รายการ Order ที่เข้ามา
      </Title>
      <div className="container">
        <List
          className="demo-loadmore-list"
          loading={initLoading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={list}
          renderItem={(item) => (
            <List.Item
              actions={[
                <a key="list-loadmore-edit">edit</a>,
                <a key="list-loadmore-more">more</a>,
              ]}>
              <Skeleton
                avatar
                title={false}
                loading={item.loading}
                active>
                <List.Item.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title={
                    <a href="https://ant.design">
                      {item.name.last}
                    </a>
                  }
                  description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                />
                <div>content</div>
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default RecieveOrderContainer
