"use client";
import React, { useState } from "react";
import CustomSection from "./customComps/section";
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import CursorCircle from "./customComps/cursorCirlce";

export default function Home() {
  let [mouseX, setMouseX] = useState(0);
  let [mouseY, setMouseY] = useState(0);

  const getMouseLocation = (e: any) => {
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 350;
    var newposY = y - 350;
    setMouseX(newposX);
    setMouseY(newposY);
  };

  return (
    <main onMouseMove={getMouseLocation}>
      <CursorCircle locX={mouseX} locY={mouseY} />
      <div className="flex justify-center content-between min-h-screen px-6 bg-indigo-950 overflow-hidden">
        <CustomSection extra="w-5/12">
          <AboutMe />
        </CustomSection>
        <CustomSection extra="items-center items-start h-full overflow-auto">
          <Projects />
        </CustomSection>
      </div>
    </main>
  );
}
