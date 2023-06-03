import React, { useState } from "react";

const ActorCarosal = ({ cast }) => {
  console.log("cast", cast);

  return (
    <div className="flex bg-inherit h-[47vh] min-w-[80vw] mt-9">
      {cast.map((actor, index) => {
        if (index < 10) {
          if (actor.profile_path) {
            return (
              <div className="flex flex-col mx-3 text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                  alt={actor.name}
                  className="shadow-md mb-2"
                />
                <span>{actor.name}</span>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default ActorCarosal;
