import React, { useEffect, useState } from "react";
import { createSessionId, fetchToken, moviesApi } from "../../utils";
import "./Navbar.css";

import DehazeIcon from "@mui/icons-material/Dehaze";
import ClearIcon from "@mui/icons-material/Clear";
import { Search, Sidebar } from "../Index";
import UserDropDown from "./UserDropDown";
import ThemeSelector from "./ThemeSelector";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../features/auth";

const Navbar = () => {
  const dispatch = useDispatch();
  const [isMobile, setIsMobile] = useState(false);
  const [sideBarOpen, setSideBarOpen] = useState(false);

  const token = localStorage.getItem("request_token");
  const sessionIdFromLocalStorage = localStorage.getItem("session_id");

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const currentTheme = useSelector((state) => state.themeSlice);

  console.log("user", user);

  useEffect(() => {
    const loginUser = async () => {
      if (token) {
        if (sessionIdFromLocalStorage) {
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionIdFromLocalStorage}`
          );

          dispatch(setUser(userData));
        } else {
          const sessionId = await createSessionId();
          const { data: userData } = await moviesApi.get(
            `/account?session_id=${sessionId}`
          );

          dispatch(setUser(userData));
        }
      }
    };
    loginUser();
  }, []);

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
        className={`navbar nav-mine z-50 bg-gradient-to-r
        ${
          currentTheme === "halloween"
            ? "from-dark-grad-one to-dark-grad-two"
            : "from-light-grad-two to-light-grad-one"
        }
        text-primary-content justify-between min-h-[8vh] `}
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
          ) : isAuthenticated ? (
            <UserDropDown />
          ) : (
            <button className="button-login" onClick={fetchToken}>
              <span>Log in</span>
            </button>
          )
        ) : isAuthenticated ? (
          <UserDropDown />
        ) : (
          <button className="button-login" onClick={fetchToken}>
            <span>Log in</span>
          </button>
        )}
      </div>
      {sideBarOpen && <Sidebar />}
    </>
  );
};

export default Navbar;
