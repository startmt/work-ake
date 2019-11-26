import axios from 'axios'
import env from '../env'
const config = {
  headers: {
    Authorization:
      'Bearer ' + localStorage.getItem('token'),
  },
}
export const sendOrder = (order) => {
  return axios.post(env.CUSTOMER_SERVICE+'/orders', order, config)
}
