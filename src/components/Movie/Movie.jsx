import React from 'react'

const Movie = ({ movie, i}) => {
    console.log(movie);
  return (
    <div className='bg-base-300 text-base-content rounded-md min-w-[200px] mx-auto min-h-[3rem] text-center p-3'>
        <h1>{movie.original_title}</h1>
    </div>
  )
}

export default Movie