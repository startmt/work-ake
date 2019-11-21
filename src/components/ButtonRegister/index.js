import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Button } from 'antd'
const InputStandard = ({
  title,
  onClick,
  disabled,
  type = 'primary',
}) => {
  return (
    <Button
      type={type}
      className="button-register-wrapper"
      block
      disabled={disabled}
      onClick={onClick}>
      {title}
    </Button>
  )
}
export default InputStandard

InputStandard.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
}
