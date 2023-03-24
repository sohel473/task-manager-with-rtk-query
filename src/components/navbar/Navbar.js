import React from "react";
import logo from "../../assets/images/logo.svg";

export default function Navbar() {
  return (
    <>
      <nav className="container relative py-3">
        <div className="flex items-center justify-between">
          {/* logo */}
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          {/* search */}
          <div className="flex-1 max-w-xs search-field group">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input
              type="text"
              placeholder="Search Task, Project, Team Member"
              className="search-input"
              id="lws-searchTask"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
