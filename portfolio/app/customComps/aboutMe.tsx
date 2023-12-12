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
      <span className="text-xl text-center my-6">What I work with best</span>
      <div className="flex justify-around items-center">
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
      <span className="text-xl text-center my-6">My Links</span>
      <div className="flex justify-around">
        <AboutMeImage
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="Github"
          className="bg-white rounded-full border-4"
          linkUrl="https://github.com/ThinkCreatively"
        />
        <AboutMeImage
          src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
          alt="LinkedIn"
          linkUrl="https://www.linkedin.com/in/jmoore99/"
        />
      </div>
    </div>
  );
};

export default AboutMe;
