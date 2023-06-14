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
      className={`bg-gradient-to-b
      ${currentTheme === "halloween" ? "text-white from-dark-grad-one to-dark-grad-two" : "text-black from-light-grad-one to-light-grad-two"}
       lg:p-10 sm:p-3
    `}
    >
      <div className="lg:flex relative">
        {/* backdrop */}
        <img
          className="w-[100vw] h-[90vh] blur-[200px]"
          src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
          alt={data.name}
        />

        {/* Actor Image */}
        <div className="lg:w-[20vw] w-[70vw] lg:mt-[15vh] lg:ml-3 mx-auto mt-3 top-[10vh] left-[15vw] absolute">
          <img
            className="rounded-md shadow-md"
            src={`https://image.tmdb.org/t/p/w500/${data.profile_path}`}
            alt={data.name}
          />
        </div>

        {/* Info */}
        <div className="lg:max-w-[60%] lg:ml-[30vw] lg:mt-[15vh] mt-[-180px] flex flex-col justify-center items-center  lg:absolute">
          {/* Name */}
          <h1 className="text-4xl font-bold mb-5 ">{data.name}</h1>
          {/* Birthday */}
          <span className="text-xl font-medium mb-5 block">
            {data.birthday}
          </span>
          {/* Bio */}
          <p className="lg:text-lg text-base font-medium lg:p-0 p-6 ">
            {data.biography}
          </p>

          {/* Links */}
          {data.homepage && (
            <div className="lg:mt-[68vh] lg:mr-[95vw] lg:absolute my-10 ">
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
      <div className="lg:mt-10">
        <h1 className="text-3xl font-bold bg-primary lg:w-[6vw] w-[32vw] pl-1 lg:ml-[60px] ml-7 lg:mb-10 mb-5">
          Movies
        </h1>
        {movies && <MovieList movies={movies} />}
      </div>
    </div>
  );
};

export default Actors;
