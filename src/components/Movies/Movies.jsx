import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../Index";

const Movies = () => {
  const [page, setpage] = useState(1)
  const { genreIdOrCategoryName, searchQuery } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  const { data, isFetching, error } = useGetMoviesQuery({ genreIdOrCategoryName, page, searchQuery });
  const currentTheme = useSelector((state) => state.themeSlice);

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

  if (error) {
    console.log();
    return (
      <div className="bg-black w-2/3 h-2/4">
        <h1 className="text-3xl text-white">No movies match that name</h1>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r 
    ${currentTheme === 'halloween' ? "from-dark-grad-one to-dark-grad-two" : "from-light-grad-two to-light-grad-one"}
    movies-mine  min-h-[210vh] pt-10 `}>
      <MovieList movies={data} />
    </div>
  );
};

export default Movies;
