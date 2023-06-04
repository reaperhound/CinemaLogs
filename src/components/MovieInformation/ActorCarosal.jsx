import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ActorCarosal = ({ cast }) => {
  return (
    <div className="flex bg-inherit min-w-[80vw] mt-9 ">
      {cast.map((actor, index) => {
        if (index < 10) {
          if (actor.profile_path) {
            return (
              <div key={actor.name} className="flex flex-col mx-3 text-center">
                <img
                  src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                  alt={actor.name}
                  className="shadow-md mb-2 "
                />
                <Link to={`/actors/${actor.id}`}>
                  <span>{actor.name}</span>
                </Link>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default ActorCarosal;
