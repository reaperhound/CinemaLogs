import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserDropDown = () => {
  const { user } = useSelector((state) => state.user)
  const { id, avatar: { gravatar: {hash} } } = user;
  return (
    <div className="dropdown dropdown-bottom dropdown-end text-error">
      <label tabIndex={0} className="avatar m-1">
        <div className="w-[40px] rounded-full">
          <img src={`https://www.gravatar.com/avatar/${hash}`} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to={`/profile/:${id}`}>Profile</Link>
        </li>
        <li>
          <a>Sign Out</a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
