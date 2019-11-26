import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default (Component) => (props) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get(process.env.REACT_APP_API_URL + '/api/data', {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((data) => {
        setData(data.data, (isAuth = true))
      })
      .catch(() => {
        localStorage.clear()
        setData({
          isauth: false,
        })
      })
  }, [])
  return <Component {...props} data={data} />
}
