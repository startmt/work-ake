import React, { useEffect, useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import PropTypes from 'prop-types'
import './default.css'
import withAuth from '../hoc/withAuth'
const { Header, Content } = Layout
const DefaultLayout = ({ children, data }) => {
  const [role, setRole] = useState('')
  const handleLogout = () => {
    localStorage.clear()
    window.location.replace('/')
  }
  useEffect(() => {
    if (data.data) {
      setRole(data.data.role)
    }
  })
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
              {role == 'Restaurant' && (
                <a className="mh-1">Console</a>
              )}
              <Button className="mh-1">
                ตรวจสอบ Order
              </Button>
              <Button onClick={handleLogout}>Logout</Button>
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
export default withAuth(DefaultLayout)

DefaultLayout.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object,
  role: PropTypes.string,
}
DefaultLayout.defaultProps = {
  role: 'Customer',
}
