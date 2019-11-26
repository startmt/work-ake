import React, { useState } from 'react'
import '../static/logincontainer.css'
import { Typography } from 'antd'
import ShopCard from '../components/ShopCard'
import ModalOrder from '../components/ModalOrder'
const { Title } = Typography
export default () => {
  const [visibleModal, setVisibleModal] = useState(false)
  const handleOk = () => null
  const handleCancel = () => setVisibleModal(false)
  return (
    <div className="section">
      <ModalOrder
        visible={visibleModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        ModalText={` Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the
        scrambled it to make a type specimen book. It ha`}
      />
      <div className="container">
        <Title className="text-center">อาหารตามสั่ง</Title>
        <div className="mv-3">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard openModal={setVisibleModal}  />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard openModal={setVisibleModal}  />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard openModal={setVisibleModal}  />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard openModal={setVisibleModal}  />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard openModal={setVisibleModal}  />
            </div>
          </div>
        </div>
        <div className="mv-3">
          <Title className="text-center">ก๋วยเตี๋ยว</Title>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
          </div>
        </div>
        <div className="mv-3">
          <Title className="text-center">เครื่องดื่ม</Title>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
