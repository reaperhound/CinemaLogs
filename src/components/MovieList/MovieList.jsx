import React from "react";
import { Movie } from "../Index";

const MovieList = ({ movies }) => {
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-8 ">
      {movies.results.map((movie, i) => (
        <Movie key={i} movie={movie} i={i} />
      ))}
    </div>
  );
};

export default MovieList;
