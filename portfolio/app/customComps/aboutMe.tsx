import React from "react";
import Image from "next/image";
import AboutMeImage from "./aboutMeImage";

const AboutMe = () => {
  return (
    <div className="flex flex-col">
      <span className="text-5xl">Hi! I&apos;m James</span>
      <Image src="" alt="test" height="300" width="300" />
      <span className="text-xl">
        I&apos;m a Software Engineer from Denver Colorado who enjoys the puzzle
        and challenge of working through problems leveraging code for my
        solutions.
      </span>
      <span className="text-xl text-center my-6">
        Here are some of my favorite tools to work with
      </span>
      <div className="flex justify-around">
        <AboutMeImage
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt="Typescript"
        />
        <AboutMeImage
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="React"
        />
        <AboutMeImage
          src="https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg"
          alt="C++"
        />
        <AboutMeImage
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg"
          alt="Golang"
        />
      </div>
    </div>
  );
};

export default AboutMe;
