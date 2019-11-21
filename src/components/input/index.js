import React, { Fragment } from 'react'
import { Input } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import './style.css'
const InputStandard = ({
  title,
  name,
  placeholder = '',
  type,
  disabled = false,
  value,
  required = false,
  onChange,
}) => {
  return (
    <Fragment>
      <label>{title}</label>
      <Input
        className="input-width"
        name={name}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
    </Fragment>
  )
}
export default InputStandard

InputStandard.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
}
