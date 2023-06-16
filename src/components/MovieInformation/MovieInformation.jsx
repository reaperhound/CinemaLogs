import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  useGetMovieQuery,
  useGetReccomendationsQuery,
} from "../../services/TMDB";
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
import {
  Favorite,
  FavoriteBorderOutlined,
  PlusOne,
  Remove,
} from "@mui/icons-material";
import { Modal } from "@mui/material";

const MovieInformation = () => {
  const { id } = useParams();
  const { data, isFetching, error } = useGetMovieQuery(id);
  const { data: reccomendations, isFetching: isReccFetching } =
    useGetReccomendationsQuery({ list: "/recommendations", movie_id: id });
  console.log("recc", reccomendations);
  const currentTheme = useSelector((state) => state.themeSlice);

  const [open, setOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  const [isMovieFavorite, setisMovieFavorite] = useState(false);
  const [isMovieWatchlisted, setIsMovieWatchlisted] = useState(false);

  const addToFavorites = () => {};

  const addToWatchList = () => {};

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
    data?.credits.crew.find(
      (member) => member.known_for_department == "Writing"
    )
  );
  console.log("Direct", directors);
  return (
    <div
      className={`bg-gradient-to-r lg:pl-[5vw] relative 
    ${currentTheme === "halloween" ? "text-white from-dark-grad-one to-dark-grad-two " : "text-white from-light-grad-two to-light-grad-one"}
    `}
    >
      {/* backdrop */}
      <div className="w-full h-[70vh] overflow-hidden sm:block ">
        <img
          loading="lazy"
          className="w-full opacity-90 brightness-[50%] shadow-inner"
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt="Poster"
        />
      </div>

      {/* blur image */}
      <img
          loading="lazy"
          className="lg:w-[95vw] lg:h-full lg:mt-0 w-[120vw] blur-[190px] h-[100vh] mt-[-43vh] sm:blur[20px] opacity-90  brightness-[50%] shadow-inner relative overflow-hidden z-0"
          src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
          alt="Poster"
        />

      {/* Poster */}
      <div className="lg:mt-[-140vh] relative lg:ml-14 ml-5 mt-[-110vh] mb-10">
        <img
          loading="lazy"
          className="lg:h-[50vh] h-[30vh] shadow-2xl "
          src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
          alt=""
        />
      </div>

      {/* Info */}
      <div
        className={`lg:ml-14 ml-5 z-20 relative text-white lg:mt-3`}
      >
        {/* release_date */}
        <h1 className={`text-2xl mt-1 font-medium`}>
          {data?.release_date.substring(0, 4)}
        </h1>

        {/* title */}
        <h1 className="sm:text-4xl text-3xl mt-1 lg:pt-3 font-bold">
          {data?.title}
        </h1>
        <div className="mt-3 lg:mt-6">
          {/* rating */}
          <span className="text-md font-semibold py-2  px-4 w-[50px] mt-1 h-6 bg-primary">
            {data?.vote_average}
          </span>

          {/* rating count */}
          <span className=" ml-4 ">{data.vote_count} votes</span>
        </div>

        <div className="text-lg  mt-2 lg:mt-5">
          <span>
            Directing: &nbsp;
            {directors.map((member) => member?.name)}
          </span>
          <br />
          <span>
            Written: &nbsp;
            {writing.map((member) => member?.name)}
          </span>
        </div>
      </div>

      {/* Overview */}
      <div className="lg:ml-14 lg:top-[126vh] lg:mr-0 mt-10 ml-5 mr-6  absolute ">
        <h2 className="text-2xl font-bold bg-primary lg:w-[6vw] w-[32vw] ">
          Overview
        </h2>
        <p className="sm:w-[27.5vw] mt-5">{data.overview}</p>
      </div>

      {/* //Add 2 fav, watchlist etc.. */}
      <div className="flex gap-4 flex-wrap lg:top-[-83.5vh] mt-[55vh] lg:left-[49.5vw] ml-5 lg:mb-0 mb-5 relative z-[70]">
        <button
          className="btn bg-primary-focus text-primary-content hover:text-white"
          onClick={addToFavorites}
        >
          {isMovieFavorite ? "unFav" : "Fav"} &nbsp;
          {isMovieFavorite ? <FavoriteBorderOutlined /> : <Favorite />}
        </button>
        <button
          className="lg:ml-[2.1vw] btn bg-primary-focus text-primary-content hover:text-white"
          onClick={addToWatchList}
        >
          Watchlist&nbsp;
          {isMovieWatchlisted ? <Remove /> : <PlusOne />}
        </button>
      </div>

      {/* External Links */}
      <div className="lg:top-[-79vh] mt-[1vh] lg:left-[49.5vw] ml-5 flex gap-4 flex-wrap relative z-[70]">
        <Link target="blank" rel="noopener noreferrer" to={data?.homepage}>
          <button className="btn btn-secondary text-secondary-content">
            <PublicIcon />
            &nbsp; Website
          </button>
        </Link>
        <Link
          target="blank"
          rel="noopener noreferrer"
          to={`https://www.imdb.com/title/${data?.imdb_id}`}
        >
          <button className="btn btn-secondary text-secondary-content">
            <TheatersIcon />
            &nbsp; IMDB
          </button>
        </Link>
        <Link onClick={() => setOpen(true)} to="#">
          <button className="btn btn-secondary text-secondary-content">
            <VideoLibraryIcon />
            &nbsp; Trailer
          </button>
        </Link>
      </div>

      {/* Cast */}
      <div className="relative z-50 mt-3 lg:top-[-59vh]">
        <h1 className="bg-primary text-4xl font-semibold  w-40 lg:mt-0 mt-5  lg:ml-[50.8vw] ml-5 mb-5">
          Top Cast
        </h1>
        {isMobile ? (
          <ActorCarosalMobile cast={data.credits.cast} />
        ) : (
          <ActorCarosal cast={data.credits.cast} />
        )}
      </div>

      <div className="pl-3 mt-10 lg:top-[-20vh] relative">
        <h1 className="text-2xl font-bold bg-primary lg:ml-[3rem] ml-4 mb-7 lg:w-[13%] w-[60%]">
          Recommendation
        </h1>
        {reccomendations ? (
          <MovieList movies={reccomendations} />
        ) : (
          <h1>No Recommendations</h1>
        )}
      </div>

      <Modal
        closeAfterTransition
        className="flex items-center justify-center"
        open={open}
        onClose={() => setOpen(false)}
      >
        {data?.videos?.results?.length > 0 && (
          <iframe
            // autoPlay
            className="lg:w-1/2 lg:h-1/2 w-3/4 h-1/4"
            src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
            allow="autoplay"
            title="Trailer"
            frameborder="0"
          />
        )}
      </Modal>
    </div>
  );
};

export default MovieInformation;
