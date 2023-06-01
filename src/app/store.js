import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../services/TMDB";
import genreOrCategoryReducer from "../features/currentGenreOrCategory"
import themeSlice from "../features/currentTheme"

export default configureStore({
  reducer: {
    [tmdbApi.reducerPath] : tmdbApi.reducer,
    currentGenreOrCategory: genreOrCategoryReducer,
    themeSlice: themeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});

