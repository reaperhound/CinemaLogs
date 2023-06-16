import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectGenreOrCategory } from "../../features/currentGenreOrCategory";
import { useGetGenresQuery } from "../../services/TMDB";

import ReactLoading from "react-loading";
import genreIcons from "../../assets/index";
// import "./Sidebar.css";

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
    //   <div className="divider"></div>

    //   {/* Genre */}
    //   {/* <h2 className="text-lg pl-7 ">Genre</h2> */}
    //   <div className="text-center">
    //     {isFetching ? (
    //       <ReactLoading type="bubbles" color="#f9d72f" />
    //     ) : (
    //       data.genres.map(({ name, id }) => (
    //         <Link
    //           key={id}
    //           to={"/"}
    //           onClick={() => dispatch(selectGenreOrCategory(id))}
    //           className={`flex justify-start my-4 pl-3 py-3 ease-in-out duration-100  overflow-hidden hover:overflow-visible
    //           ${
    //             currentTheme === "halloween"
    //               ? "hover:bg-dark-grad-two hover:text-slate-100"
    //               : " hover:bg-light-grad-two hover:text-gray-600"
    //           }
    //           `}
    //         >
    //           <div className="placeholder mx-2 ">
    //             <div className="bg-inherit text-neutral-content rounded-full w-8 mr-2">
    //               <img
    //                 src={genreIcons[name.toLowerCase()]}
    //                 alt={name}
    //                 className={`${currentTheme === "halloween" && "invert"}`}
    //               />
    //             </div>
    //           </div>
    //           <p className="text-lg">&nbsp;&nbsp;&nbsp;{name}</p>
    //         </Link>
    //       ))
    //     )}
    //   </div>
    // </div>
    <>
      <div className="z-[80] max-w-[60px] absolute">
        {/* Logo */}
        <Link to={"/"} className="py-6 mx-auto animate-spin animate-once">
          <img src={genreIcons.logo} alt="logo" className="w-1/3 mx-auto" />{" "}
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
                <div className=" min-w-[60%] mr-2 pl-2 ">
                  <p className="text-sm whitespace-nowrap ">{label}</p>
                </div>

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
                  onClick={() => dispatch(selectGenreOrCategory(value))}
                >
                  <div className=" min-w-[60%] mr-2 pl-2 ">
                    <p className="text-sm whitespace-nowrap ">{name}</p>
                  </div>

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
