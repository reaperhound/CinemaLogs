import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PacmanLoader } from "react-spinners";

import { useGetMoviesQuery } from "../../services/TMDB";
import { MovieList } from "../Index";
import Pagination from "../Pagination/Pagination";
import FeaturedMovie from "../FeaturedMovie/FeaturedMovie";

const Movies = () => {
  const [page, setPage] = useState(1)
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
    movies-mine lg:pb-[5vh] pt-10 lg:pl-[5vw]`}>
      <FeaturedMovie movie={data?.results[0]} />
      <MovieList movies={data} excludeFirst />
      <Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
    </div>
  );
};

export default Movies;
