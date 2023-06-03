import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/TMDB";
import MoviesLoading from "../Movies/MoviesLoading";
import { memo } from "react";
import ActorCarosal from "./ActorCarosal";

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);

  if (isFetching) {
    return <MoviesLoading />;
  }

  if (error) {
    <Link to={"/"}>Something has gone wrong - Go back</Link>;
  }
  console.log("movie info", data);
  const directors = [];
  const writing = [];
  directors.push(
    data.credits.crew.find(
      (member) => member.known_for_department === "Directing"
    )
  );
  writing.push(
    data.credits.crew.find((member) => member.known_for_department == "Writing")
  );
  console.log("Direct", directors);
  return (
    <div>
      {/* backdrop */}
      <div className="w-full h-[70vh] overflow-hidden">
        <img
          className="w-full opacity-90 brightness-[30%]"
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt=""
        />
      </div>

      {/* Poster */}
      <div className="absolute top-[45vh] left-[20vw]">
        <img
          className="h-[50vh] shadow-2xl"
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
        />
      </div>

      {/* Info */}
      <div className="absolute top-[45vh] h-[35vh] left-[40vw]">
        {/* release_date */}
        <h1 className="text-2xl mt-1 text-white font-medium">
          {data.release_date.substring(0, 4)}
        </h1>

        {/* title */}
        <h1 className="text-4xl mt-1 text-white font-bold">{data.title}</h1>
        <div className="mt-3">
          {/* rating */}
          <span className="text-md font-semibold py-2 px-4 w-[50px] ml-1 mt-1 h-6 bg-primary">
            {data.vote_average}
          </span>

          {/* rating count */}
          <span className="text-white ml-4">{data.vote_count} votes</span>
        </div>

        <div className="text-lg text-white mt-2">
          <span>
            Directing: &nbsp;
            {directors.map((member) => member.name)}
          </span>
          <br />
          <span>
            Written: &nbsp;
            {writing.map((member) => member.name)}
          </span>
        </div>
      </div>

      <div className="ml-[560px] mt-10 ">
        <h2 className="text-2xl font-bold bg-primary w-[6vw] ">Overview</h2>
        <p className="w-[20vw] mt-5">{data.overview}</p>
      </div>

      <div className="pl-3 mt-8">
        <h1 className="bg-primary text-4xl font-semibold  w-40 ml-[12px]">Top Cast</h1>
        <ActorCarosal cast={data.credits.cast} />
      </div>
    </div>
  );
};

export default MovieInformation;
