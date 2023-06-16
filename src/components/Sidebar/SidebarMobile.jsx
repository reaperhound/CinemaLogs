import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetGenresQuery } from "../../services/TMDB";

import ReactLoading from "react-loading";
import genreIcons from "../../assets/index";
import { Link } from "react-router-dom";

const SidebarMobile = () => {
  const currentTheme = useSelector((state) => state.themeSlice);

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

  return (
    <div
      className={`
        ${
          currentTheme === "halloween"
            ? "bg-dark-grad-one text-light-grad-one"
            : "bg-light-grad-two text-dark-grad-one"
        }
    w-[40vw] h-[120vh] overflow-y-scroll absolute z-[90]`}
    >
      {/* Logo */}
      <Link to={"/"} className="py-6 mx-auto animate-spin animate-once ">
        <img src={genreIcons.logo} alt="logo" className="w-1/3 mx-auto mt-6" />{" "}
      </Link>

      {/* Categories */}
      <div className="flex flex-col mt-5">
        {categories.map(({ label, value }) => (
          <Link
            className={` flex py-2`}
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

      {/* Genres */}
      <div>
        {isFetching ? (
          <ReactLoading type="bubbles" color="#f9d72f" />
        ) : (
          <div className="mt-[5vh]">
            {data.genres.map(({ name, id }) => (
              <Link
                className={` flex py-2`}
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
                    } w-[48%]`}
                  />
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SidebarMobile;
