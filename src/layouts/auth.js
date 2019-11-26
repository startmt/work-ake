import React from 'react'
import PropTypes from 'prop-types'
import withAuth from '../hoc/withAuth'
import './auth.css'
const AuthLayout = ({ children, data }) => {
  const handleAuth = () => {
    return window.location.replace('/main')
  }
  return !data.isAuth ? (
    <div className="auth-layout-wrapper">{children}</div>
  ) : (
    handleAuth()
  )
}
export default withAuth(AuthLayout)

AuthLayout.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object,
}
