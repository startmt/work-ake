import React from 'react'
import '../static/logincontainer.css'
import { Typography } from 'antd'
import ShopCard from '../components/ShopCard'
const { Title } = Typography
export default () => {
  return (
    <div className="section">
      <div className="container">
        <Title className="text-center">อาหารตามสั่ง</Title>
        <div className="mv-3">
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
            <div className="col-lg-3 col-md-4 col-sm-12 mb-2">
              <ShopCard />
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
