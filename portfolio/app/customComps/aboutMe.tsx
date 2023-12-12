import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl">Hi! I&apos;m James</span>
      <Image src="" alt="test" height="300" width="300" />
      <span className="text-xl">
        I&apos;m a Software Engineer from Denver Colorado who enjoys the puzzle
        and challenge of working through problems leveraging code to for my
        solutions.
      </span>
      <span className="text-xl">Here are some of my favorite tools to work with</span>
      <div
        className="flex justify-around border-2 border-yellow-500"
      >
        <span>Typescript</span>
        <span>React + React Native</span>
        <span>C++</span>
        <span>Golang</span>
      </div>
    </div>
  );
};

export default AboutMe;
