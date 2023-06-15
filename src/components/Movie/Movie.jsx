import React from "react";
import "./Movie.css";
import { Link } from "react-router-dom";

const Movie = ({ movie }) => {
  return (
    <div className="relative my-7 text-white group">
      <Link to={`/movies/${movie.id}`}>
      <div class="card">
        {/* Poster */}
        <div className="img">
          <img
            loading="lazy"
            alt={movie.title}
            src={
              movie.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                : `https://www.fillmurray.com/200/200`
            }
          />
        </div>

        {/* Info */}
        <div class="textBox">
          <p class="text head">
          <h2 className="text-2xl font-bold text-center">{movie.title}</h2>
          </p>
          {/* <span>Cryptocurrency</span> */}
          <p class="text price">
            {movie.vote_average.toFixed(1)} &nbsp;
            <div className="rating rating-xs">
              <input
                type="radio"
                name="rating-5"
                className="mask mask-star-2"
              />
            </div>
          </p>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default Movie;
