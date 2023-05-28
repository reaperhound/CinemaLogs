import React from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Drawer,
  Button,
  Avatar,
  useMediaQuery,
} from "@mui/material";
import {
  Menu,
  AccountCircle,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)"); //if its less than 600px isMobile is true
  const isAuthenticated = true;

  return (
    <>
      <AppBar position="absolute">
        <Toolbar className="h-[80px] flex items-center justify-between  sm:ml-[240px]">
          {isMobile && (
            <IconButton
              color="inherit"
              edge="start"
              style={{ outline: "none" }}
              onClick={() => {}}
            >
              <Menu className="mr-2 none sm:block " />
            </IconButton>
          )}
          <IconButton
            color="inherit"
            edge="start"
            style={{ outline: "none" }}
            onClick={() => {}}
          >
            <Brightness4 className="" />
          </IconButton>
          {!isMobile && "Search...."}
          {isMobile && "Search...."}
          <div>
            {
              !isAuthenticated ? 
              (
                <Button onClick={() => {}} color="inherit">
                  Login &nbsp; <AccountCircle />
                </Button>
              ) : 
              (
                <Link to={`/profile/:id`}>
                  <Button color="inherit" >
                    {
                      !isMobile && <>My Movies &nbsp;</>
                    }
                    <Avatar style={{width: 30, height: 30}} alt="profile" 
                    src="https://cdn.pixabay.com/photo/1026/08/08/09/17/avatar-1577909_960_720.png"
                    />
                  </Button>
                </Link>
              )
            }
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
