import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ActorCarosal = ({ cast }) => {
  return (
    <div className="grid grid-cols-5 bg-inherit  mt-9 max-w-[40vw] ml-[50vw] ">
      {cast.map((actor, index) => {
        if (index < 10) {
          if (actor.profile_path) {
            return (
              <Link key={actor.name} to={`/actors/${actor.id}`}>
                <div className="flex flex-col mx-2 mb-8 justify-center items-center">
                  <img
                    loading="lazy"
                    src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                    alt={actor.name}
                    className="shadow-md mb-2 w-[100px]"
                  />

                  <span className="text-center">{actor.name.substring(0, 9)}..</span>
                </div>
              </Link>
            );
          }
        }
      })}
    </div>
  );
};

export default ActorCarosal;
