import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
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
    <div className="bg-base-200 animate-fade-right h-[200vh]  duration-300 z-50 text-base-content border border-gray-500 text-3xl w-[240px] flex flex-col gap-5 justify-start min-h-[100vh] absolute left-0">
      <h1 className="py-6 mx-auto animate-pulse">Logo</h1>

      {/* Categories */}
      <h2 className="text-lg pl-7 ">Categories</h2>
      <div>
        {categories.map(({ label, value }) => (
          <Link key={value} to={"/"} className="flex justify-start my-4 pl-3">
            <div className="avatar placeholder mx-2">
              <div className="bg-white text-neutral-content rounded-full w-8">
                <span className="text-xs">&</span>
              </div>
            </div>
            <p className="text-lg">{label}</p>
          </Link>
        ))}
      </div>

      {/* Genres */}
      <h2 className="text-lg pl-7 ">Genres</h2>
      <div>
        {demoCategories.map(({ label, value }) => (
          <Link key={value} to={"/"} className="flex justify-start my-4 pl-3">
            <div className="avatar placeholder mx-2">
              <div className="bg-white text-neutral-content rounded-full w-8">
                <span className="text-xs">&</span>
              </div>
            </div>
            <p className="text-lg">{label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
