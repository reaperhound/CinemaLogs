import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  useGetActorDetailsQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import MoviesLoading from "../Movies/MoviesLoading";
import { useSelector } from "react-redux";
import PublicIcon from "@mui/icons-material/Public"; //website
import { MovieList } from "../Index";
import { Modal } from "@mui/material";

const Actors = () => {
  const { id } = useParams();
  const page = 1;
  const history = useNavigate();
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });
  console.log("actors", data);

  const currentTheme = useSelector((state) => state.themeSlice);

  if (isFetching) {
    return <MoviesLoading />;
  }

  if (error) {
    return (
      <div>
        <button className="btn-error" onClick={() => history.goBack()}>
          Go back
        </button>
      </div>
    );
  }
  return (
    <div
      className={`bg-gradient-to-b lg:pl-[5vw]
      ${currentTheme === "halloween" ? "text-white from-dark-grad-one to-dark-grad-two" : "text-black from-light-grad-one to-light-grad-two"}
       lg:p-10  lg:h-[320vh]
    `}
    >
      <div className="relative lg:flex">
        {/* backdrop */}
        <img
          loading="lazy"
          className="w-[100vw] h-[90vh] blur-[200px]"
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
          alt={data.name}
        />

        {/* Actor Image */}
        <div className="lg:w-[150%] w-[70vw] lg:ml-[-25vw] lg:mt-[15vh] mt-[-80vh] mx-auto relative">
          <img
            loading="lazy"
            className="rounded-md shadow-md"
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt={data.name}
          />
        </div>

        {/* Info */}
        <div className="lg:max-w-[60%] lg:ml-[20vw] lg:mt-[-27vh] lg:mr-[5vw] mt-[-5vh] flex flex-col justify-center items-center relative">
          {/* Name */}
          <h1 className="mb-4 mt-[9vh] text-4xl font-bold">{data.name}</h1>
          {/* Birthday */}
          <span className="block mb-4 text-xl font-medium">
            {data.birthday}
          </span>
          {/* Bio */}
          <p className="p-6 text-base font-medium lg:text-lg lg:p-0">
            {data.biography.substring(0,1264)}...
          </p>

          {/* Links */}
          {data.homepage && (
            <div className="lg:mt-[125vh] lg:mr-[100.2vw] lg:absolute my-10 ml-[-20vh] ">
              <Link target="blank" to={data.homepage}>
                <button className="btn bg-accent-focus text-accent-content w-[150px] hover:bg-primary hover:text-primary-content">
                  Website &nbsp;
                  <PublicIcon />
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {/* Movies */}
      <div className="lg:mt-20 lg:ml-3">
        <h1 className="text-3xl font-bold bg-primary lg:w-[6vw] w-[32vw] pl-1 lg:ml-[60px] ml-7 lg:mb-10 mb-5">
          Movies
        </h1>
        {movies && <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default Actors;
