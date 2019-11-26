import React from 'react'
import { Layout, Menu, Button, Row, Col } from 'antd'
import PropTypes from 'prop-types'
import './default.css'
const { Header, Content } = Layout
const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Header style={{ padding: 0, background: '#fff' }}>
        <div className="container">
          <Menu mode="horizontal" className="menu">
            <Menu.Item className="menu-item" key="1">
              อาหารตามสั่ง
            </Menu.Item>
            <Menu.Item className="menu-item" key="2">
              ก๋วยเตี๋ยว
            </Menu.Item>
            <Menu.Item className="menu-item" key="3">
              เครื่องดื่ม
            </Menu.Item>
            <div className="right-item">
              <a className="mh-1">Console</a>
              <Button className="mh-1">
                ตรวจสอบ Order
              </Button>
              <Button>Logout</Button>
            </div>
          </Menu>
        </div>
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
