import React from "react";
import { Link } from "react-router-dom";
import { useGetGenresQuery } from "../../services/TMDB";
import ReactLoading from "react-loading";
import genreIcons from "../../assets/index";

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();
  console.log("genres", data);
  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];
  const demoCategories = [
    { label: "Comedy", value: "comedy" },
    { label: "Action", value: "action" },
    { label: "Horror", value: "horror" },
    { label: "Animation", value: "aniation" },
  ];
  return (
    <div className="bg-base-200 animate-fade-right pb-32  duration-300 z-50 text-base-content border border-gray-500 text-3xl w-[240px] flex flex-col gap-5 justify-start min-h-[100vh] absolute left-0">
      <h1 className="py-6 mx-auto animate-spin animate-once">
        <img src={genreIcons.logo} alt="logo" className="w-1/3 mx-auto" />
      </h1>

      {/* Genres */}
      <h2 className="text-lg pl-7 ">Genres</h2>
      <div>
        {categories.map(({ label, value }) => (
          <Link
            key={value}
            to={"/"}
            className="flex justify-start my-4 pl-3 py-3 hover:bg-primary-focus hover:text-primary-content ease-in-out duration-100"
          >
            <div className="avatar placeholder mx-2">
              <div className="bg-inherit text-neutral-content rounded-full w-8 mr-2">
                <img src={genreIcons[label.toLowerCase()]} alt={name} />
              </div>
            </div>
            <p className="text-lg">{label}</p>
          </Link>
        ))}
      </div>

      {/* Categories */}
      <h2 className="text-lg pl-7 ">Categories</h2>
      <div className="text-center">
        {isFetching ? (
          <ReactLoading type="bubbles" color="#f9d72f" />
        ) : (
          data.genres.map(({ name, id }) => (
            <Link
              key={id}
              to={"/"}
              className="flex justify-start my-4 pl-3 py-3 hover:bg-primary-focus hover:text-primary-content ease-in-out duration-100"
            >
              <div className="avatar placeholder mx-2">
                <div className="bg-inherit text-neutral-content rounded-full w-8 mr-2">
                  <img src={genreIcons[name.toLowerCase()]} alt={name} />
                </div>
              </div>
              <p className="text-lg">{name}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
