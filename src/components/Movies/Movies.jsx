import React from "react";
import { useSelector } from "react-redux";

import { useGetMoviesQuery } from "../../services/tmdb";
import { MovieList } from "../Index";

const Movies = () => {
  const { data, isFetching, error } = useGetMoviesQuery();

  if (isFetching) {
    return (
      <h1 className="text-3xl">Loading ....</h1>
    );
  }

  if(!data.results.length) {
    return (
      <div className="bg-black w-2/3 h-2/4">
        <h1 className="text-3xl">No movies match that name</h1>
      </div>
    )
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
