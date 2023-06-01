import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import { Search, Sidebar } from "../Index";
import UserDropDown from "./UserDropDown";
import ThemeSelector from "./ThemeSelector";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  useEffect(() => {
    function MobileScr() {
      return window.innerWidth <= 768;
    }
    console.log(MobileScr());
    setIsMobile(MobileScr());
    !isMobile && setSideBarOpen(true);
  }, []);


  return (
    <>
      <div
        className={`navbar bg-gradient-to-r from-primary to-primary-focus text-primary-content justify-between min-h-[8vh] border border-b-gray-500 `}
      >
        {isMobile && (
          <button
            className="bg-transparent pl-1"
            onClick={() => setSideBarOpen(!sideBarOpen)}
          >
            <DehazeIcon />
          </button>
        )}

        {/* Theme Selector */}
        <ThemeSelector />

        {/* //Search Bar */}
        <Search />

        {/* //Right menu */}
        {isMobile ? (
          sideBarOpen ? (
            <button
              className="bg-transparent pl-1"
              onClick={() => setSideBarOpen(!sideBarOpen)}
            >
              <ClearIcon />
            </button>
          ) : (
            <UserDropDown />
          )
        ) : (
          <UserDropDown />
        )}
      </div>
      {sideBarOpen && <Sidebar />}
    </>
  );
};

export default Navbar;
