import { useState } from "react";
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
  return (
    <div className="flex h-full">
      <CssBaseline />
      <Navbar />
      <main className="flex-grow p-[2em]">
        <div className="h-70px"/>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movies/:id" element={<MovieInformation />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
