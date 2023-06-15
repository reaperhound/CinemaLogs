import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../../features/currentGenreOrCategory";
import { SearchSharp } from "@mui/icons-material";

const Search = () => {
  const [query, setQuery] = useState("");
  const currentTheme = useSelector((state) => state.themeSlice);

  const dispatch = useDispatch();
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      console.log("Here", query);
      dispatch(searchMovie(query));
    }
  };
  return (
    <div className="max-w-md mx-auto lg:pr-[14vw] ">
      <div className="flex overflow-hidden relative items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-inherit">
        <div className="grid place-items-center w-12 h-full text-gray-300">
          <SearchSharp />
        </div>

        <input
          className={`h-full outline-none w-full bg-inherit text-sm pr-2
            ${
              currentTheme === "halloween" ? " text-slate-200" : "text-gray-700"
            }
          `}
          type="text"
          id="search"
          placeholder="Search .."
          onKeyDown={handleKeyPress}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
    </div>
  );
};

export default Search;
