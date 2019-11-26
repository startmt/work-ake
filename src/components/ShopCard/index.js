import { Card } from 'antd'
import React from 'react'
import './shopcard.css'
import PropTypes from 'prop-types'
const { Meta } = Card

const ShopCard = ({
  shopName,
  img,
  descriptionText,
  setModal,
  restId,
}) => {
  const description = () => (
    <div className="text-clamp">{descriptionText}</div>
  )
  return (
    <Card
      hoverable
      onClick={() => setModal(restId)}
      className="shopcard-wrapper"
      cover={<img alt="example" src={img} />}>
      <Meta
        title={shopName}
        className="text-clamp"
        description={description()}
      />
    </Card>
  )
}
ShopCard.propTypes = {
  shopName: PropTypes.string,
  img: PropTypes.string,
  descriptionText: PropTypes.string,
  openModal: PropTypes.func,
  restId: PropTypes.number,
  setModal: PropTypes.func,
}
ShopCard.defaultProps = {
  shopName: 'ร้านป้าสล๊อต',
  img:
    'https://timsnepal.com/wp-content/uploads/2019/04/Traditional-Nepali-Dishes-1-300x300.jpg',
  descriptionText: ` Lorem Ipsum is simply dummy text of the printing and
  typesetting industry. Lorem Ipsum has been the
  scrambled it to make a type specimen book. It ha`,
}
export default ShopCard
