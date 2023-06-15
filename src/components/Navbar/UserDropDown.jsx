import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDropDown = () => {
  const { user } = useSelector((state) => state.user);
  const currentTheme = useSelector(state => state.themeSlice)
  const {
    id,
    avatar: {
      gravatar: { hash },
    },
  } = user;

  const handleSignOut = () => {
    localStorage.clear()
    window.location.href = "/"
  }
  
  return (
    <div className={`dropdown dropdown-bottom dropdown-end text-error`}>
      <label tabIndex={0} className="avatar m-1">
        <div className="w-[40px] rounded-full">
          <img src={`https://www.gravatar.com/avatar/${hash}`} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className={`
        ${currentTheme === "halloween" ? "bg-light-grad-two text-gray-700": "bg-dark-grad-two text-slate-300"}
        dropdown-content menu p-2 shadow rounded-box w-52`}
      >
        <li>
          <Link to={`/profile/:${id}`}>Profile</Link>
        </li>
        <li>
          <button onClick={handleSignOut}>
            <span>Sign Out</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
