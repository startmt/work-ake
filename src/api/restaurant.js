import axios from 'axios'
import env from '../env'
const config = {
  headers: {
    Authorization:
      'Bearer ' + localStorage.getItem('token'),
  },
}
export const getRestaurant = () => {
  return axios.get(env.RESTAURANT_SERVICE, config)
}

export const getRestaurantById = (id) => {
  return axios.get(
    env.RESTAURANT_SERVICE + `/${id}`,
    config,
  )
}

export const getOrder = () => {
  return axios.get(
    env.RESTAURANT_SERVICE + '/orders',
    config,
  )
}

export const confirmOrder = (status, id) => {
  return axios.put(
    env.RESTAURANT_SERVICE + `/orders/${id}`,
    status,
    config,
  )
}
export const updateProfile = (data) => {
  return axios.put(
    env.RESTAURANT_SERVICE + '/profile',
    data,
    config,
  )
}
