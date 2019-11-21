import React from 'react'
import PropTypes from 'prop-types'
import './auth.css'
const AuthLayout = ({ children }) => (
  <div className="auth-layout-wrapper">{children}</div>
)

export default AuthLayout

AuthLayout.propTypes = {
  children: PropTypes.element,
}
