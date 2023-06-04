import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetMovieQuery, useGetReccomendationsQuery } from "../../services/TMDB";
import MoviesLoading from "../Movies/MoviesLoading";
import { MovieList } from "../Index";
import ActorCarosal from "./ActorCarosal";
import { useSelector } from "react-redux";
import ActorCarosalMobile from "./ActorCarosalMobile";
import { useState } from "react";
import { useEffect } from "react";
import PublicIcon from "@mui/icons-material/Public"; //website
import TheatersIcon from "@mui/icons-material/Theaters"; //imdb
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary"; //trailer
import { Favorite, FavoriteBorderOutlined, PlusOne, Remove } from "@mui/icons-material";

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { data: reccomendations, isFetching: isReccFetching} = useGetReccomendationsQuery({list: '/recommendations', movie_id : id})
  console.log('recc', reccomendations);
  const currentTheme = useSelector((state) => state.themeSlice);

  const [isMobile, setIsMobile] = useState(false);

  const [isMovieFavorite, setisMovieFavorite] = useState(false)
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false)

  const addToFavorites = () => {

  }

  const addToWatchList = () => {

  }

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
    data?.credits.crew.find((member) => member.known_for_department == "Writing")
  );
  console.log("Direct", directors);
  return (
    <div
      className={` p-2
    ${currentTheme === "halloween" ? "text-white" : "text-black"}
    `}
    >
      {/* backdrop */}
      <div className="w-full h-[70vh] overflow-hidden sm:block hidden">
        <img
          className="w-full opacity-90 brightness-[30%]"
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt="Poster"
        />
      </div>

      {/* Poster */}
      <div className="lg:absolute lg:top-[45vh] lg:left-[20vw] ml-14 mt-5 mb-10 ">
        <img
          className="h-[50vh] shadow-2xl "
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt=""
        />
      </div>

      {/* Info */}
      <div
        className={`sm:absolute pl-3 sm:top-[45vh] sm:h-[35vh] sm:left-[40vw] lg:text-white lg:mt-3`}
      >
        {/* release_date */}
        <h1 className={`text-2xl mt-1 font-medium`}>
          {data.release_date.substring(0, 4)}
        </h1>

        {/* title */}
        <h1 className="sm:text-4xl text-3xl mt-1 lg:pt-3 font-bold">{data.title}</h1>
        <div className="mt-3 lg:mt-6">
          {/* rating */}
          <span className="text-md font-semibold py-2  px-4 w-[50px] mt-1 h-6 bg-primary">
            {data.vote_average}
          </span>

          {/* rating count */}
          <span className=" ml-4 ">{data.vote_count} votes</span>
        </div>

        <div className="text-lg  mt-2 lg:mt-5">
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
      <div className="sm:ml-[560px] sm:mt-10 mt-10 pl-3  ">
        <h2 className="text-2xl font-bold bg-primary lg:w-[6vw] w-[32vw] ">Overview</h2>
        <p className="sm:w-[20vw] mt-5">{data.overview}</p>
      </div>

      {/* //Add 2 fav, watchlist etc.. */}
      <div className="flex gap-4 mt-10 flex-wrap pl-3">
        <button className="btn bg-primary-focus text-primary-content hover:text-white" 
          onClick={addToFavorites}
        > 
        {isMovieFavorite ? 'unFav' : 'Fav'} &nbsp;
        {isMovieFavorite ? <FavoriteBorderOutlined /> : <Favorite />}
        </button>
        <button className="btn bg-primary-focus text-primary-content hover:text-white"
          onClick={addToWatchList}
        >
            Watchlist&nbsp;
          {isMovieWatchlisted ? <Remove /> : <PlusOne />}
        </button>
      </div>

      {/* External Links */}
      <div className="flex gap-4 mt-10 flex-wrap pl-3">
        <Link target="blank" rel="noopener noreferrer" to={data?.homepage}>
          <button className="btn btn-secondary text-secondary-content">
            <PublicIcon />
            &nbsp; Website
          </button>
        </Link>
        <Link target="blank" rel="noopener noreferrer" to={`https://www.imdb.com/title/${data?.imdb_id}`}>
          <button className="btn btn-secondary text-secondary-content">
            <TheatersIcon />
            &nbsp; IMDB
          </button>
        </Link>
        <Link onClick={() => {}} to="#">
          <button className="btn btn-secondary text-secondary-content">
            <VideoLibraryIcon />
            &nbsp; Trailer
          </button>
        </Link>
      </div>

      {/* Cast */}
      <div className="pl-3 mt-10">
        <h1 className="bg-primary text-4xl font-semibold  w-40 sm:ml-[12px] mb-5">
          Top Cast
        </h1>
        {isMobile ? (
          <ActorCarosalMobile cast={data.credits.cast} />
        ) : (
          <ActorCarosal cast={data.credits.cast} />
        )}
      </div>

      <div className="pl-3 mt-10">
        <h1 className="text-2xl font-bold bg-primary mb-7 lg:w-[13%] w-[60%]">Reccomendations</h1>
        {
          reccomendations 
          ? <MovieList movies={reccomendations}/>
          : <h1>No Reccomendations</h1>
        }
      </div>
    </div>
  );
};

export default MovieInformation;
