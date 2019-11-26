import React, { useState, useEffect } from 'react'
import DefaultLayout from '../../layouts/console'
import ProfileContainer from '../../containers/ProfileContainer'
import withAuth from '../../hoc/withAuth'
export default withAuth((props) => {
  useEffect(() => {
    if (props.data.data) {
      localStorage.setItem('restId', props.data.data.__restaurantDetail__.id)
    }
  })

  return (
    <DefaultLayout>
      <ProfileContainer />
    </DefaultLayout>
  )
})
