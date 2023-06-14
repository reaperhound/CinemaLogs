import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { useGetGenresQuery } from "../../services/TMDB";

import ReactLoading from "react-loading";
import genreIcons from "../../assets/index";

const Sidebar = () => {
  const { data, isFetching } = useGetGenresQuery();
  const { genreIdOrCategoryName } = useSelector(
    (state) => state.currentGenreOrCategory
  );
  console.log(genreIdOrCategoryName);
  const dispatch = useDispatch();
  const categories = [
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    { label: "Upcoming", value: "upcoming" },
  ];

  const currentTheme = useSelector((state) => state.themeSlice);

  console.log("ThemeSlice", currentTheme);

  return (
    <div
      className={`
      text-base-content sidebar-mine bg-gradient-to-b
      ${
        currentTheme === "halloween"
          ? "from-dark-grad-one to-dark-grad-two"
          : "from-light-grad-two to-light-grad-one"
      }
      animate-fade-right pb-32  duration-300 z-50  text-3xl w-[70px] flex flex-col gap-5 justify-start min-h-[100vh] absolute left-0 `}
    >
      <Link to={"/"} className="py-6 mx-auto animate-spin animate-once">
        <img src={genreIcons.logo} alt="logo" className="w-1/3 mx-auto" />
      </Link>

      {/* Categories */}
      {/* <h2 className="text-lg pl-7  ">Categories</h2> */}
      <div className="relative">
        {categories.map(({ label, value }) => (
          <Link
            key={value}
            to={"/"}
            onClick={() => dispatch(selectGenreOrCategory(value))}
            className={`flex justify-start my-4 pl-3 py-3 w-full overflow-hidden hover:overflow-visible
            ${
              currentTheme === "halloween"
                ? "hover:bg-dark-grad-two hover:text-slate-100"
                : " hover:bg-light-grad-two hover:text-gray-600"
            }
            `}
          >
            <div className=" placeholder mx-2">
              <div className="bg-inherit text-neutral-content rounded-full w-7 ">
                <img
                  src={genreIcons[label.toLowerCase()]}
                  alt={label}
                  className={`${currentTheme === "halloween" && "invert"}`}
                />
              </div>
            </div>
            <p className="text-lg whitespace-nowrap">
              &nbsp;&nbsp;&nbsp;{label}
            </p>
          </Link>
        ))}
      </div>

      <div className="divider"></div>

      {/* Genre */}
      {/* <h2 className="text-lg pl-7 ">Genre</h2> */}
      <div className="text-center">
        {isFetching ? (
          <ReactLoading type="bubbles" color="#f9d72f" />
        ) : (
          data.genres.map(({ name, id }) => (
            <Link
              key={id}
              to={"/"}
              onClick={() => dispatch(selectGenreOrCategory(id))}
              className={`flex justify-start my-4 pl-3 py-3 ease-in-out duration-100  overflow-hidden hover:overflow-visible
              ${
                currentTheme === "halloween"
                  ? "hover:bg-dark-grad-two hover:text-slate-100"
                  : " hover:bg-light-grad-two hover:text-gray-600"
              }
              `}
            >
              <div className="placeholder mx-2">
                <div className="bg-inherit text-neutral-content rounded-full w-8 mr-2">
                  <img
                    src={genreIcons[name.toLowerCase()]}
                    alt={name}
                    className={`${currentTheme === "halloween" && "invert"}`}
                  />
                </div>
              </div>
              <p className="text-lg">&nbsp;&nbsp;&nbsp;{name}</p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Sidebar;
