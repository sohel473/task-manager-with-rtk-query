import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { setSearchResults } from "../../features/search/searchSlice";

export default function Navbar() {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchResults(e.target.value));
  };

  return (
    <>
      <nav className="container relative py-3">
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          {/* search */}
          <div className="flex-1 max-w-xs search-field group">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Task, Project, Team Member"
              className="search-input"
              id="lws-searchTask"
              onChange={handleSearch}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
