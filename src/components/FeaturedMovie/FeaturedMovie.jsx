import React from 'react'
import { Link } from 'react-router-dom'

const FeaturedMovie = ({movie}) => {
    if(!movie) null

  return (
    <div className='lg:h-[80vh] overflow-hidden'>
        <Link
            to={`/movies/${movie.id}`}
        >
          {/* Poster */}
            <img 
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} 
            alt={movie.title}
            className='brightness-50' 
            />

            {/* Info */}
            <div className='absolute lg:top-[75vh] top-[20vh] text-white'>
              <h1 className='lg:text-4xl text-xl font-medium lg:ml-[3vw] ml-[5vw]'>{movie.title.substring(0,17)}..</h1>
              <p className='lg:w-[40%] w-[70%] lg:text-base text-sm lg:ml-[3vw] ml-[5vw] mt-2'>{movie.overview.substring(0,151)}...</p>
            </div>
        </Link>
    </div>
  )
}

export default FeaturedMovie