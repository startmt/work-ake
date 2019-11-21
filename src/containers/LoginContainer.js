import React, { useState } from 'react'
import DefaultLayout from '../layouts/auth'
import { Button, Form } from 'semantic-ui-react'
import UsernameInput from '../components/input'
import PasswordInput from '../components/input'
import ButtonRegister from '../components/ButtonRegister'
import ButtonShopRegister from '../components/ButtonRegister'
import '../static/logincontainer.css'
import { Row, Col } from 'antd'
export default () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Row>
      <Col span={24}>
        <div className="form-login">
          <Form className="mv-2">
            <h2 style={{ textAlign: 'center' }}>Login</h2>
            <Form.Field>
              <UsernameInput
                value={username}
                title="username"
                onChange={setUsername}
                required={true}
              />
            </Form.Field>
            <Form.Field>
              <PasswordInput
                value={password}
                title="username"
                type="password"
                onChange={setPassword}
                required={true}
              />
            </Form.Field>
            <Button type="submit">login</Button>
          </Form>
          <ButtonRegister title="สมัครสมาชิก" />

          <ButtonShopRegister
            title="สมัครสมาชิกร้านค้า"
            type="default"
          />
        </div>
      </Col>
    </Row>
  )
}
