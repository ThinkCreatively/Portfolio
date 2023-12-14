"use client";
import React, { useState } from "react";
import CustomSection from "./customComps/section";
import AboutMe from "./customComps/aboutMe";
import ProjectBlock from "./customComps/projectBlock";
import CursorCircle from "./customComps/cursorCirlce";

export default function Home() {
  let [mouseX, setMouseX] = useState(0);
  let [mouseY, setMouseY] = useState(0);

  const getMouseLocation = (e: any) => {
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 60;
    var newposY = y - 60;
    setMouseX(newposX);
    setMouseY(newposY);
  };

  return (
    <main>
      <div
        onMouseMove={getMouseLocation}
        onClick={getMouseLocation}
        className="flex justify-center content-between min-h-screen min-w-full px-6 bg-indigo-950"
      >
        <CursorCircle locX={mouseX} locY={mouseY} />
        <CustomSection>
          <AboutMe />
        </CustomSection>
        <CustomSection extra="items-center justify-evenly">
          <ProjectBlock />
          <ProjectBlock />
          <ProjectBlock />
        </CustomSection>
      </div>
    </main>
  );
}
