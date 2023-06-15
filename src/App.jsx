import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import {
  Actors,
  MovieInformation,
  Movies,
  Navbar,
  Profile,
} from "./components/Index";
import { CssBaseline } from "@mui/material";

function App() {
  // console.log(import.meta.env.VITE_TMDB_KEY);

  return (
    <div className="flex flex-col sm:ml-[70px] h-[200vh]">
      {/* <CssBaseline /> */}
      <Navbar />
      <main className="bg-base-100 flex-grow min-h-[200vh] ">
        {/* <div className="h-[80px]" /> */}
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movies/:id" element={<MovieInformation />} />
          <Route exact path="/profile/:id" element={<Profile />} />
          <Route exact path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
