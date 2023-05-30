import React from "react";
import { Movie } from "../Index";

const MovieList = ({ movies }) => {
  return (
    <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-1  ">
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </div>
  );
};

export default MovieList;
