import React from "react";
import { Movie } from "../Index";

const MovieList = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 sm:grid-cols-2 lg:ml-[50px] ml-5">
      {movies.results.map((movie, i) => (
        <Movie key={movie.title} movie={movie} i={i} />
      ))}
    </div>
  );
};

export default MovieList;
