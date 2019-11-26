import React from 'react'
import DefaultLayout from '../layouts/default'
import MainContainer from '../containers/MainContainer'
import withAuth from '../hoc/withAuth'
const MainPage = () => {
  return (
    <DefaultLayout>
      <MainContainer />
    </DefaultLayout>
  )
}

export default withAuth(MainPage)