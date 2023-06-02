import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user: { username } } = useSelector(state => state.user)
  return (
    <h1>
      {username}
    </h1>
  )
}

export default Profile