import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const page = 1;
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;
// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1

export const tmdbApi = createApi({
  reducerPath: tmdbApiKey,
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3" }),
  endpoints: (builder) => ({
    // Get Genres
    getGenres: builder.query({
      query: () => `genre/movie/list?api_key=${tmdbApiKey}`,
    }),

    // Get Movies by [Type]
    getMovies: builder.query({
      query: () => `movie/popular?page=${page}&api_key=${tmdbApiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery, useGetGenresQuery } = tmdbApi;
