import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'
import Input from '../components/input'

import ButtonRegister from '../components/ButtonRegister'
import '../static/logincontainer.css'

import env from '../env'
import { Row, Col, Select } from 'antd'
import axios from 'axios'
const { Option } = Select
export default () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRePassword] = useState('')
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [role, setRole] = useState('Customer')
  const handleRegister = () => {
    const data = {
      username,
      password,
      repassword,
      firstName,
      email,
      lastName,
      role
    }
    axios.post(env.AUTH_SERVICE+'/register', data).then(()=>window.location.replace('/')).catch(  )
  }
  return (
    <Row>
      <Col span={24}>
        <div className="form-login">
          <Form className="mv-2">
            <h2 style={{ textAlign: 'center' }}>
              Register Client
            </h2>
            <Form.Field>
              <Input
                value={username}
                title="username"
                onChange={setUsername}
                required={true}
              />
            </Form.Field>
            <Form.Field>
              <Input
                value={password}
                title="password"
                type="password"
                onChange={setPassword}
                required={true}
              />
            </Form.Field>
            <Form.Field>
              <Input
                value={repassword}
                title="re password"
                type="password"
                onChange={setRePassword}
                required={true}
              />
            </Form.Field>
            <Form.Field>
              <Input
                value={email}
                title="e-mail"
                type="email"
                onChange={setEmail}
                required={true}
              />
            </Form.Field>
            <Form.Field>
              <Input
                value={firstName}
                title="first name"
                type="text"
                onChange={setFirstName}
                required={true}
              />
            </Form.Field>
            <Form.Field>
              <Input
                value={lastName}
                title="last name"
                type="text"
                onChange={setLastName}
                required={true}
              />
            </Form.Field>
            <Select defaultValue="Customer" onChange={setRole}>
              <Option value="Customer">ผู้ใช้งาน</Option>
              <Option value="Restaurant">ร้านค้า</Option>
            </Select>
          </Form>
          <ButtonRegister
            onClick={handleRegister}
            type="primary"
            title="สมัครสมาชิก"
          />
        </div>
      </Col>
    </Row>
  )
}
