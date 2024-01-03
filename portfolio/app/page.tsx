"use client";
import React, { useState, useEffect } from "react";
import { IsClientCtxProvider } from "./isClientCtx";
import CustomSection from "./customComps/section";
import AboutMe from "./sections/aboutMe";
import Projects from "./sections/projects";
import CursorCircle from "./customComps/cursorCirlce";

export default function Home() {
  let [mouseX, setMouseX] = useState(0);
  let [mouseY, setMouseY] = useState(0);
  let [screenWidth, setScreenWidth] = useState(0);

  const getMouseLocation = (e: any) => {
    var x = e.clientX;
    var y = e.clientY;
    var newposX = x - 350;
    var newposY = y - 350;
    setMouseX(newposX);
    setMouseY(newposY);
  };

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <main onMouseMove={getMouseLocation}>
      <IsClientCtxProvider>
        {window.navigator.maxTouchPoints ? null : (
          <CursorCircle locX={mouseX} locY={mouseY} />
        )}
        <div className="flex flex-col justify-center content-between min-h-screen px-6 bg-indigo-950 overflow-hidden lg:flex-row">
          <CustomSection extra="w-full lg:w-5/12">
            <AboutMe />
          </CustomSection>
          <CustomSection extra="items-center items-start h-full overflow-auto w-full lg:w-1/2">
            <Projects />
          </CustomSection>
        </div>
      </IsClientCtxProvider>
    </main>
  );
}
