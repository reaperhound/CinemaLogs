import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieQuery } from "../../services/TMDB";
import MoviesLoading from "../Movies/MoviesLoading";
import ActorCarosal from "./ActorCarosal";
import { useSelector } from "react-redux";
import ActorCarosalMobile from "./ActorCarosalMobile";
import { useState } from "react";
import { useEffect } from "react";

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const currentTheme = useSelector((state) => state.themeSlice);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function MobileScr() {
      return window.innerWidth <= 768;
    }
    console.log(MobileScr());
    setIsMobile(MobileScr());
  }, []);

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
    data?.credits.crew.find(
      (member) => member.known_for_department === "Directing"
    )
  );
  writing.push(
    data.credits.crew.find((member) => member.known_for_department == "Writing")
  );
  console.log("Direct", directors);
  return (
    <div className={`max-w-screen p-2
    ${currentTheme === "halloween" ? "text-white" : "text-black"}
    `}>
      {/* backdrop */}
      <div className="w-full h-[70vh] overflow-hidden sm:block hidden">
        <img
          className="w-full opacity-90 brightness-[30%]"
          src={`https://image.tmdb.org/t/p/original/${data.backdrop_path}`}
          alt=""
        />
      </div>

      {/* Poster */}
      <div className="sm:absolute sm:top-[45vh] sm:left-[20vw] ml-14  ">
        <img
          className="h-[50vh] shadow-2xl "
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
        />
      </div>

      {/* Info */}
      <div
        className={`sm:absolute sm:top-[45vh] sm:h-[35vh] sm:left-[40vw] sm:text-white `}
      >
        {/* release_date */}
        <h1
          className={`text-2xl mt-1 font-medium`}
        >
          {data.release_date.substring(0, 4)}
        </h1>

        {/* title */}
        <h1 className="sm:text-4xl text-3xl mt-1  font-bold">{data.title}</h1>
        <div className="mt-3">
          {/* rating */}
          <span className="text-md font-semibold py-2 px-4 w-[50px] ml-1 mt-1 h-6 bg-primary">
            {data.vote_average}
          </span>

          {/* rating count */}
          <span className=" ml-4">{data.vote_count} votes</span>
        </div>

        <div className="text-lg  mt-2">
          <span>
            Directing: &nbsp;
            {directors.map((member) => member.name)}
          </span>
          <br />
          <span>
            Written: &nbsp;
            {writing.map((member) => member?.name)}
          </span>
        </div>
      </div>

      {/* Overview */}
      <div className="sm:ml-[560px] sm:mt-10 mt-10 min-w-full ">
        <h2 className="text-2xl font-bold bg-primary w-[6vw] ">Overview</h2>
        <p className="sm:w-[20vw] mt-5">{data.overview}</p>
      </div>

      <div className="pl-3 mt-8">
        <h1 className="bg-primary text-4xl font-semibold  w-40 sm:ml-[12px] mb-5">
          Top Cast
        </h1>
        {
          isMobile ?
           <ActorCarosalMobile cast={data.credits.cast}/>
          : <ActorCarosal cast={data.credits.cast} />
        }
      </div>
    </div>
  );
};

export default MovieInformation;
