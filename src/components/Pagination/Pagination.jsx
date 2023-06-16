import React from "react";
import { useSelector } from "react-redux";

const Pagination = ({ totalPages, setPage, currentPage }) => {
    console.log('totalPages', totalPages);
    const currentTheme = useSelector(state => state.themeSlice)
    const handlePrev = () => {
        if(currentPage !== 1) setPage((prevPage) => prevPage - 1) 
    }

    const handleNext = () => {
        if(currentPage !== totalPages) setPage((prevPage) => prevPage + 1)
    }

    if(totalPages === 0) return null

  return (
    <div className="flex justify-center lg:mt-10">
      <div className="join">
        <button onClick={handlePrev} 
            className={` bg-primary text-primary-content hover:bg-primary-focus
            join-item btn  btn-xs mr-2`}
        >
            prev
        </button>
        <button 
            className={` bg-primary-focus text-primary-content hover:bg-primary
            join-item btn btn-circle  mr-2`}
        >
            {currentPage}
        </button>
        <button 
            onClick={handleNext} 
            className={` bg-primary text-primary-content hover:bg-primary-focus
            join-item btn btn-xs`}
        >
            next
        </button>
      </div> 
    </div>
  );
};

export default Pagination;
