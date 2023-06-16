import React from "react";
import { Movie } from "../Index";

const MovieList = ({ movies, excludeFirst }) => {
  const startFrom = excludeFirst ? 1 : 0
  return (
    <div className="grid grid-cols-3  md:grid-cols-5  lg:ml-[50px] ml-5">
      {movies.results.slice(startFrom, 19).map((movie, i) => (
        <Movie key={movie.title} movie={movie} i={i} />
      ))}
    </div>
  );
};

export default MovieList;
