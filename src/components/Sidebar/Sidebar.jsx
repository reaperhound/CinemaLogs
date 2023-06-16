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
    <>
      <div className="z-[80] max-w-[60px] absolute">
        {/* Logo */}
        <Link to={"/"} className="py-6 mx-auto animate-spin animate-once ">
          <img src={genreIcons.logo} alt="logo" className="w-2/3 mx-auto mt-6" />{" "}
        </Link>

        {/* Categories */}
        <div className="hidden lg:flex absolute flex-col top-[15vh] left-0">
          <div className="flex flex-col">
            {categories.map(({ label, value }) => (
              <Link
                className={`duration-300 hover:ml-[1.4%] cursor-pointer py-6 lg:w-[120px]
                  ml-[-60%] group h-[30px] flex justify-center items-center 
                  ${
                    currentTheme === "halloween"
                      ? "hover:bg-dark-grad-two hover:text-slate-100"
                      : " hover:bg-light-grad-one hover:text-gray-600"
                  }
                  `}
                key={value}
                to={"/"}
                onClick={() => dispatch(selectGenreOrCategory(value))}
              >
                {/* Label */}
                <div className=" min-w-[60%] mr-2 pl-2 ">
                  <p className="text-sm whitespace-nowrap ">{label}</p>
                </div>
                {/* Image PNG */}
                <div className="">
                  <img
                    src={genreIcons[label.toLowerCase()]}
                    alt={label}
                    className={`${
                      currentTheme === "halloween" && "invert"
                    } w-[48%]`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Genre */}
        <div className="hidden lg:flex absolute flex-col top-[45vh] left-0">
          <div className="flex flex-col">
            {isFetching ? (
              <ReactLoading type="bubbles" color="#f9d72f" />
            ) : (
              data.genres.map(({ name, id }) => (
                <Link
                  className={`duration-300 hover:ml-[1.4%] cursor-pointer py-6 lg:w-[180px]
                      ml-[-60%] group h-[30px] flex justify-center items-center 
                      ${
                        currentTheme === "halloween"
                          ? "hover:bg-dark-grad-two hover:text-slate-100"
                          : " hover:bg-light-grad-one hover:text-gray-600"
                      }
                      `}
                  key={id}
                  to={"/"}
                  onClick={() => dispatch(selectGenreOrCategory(id))}
                >
                  {/* Label */}
                  <div className=" min-w-[60%] mr-2 pl-2 ">
                    <p className="text-sm whitespace-nowrap ">{name}</p>
                  </div>

                    {/* Image PNG */}
                  <div className="">
                    <img
                      src={genreIcons[name.toLowerCase()]}
                      alt={name}
                      className={`${
                        currentTheme === "halloween" && "invert"
                      } w-[35%]`}
                    />
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
