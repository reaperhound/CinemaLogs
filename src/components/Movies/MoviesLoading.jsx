import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";

const MoviesLoading = () => {
  const currentTheme = useSelector((state) => state.themeSlice)
  return (
    <Skeleton width={20} baseColor='#f9d72f'/>
  );
};

export default MoviesLoading;
