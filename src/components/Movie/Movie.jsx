import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Movie.css";

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
      className="text-base-content relative my-7"
      style={{ opacity: 0, transition: "opacity 0.25s ease-in-out" }}
    >
      <Link
        to={`/movies/${movie.id}`}
        className="hover:cursor-pointer relative group w-[200px]"
      >
        {
          <img
            loading="lazy"
            alt={movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://www.fillmurray.comm/200/200`
            }
            className="rounded-lg shadow-lg mx-auto sm:h-[300px] h-[200px] lg:hover:animate-rotate-y lg:animate-duration-300  lg:hover:scale-110 lg:hover:blur-[5px] lg:hover:brightness-[90%] ease-in-out duration-100 "
          />
        }

        {/* Title */}
        <div className="absolute w-[200px] z-40 lg:bottom-4 lg:right-[82px] lg:hidden lg:group-hover:block">
          <h1 className="text-center font-semibold hover:cursor-pointer">
            {movie.title.substring(0, 18)}
          </h1>

          <h1 className="text-center mb-2 font-medium ">
            {movie.vote_average.toFixed(1)} &nbsp;
            <div className="rating rating-xs ">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2 "
              />
            </div>
          </h1>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
