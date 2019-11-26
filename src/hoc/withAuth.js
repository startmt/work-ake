import React, { useEffect, useState } from 'react'
import axios from 'axios'
import env from '../env'
export default (Component) => (props) => {
  const [data, setData] = useState({})
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(env.AUTH_SERVICE, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((data) => {
        setData({...data.data, isAuth: true})
      })
      .catch(() => {
        setData({
          isauth: false,
        })
      })
  }, [])
  return <Component {...props} data={data} />
}
