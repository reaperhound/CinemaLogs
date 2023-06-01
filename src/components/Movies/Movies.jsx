import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../Index";
import MoviesLoading from "./MoviesLoading";

const Movies = () => {
  const [page, setpage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, isFetching, error } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });

  if (isFetching) {
    return (
     <div className="h-screen w-full ">
      <PacmanLoader
        color="#ffb703"
        size={100}
        className="mx-auto w-[150px] mt-[90px] "
      />
     </div>
    )
  }

  if (!data.results.length) {
    return (
      <div className="bg-black w-2/3 h-2/4">
        <h1 className="text-3xl">No movies match that name</h1>
      </div>
    );
  }

  return (
    <div>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
