import React from "react";
import Projects from "./Projects";
import Teams from "./Teams";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        {/* <!-- Projects List --> */}
        <Projects />

        {/* <!-- Team Members --> */}
        <Teams />
      </div>
    </>
  );
}
