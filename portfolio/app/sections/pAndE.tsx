"use client";
import React, { useState } from "react";
import Experience from "./expAndProj/experience";
import Projects from "./expAndProj/projects";

const PAndE = () => {
  const [expIsActive, setExpIsActive] = useState(true);

  return (
    <div className="flex flex-col overflow-auto h-auto lg:my-20 lg:h-screen">
      <div className="flex space-x-2">
        <span className={`text-2xl ${expIsActive ? "" : "text-gray-500"}`} onClick={() => {
          setExpIsActive(true);
        }}>
          Experience
        </span>
        <span className={`text-2xl ${expIsActive ? "text-gray-500" : ""}`} onClick={() => {
          setExpIsActive(false);
        }}>
          Projects
        </span>
      </div>
      {expIsActive ? <Experience /> : <Projects />}
    </div>
  );
};

export default PAndE;
