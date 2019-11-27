import React, { useEffect, useState } from 'react'
import { Layout, Menu, Button } from 'antd'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './default.css'
import withAuth from '../hoc/withAuth'
import ModalHistory from '../components/ModalHistory'
import { getOrder } from '../api/customer'
const { Header, Content } = Layout

const DefaultLayout = ({ children, data }) => {
  const handleOk = () => {
    setVisibleModal(false)
  }
  const [order, setOrder] = useState([])
  const [role, setRole] = useState('')
  const handleLogout = () => {
    localStorage.clear()
    window.location.replace('/')
  }
  const [visibleModal, setVisibleModal] = useState(false)
  useEffect(() => {
    if (data.data) {
      setRole(data.data.role)
    }
  })
  const handleModal = () => {
    setVisibleModal(true)
    getOrder().then((res) => setOrder(res.data.data))
  }

  const handleNav = (ref) => {
    window.scrollTo(0, ref.current.offsetTop)
  }
  return (
    <Layout>
      <Header style={{ padding: 0, background: '#fff' }}>
        <div className="container">
          <Menu mode="horizontal" className="menu">
            <Menu.Item className="menu-item" key="1">
              <a
                onClick={() => {
                  handleNav(children.props.foodRef)
                }}>
                อาหารตามสั่ง
              </a>
            </Menu.Item>
            <Menu.Item className="menu-item" key="2">
              <a
                onClick={() => {
                  handleNav(children.props.noodleRef)
                }}>
                ก๋วยเตี๋ยว
              </a>
            </Menu.Item>
            <Menu.Item className="menu-item" key="3">
              <a
                onClick={() => {
                  handleNav(children.props.drinkRef)
                }}>
                เครื่องดื่ม
              </a>
            </Menu.Item>
            <div className="right-item">
              {role == 'Restaurant' ? (
                <Link to="/console">
                  <a className="mh-1">Console</a>
                </Link>
              ) : (
                <Button
                  className="mh-1"
                  onClick={() => {
                    handleModal()
                  }}>
                  ตรวจสอบ Order
                </Button>
              )}

              <ModalHistory
                visible={visibleModal}
                order={order}
                handleOk={handleOk}
              />
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
