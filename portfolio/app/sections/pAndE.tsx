"use client";
import React, { useState } from "react";
import Experience from "./expAndProj/experience";
import Projects from "./expAndProj/projects";

const PAndE = () => {
  const [expIsActive, setExpIsActive] = useState(true);

  return (
    <div className="flex flex-col overflow-auto h-auto lg:mb-20 lg:mt-20 lg:h-screen">
      <div className="flex flex-col overflow-hidden h-auto mb-5 justify-center">
        <div className="space-x-2">
          <span
            className={`text-2xl cursor-pointer ${
              expIsActive ? "" : "text-gray-500"
            }`}
            onClick={() => {
              setExpIsActive(true);
            }}
          >
            Experience
          </span>
          {/* <span
            className={`text-2xl cursor-pointer ${
              expIsActive ? "text-gray-500" : ""
            }`}
            onClick={() => {
              setExpIsActive(false);
            }}
          >
            Projects
          </span> */}
        </div>
      </div>
      <div className="flex flex-col overflow-auto h-auto lg:h-screen">
        {/* {expIsActive ? <Experience /> : <Projects />} */}
        <Experience />
      </div>
    </div>
  );
};

export default PAndE;
