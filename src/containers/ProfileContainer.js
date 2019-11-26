import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Typography,
  Form,
  Input,
  message,
  Select,
} from 'antd'
import { updateProfile } from '../api/restaurant'
import UploadImage from '../components/uploadImage'
import env from '../env'
import axios from 'axios'
const { Title } = Typography
const { Option } = Select
const { TextArea } = Input
const headers = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
}
const ProfileContainer = () => {
  const [shopName, setShopName] = useState('')
  const [desc, setDesc] = useState('')
  const [typeRole, setTypeRole] = useState('')
  const [img, setImg] = useState('')
  useEffect(() => {
    const config = {
      headers: headers,
    }
    axios
      .get(
        `${env.RESTAURANT_SERVICE}/${localStorage.getItem(
          'restId',
        )}`,
        config,
      )
      .then((res) => {
        setShopName(res.data.data.name)
        setDesc(res.data.data.detail)
        setTypeRole(res.data.data.type)
      })
  }, {})

  const handleUpdateProfile = () => {
    const data = {
      detail: desc,
      name: shopName,
      type: typeRole,
    }
    updateProfile(data).then(() =>
      message.success('อัพทเดทสำเร็จ'),
    )
  }
  const imageSpec = {
    name: 'file',
    multiple: false,
    headers: headers,
    action: `${env.RESTAURANT_SERVICE}/image`,
    onChange(info) {
      const { status } = info.file
      if (info.file.status === 'done') {
        getBase64(info.file.originFileObj, (imageUrl) =>
          setImg(imageUrl),
        )
      }
      if (status === 'done') {
        message.success(
          `${info.file.name} file uploaded successfully.`,
        )
      } else if (status === 'error') {
        message.error(
          `${info.file.name} file upload failed.`,
        )
      }
    },
  }
  const getBase64 = (img, callback) => {
    const reader = new FileReader()
    reader.addEventListener('load', () =>
      callback(reader.result),
    )
    reader.readAsDataURL(img)
  }
  return (
    <div className="mv-3 ">
      <div className="container">
        <Form className="form-profile">
          <Title className="text-center">
            จัดการข้อมูลร้านค้า
          </Title>
          <Form.Item>
            <label>ชือร้านค้า</label>
            <Input
              placeholder="ชื่อร้านค้า"
              value={shopName}
              onChange={(e) => {
                setShopName(e.target.value)
              }}
            />
            ,
          </Form.Item>
          <Form.Item>
            <label>รายระเอียดร้านค้า</label>
            <TextArea
              rows={5}
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value)
              }}
            />
          </Form.Item>
          <Form.Item>
            <Select value={typeRole} onChange={setTypeRole}>
              <Option value="Food">อาหารตามสั่ง</Option>
              <Option value="Noodle">ก๋วยเตี๋ยว</Option>
              <Option value="Drink">เครื่องดื่ม</Option>
            </Select>
          </Form.Item>

          <Button
            onClick={handleUpdateProfile}
            type="submit">
            Submit
          </Button>
        </Form>
        <div className="mv-2"></div>
        <Form className="form-profile">
          <Title className="text-center">
            อัพเดทรูปร้านค้า
          </Title>
          
          <Form.Item>
            <UploadImage imageSpec={imageSpec} />
          </Form.Item>
          <Form.Item>
            <img src={img} className="w-100" />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}
ProfileContainer.propTypes = {}
ProfileContainer.defaultProps = {}
export default ProfileContainer
