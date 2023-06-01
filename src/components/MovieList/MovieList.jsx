import React from "react";
import { Movie } from "../Index";

const MovieList = ({ movies }) => {
  return (
    <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2  ">
      {movies.results.map((movie, i) => (
        <Movie key={movie.title} movie={movie} i={i} />
      ))}
    </div>
  );
};

export default MovieList;
