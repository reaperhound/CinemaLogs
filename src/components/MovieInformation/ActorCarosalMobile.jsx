import React from "react";

const ActorCarosalMobile = ({ cast }) => {
  return (
    <div className="carousel carousel-end rounded-box">
      {cast.map((actor, index) => {
        if (index < 10) {
          if (actor.profile_path) {
            return (
              <div className="carousel-item relative" key={actor.name}>
                <img
                  src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                  alt={actor.name}
                />
                <span className="absolute text-white bottom-2 right-10">{actor.name}</span>
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default ActorCarosalMobile;
