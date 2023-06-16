import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetListQuery } from "../../services/TMDB";
import RatedCards from "../RatedCards/RatedCards";

const Profile = () => {
  const {
    user: { username },
  } = useSelector((state) => state.user);
  const { user } = useSelector((state) => state.user);
  console.log("profile", user?.avatar?.tmdb.avatar_path);

  const currentTheme = useSelector((state) => state.themeSlice);
  const { data: favoriteMovies, refetch: refetchFavoriteMovies } =
    useGetListQuery({
      listName: "favorite/movies",
      accountId: user.id,
      sessionId: localStorage.getItem("session_id"),
      page: 1,
    });
  const { data: watchListMovies, refetch: refetchWatchlistedMovies } =
    useGetListQuery({
      listName: "watchlist/movies",
      accountId: user.id,
      sessionId: localStorage.getItem("session_id"),
      page: 1,
    });

  useEffect(() => {
    refetchFavoriteMovies();
    refetchWatchlistedMovies();
  }, []);

  return (
    <div
      className={`
    ${
      currentTheme === "halloween"
        ? "bg-gradient-to-r from-dark-grad-two to-dark-grad-one"
        : "bg-gradient-to-r from-light-grad-two to-light-grad-one"
    }
    w-full h-[160vh] lg:pl-[5vw]`}
    >
      {/* <h1 className="text-4xl">Profile</h1> */}
      <div className="lg:ml-[10vw] pt-[10vh]">
        <img
          src={`https://image.tmdb.org//t/p/w300_and_h300_bestv2${user?.avatar?.tmdb.avatar_path}`}
          alt="profile"
          className="lg:w-[15vw] w-[29vw] lg:mx-0 mx-auto  mask mask-circle hover:animate-spin duration-500"
        />
      </div>
      <h3 className="text-4xl lg:ml-[10vw] lg:text-start text-center lg:mt-[2vh] mt-[3vh]">{username}</h3>
      {!favoriteMovies?.result?.length && !watchListMovies?.results?.length ? (
        <h1>Add movies to favorites or watchlist to watch later</h1>
      ) : (
        <div className="lg:ml-[9vw] lg:mt-[10vh]">
          <RatedCards title="Favorites" data={favoriteMovies} />
          <RatedCards title="Watchlisted" data={watchListMovies} />
        </div>
      )}
    </div>
  );
};

export default Profile;
