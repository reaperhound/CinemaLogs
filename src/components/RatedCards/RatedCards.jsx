import React from "react";
import { Movie } from "../Index";

const RatedCards = ({ data, title }) => {
  return (
    <div>
      <h1 className="text-2xl font-semibold bg-primary w-fit lg:ml-[1vw] ml-[5vw] lg:mt-0 mt-[10vh]">{title}</h1>

      <div className="grid lg:grid-cols-5 grid-cols-3 lg:ml-5 ml-[5vw]">
        {data?.results.map((movie, i) => (
          <Movie movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default RatedCards;
