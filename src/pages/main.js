import React, { useRef } from 'react'
import DefaultLayout from '../layouts/default'
import MainContainer from '../containers/MainContainer'
import withAuth from '../hoc/withAuth'
const MainPage = () => {
  const foodRef = useRef(null)
  const noodleRef = useRef(null)
  const drinkRef = useRef(null)
  return (
    <DefaultLayout>
      <MainContainer
        foodRef={foodRef}
        noodleRef={noodleRef}
        drinkRef={drinkRef}
      />
    </DefaultLayout>
  )
}

export default withAuth(MainPage)
