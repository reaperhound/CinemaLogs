import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
  const { user: { username } } = useSelector(state => state.user)
  const favMovies = []
  return (
    <div>
      <h1>Profile</h1>
      <h3>{username}</h3>
      {
        !favMovies.length 
        ? <h1>Add movies to favorites or watchlist to watch later</h1>
        : <h1>Favorite Movies</h1>
      }
    </div>
  )
}

export default Profile