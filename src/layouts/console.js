import React, { useState, useEffect } from 'react'
import { Layout, Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './console.css'
const { Content, Sider } = Layout
const { SubMenu } = Menu
const DefaultLayout = ({ children }) => {
  useEffect(() => {
    if (children.props.page) {
      setOnKey(children.props.page)
    }
  })
  const handleLogout = () => {
    localStorage.clear()
    window.location.replace('/')
  }
  const [onKey, setOnKey] = useState('console')
  return (
    <Layout>
      <Sider className="side-bar-console">
        <Menu
          mode="inline"
          selectedKeys={[onKey]}
          defaultOpenKeys={['sub1', 'sub2']}
          style={{ height: '100%', borderRight: 0 }}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                รายการอาหาร
              </span>
            }>
            <Menu.Item key="console">
              <Link to="/console">รับออเดอร์</Link>
            </Menu.Item>

            <Menu.Item key="process">
              <Link to="/console/process">
                รายการอาหารที่ต้องทำ
              </Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                ผู้ใช้งาน
              </span>
            }>
            <Menu.Item key="profile">
              <Link to="/console/profile">
                จัดการผู้ใช้งาน
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/main">กลับสู่หน้าหลัก</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <a onClick={handleLogout}>ออกจากระบบ</a>
            </Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
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
