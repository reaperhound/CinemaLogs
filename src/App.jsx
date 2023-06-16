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
import { useSelector } from "react-redux";

function App() {
  // console.log(import.meta.env.VITE_TMDB_KEY);
  const currentTheme = useSelector(state => state.themeSlice)

  return (
    <div className={`
    ${currentTheme === "halloween" ? "bg-light-grad-two" : "bg-dark-grad-two"}
    flex flex-col`}>
      {/* <CssBaseline /> */}
      <Navbar />
      <main className="bg-base-100  ">
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
