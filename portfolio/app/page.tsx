"use client";
import React, { useState, useEffect } from "react";
import CustomSection from "./customComps/section";
import AboutMe from "./sections/aboutMe";
import PAndE from "./sections/pAndE";
import CursorCircle from "./customComps/cursorCirlce";

export default function Home() {
  let [mouseX, setMouseX] = useState(0);
  let [mouseY, setMouseY] = useState(0);
  let [screenWidth, setScreenWidth] = useState(0);

  const getMouseLocation = (e: any) => {
    var x = e.pageX;
    var y = e.pageY;
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
      {screenWidth > 770 ? <CursorCircle locX={mouseX} locY={mouseY} /> : null}
      <div className="flex flex-col justify-center content-between min-h-screen px-6 bg-indigo-950 overflow-hidden lg:flex-row">
        <CustomSection extra="w-full lg:w-5/12">
          <AboutMe screenWidth={screenWidth} />
        </CustomSection>
        <CustomSection extra="items-center items-start h-screen overflow-auto w-full lg:w-1/2">
          <PAndE />
        </CustomSection>
      </div>
    </main>
  );
}
