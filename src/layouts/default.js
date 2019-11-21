import React from 'react'
import { Layout, Menu } from 'antd'
import PropTypes from 'prop-types'
const { Header, Content } = Layout

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ padding: 0, background: '#fff' }}>
        <Menu
          mode="horizontal"
          style={{ lineHeight: '64px' }}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  )
}
export default DefaultLayout

DefaultLayout.propTypes = {
  children: PropTypes.element,
}
