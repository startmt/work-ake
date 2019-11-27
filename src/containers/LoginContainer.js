import React, { useState } from 'react'
import { Form, Message } from 'semantic-ui-react'
import UsernameInput from '../components/input'
import PasswordInput from '../components/input'
import { Button } from 'antd'
import ButtonRegister from '../components/ButtonRegister'
import '../static/logincontainer.css'
import { Link } from 'react-router-dom'
import env from '../env'
import { Row, Col } from 'antd'
import axios from 'axios'
export default () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isError, setIsError] = useState(false)
  const handleLogin = () => {
    setIsError(false)
    if(username === '' || password === '') {
      setIsError(true)
      setErrorMessage('กรุณากรอก Username / Password ให้ถูกต้อง')
      return 
    }
    const data = {
      username,
      password,
    }
    axios
      .post(env.AUTH_SERVICE + '/login', data)
      .then((res) => {
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem(
          'username',
          res.data.data.username,
        )
        window.location.replace('/main')
      })
      .catch((e) => {
        setErrorMessage(e.response.data.message)
        setIsError(true)
        return
      })
  }
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
                title="password"
                type="password"
                onChange={setPassword}
                required={true}
              />
            </Form.Field>
          </Form>
          {isError && (
            <Message
              error
              header="Error"
              content={errorMessage}
            />
          )}

          <Button type="submit" onClick={handleLogin}>
            login
          </Button>
          <Link to="/register">
            <ButtonRegister title="สมัครสมาชิก" />
          </Link>
        </div>
      </Col>
    </Row>
  )
}
