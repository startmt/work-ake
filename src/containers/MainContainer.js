import React, { useState, useEffect } from 'react'
import '../static/logincontainer.css'
import { Typography, message } from 'antd'
import ShopCard from '../components/ShopCard'
import ModalOrder from '../components/ModalOrder'
import {
  getRestaurant,
  getRestaurantById,
} from '../api/restaurant'
import env from '../env'
import { sendOrder } from '../api/customer'
const { Title } = Typography
export default ({ foodRef, noodleRef, drinkRef }) => {
  const [data, setData] = useState([])
  const [visibleModal, setVisibleModal] = useState(false)
  const [desc, setDest] = useState({})
  const [order, setOrder] = useState('')
  const setModal = (id) => {
    setVisibleModal(true)
    getRestaurantById(id).then((res) =>
      setDest(res.data.data),
    )
  }
  useEffect(() => {
    getRestaurant().then((res) => setData(res.data.data))
  }, [])
  const handleOk = () => {
    const data = {
      detail: order,
      restaurantId: desc.id,
    }
    sendOrder(data).then(() => {
      setOrder('')
      message.success('สั่งรายการสำเร็จ !!')
      setVisibleModal(false)
    })
  }
  const handleCancel = () => setVisibleModal(false)

  return (
    <div className="section">
      <ModalOrder
        visible={visibleModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        data={desc}
        order={order}
        setOrder={setOrder}
        image={
          env.RESTAURANT_SERVICE + `/image/${desc.image}`
        }
        queue={desc.queue}
        detail={desc.detail}
      />
      <div className="container">
        <Title className="text-center">อาหารตามสั่ง</Title>
        <div className="mv-3" ref={foodRef}>
          <div className="row">
            {data
              .filter((data) => data.type === 'Food')
              .map((data) => (
                <div
                  key={data.id}
                  className="col-lg-3 col-md-4 col-sm-12 mb-2">
                  <ShopCard
                    restId={data.id}
                    shopName={data.name}
                    img={
                      env.RESTAURANT_SERVICE +
                      '/image/' +
                      data.image
                    }
                    setModal={setModal}
                    descriptionText={data.detail}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="mv-3" id="noodle" ref={noodleRef}>
          <Title className="text-center">ก๋วยเตี๋ยว</Title>
          <div className="row">
            {data
              .filter((data) => data.type === 'Noodle')
              .map((data, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-12 mb-2">
                  <ShopCard
                    restId={data.id}
                    shopName={data.name}
                    img={
                      env.RESTAURANT_SERVICE +
                      '/image/' +
                      data.image
                    }
                    setModal={setModal}
                    descriptionText={data.detail}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="mv-3" ref={drinkRef}>
          <Title className="text-center">เครื่องดื่ม</Title>
          <div className="row">
            {data
              .filter((data) => data.type === 'Drink')
              .map((data, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-md-4 col-sm-12 mb-2">
                  <ShopCard
                    restId={data.id}
                    shopName={data.name}
                    img={
                      env.RESTAURANT_SERVICE +
                      '/image/' +
                      data.image
                    }
                    setModal={setModal}
                    descriptionText={data.detail}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
