import React, { useEffect, useState } from 'react'
import DefaultLayout from '../../layouts/console'
import RecieveOrderContainer from '../../containers/RecieveOrderContainer'
import { getOrder } from '../../api/restaurant'
export default () => {
  const [data, setData] = useState([])
  useEffect(() => {
    getOrder().then((res) => {
      setData(
        res.data.data.filter(
          (data) => data.status == 'Init',
        ),
      )
    })
  }, [])
  const handleThenProcess = (id) =>{
    setData(data.filter(d=>d.id !== id))
  }
  return (
    <DefaultLayout>
      <RecieveOrderContainer data={data} title="รับออเดอร์" statusOk="Process" handleThenProcess={handleThenProcess}/>
    </DefaultLayout>
  )
}
