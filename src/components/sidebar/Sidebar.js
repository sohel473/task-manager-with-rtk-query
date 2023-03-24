import React from "react";
import Projects from "./Projects";
import Team from "./Team";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        {/* <!-- Projects List --> */}
        <Projects />

        {/* <!-- Team Members --> */}
        <Team />
      </div>
    </>
  );
}
