import React, { useState } from 'react'
import { Layout, Menu, Icon } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './console.css'
const { Content, Sider } = Layout
const { SubMenu } = Menu
const DefaultLayout = ({ children }) => {
  const[onKey, setOnKey] = useState('console')

  return (
    <Layout>
      <Sider className="side-bar-console">
        <Menu
          mode="inline"
          defaultSelectedKeys={[onKey]}
          style={{ height: '100%', borderRight: 0 }}>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                เมนู
              </span>
            }>
            <Menu.Item key="1">
              <Link to="/console">รับออเดอร์</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/console/process">รายการอาหาร</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="laptop" />
                subnav 2
              </span>
            }>
            <Menu.Item key="5">option5</Menu.Item>
            <Menu.Item key="6">option6</Menu.Item>
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
