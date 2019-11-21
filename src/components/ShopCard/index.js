import { Card } from 'antd'
import React from 'react'
import './shopcard.css'
const { Meta } = Card
const ShopCard = () => (
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
      description="This is the description"
    />
  </Card>
)
export default ShopCard
