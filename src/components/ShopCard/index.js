import { Card } from 'antd'
import React from 'react'
import './shopcard.css'
const { Meta } = Card

const ShopCard = () => {
  const description = () => (
    <div className="text-clamp">
      Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the
      industry s standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and
      scrambled it to make a type specimen book. It ha
    </div>
  )
  return (
    <Card
      className="shopcard-wrapper"
      cover={
        <img
          alt="example"
          src="https://timsnepal.com/wp-content/uploads/2019/04/Traditional-Nepali-Dishes-1-300x300.jpg"
        />
      }>
      <Meta
        title="Card title"
        className="text-clamp"
        description={description()}
      />
    </Card>
  )
}
export default ShopCard
