import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, i }) => {
  console.log(movie);
  const movieRef = useRef(null);
  useEffect(() => {
    const delay = (i + 1) * 100;
    const animationTimeout = setTimeout(() => {
      movieRef.current.style.opacity = 1;
    }, delay);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [i]);

  return (
    <div
      ref={movieRef}
      className="text-base-content " 
      style={{ opacity: 0, transition: "opacity 0.25s ease-in-out" }}
    >
      <Link to={`/movie/${movie.id}`} className="hover:cursor-pointer">
        {
          <img
            alt={movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://www.fillmurray.comm/200/200`
            }
            className="rounded-sm shadow-lg mx-auto h-[300px]  hover:scale-110 ease-in-out duration-200 "
          />
        }
        :
      </Link>
      <h1 className="text-center mb-1 font-semibold  hover:cursor-pointer">
        {movie.title.substring(0, 18)}
      </h1>
      <h1 className="text-center mb-2 font-medium ">
        {movie.vote_average} &nbsp;
        <div className="rating rating-xs">
          <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
        </div>
      </h1>
    </div>
  );
};

export default Movie;
