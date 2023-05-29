import React from 'react'
import { useSelector } from 'react-redux';

import { useGetMoviesQuery } from '../../services/tmdb';

const Movies = () => {
  const {data} = useGetMoviesQuery();
  console.log(data);
  return (
    <div>Movies</div>
  )
}

export default Movies