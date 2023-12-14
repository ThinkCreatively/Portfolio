import React from "react";
import Image from "next/image";
import AboutMeImage from "./aboutMeImage";

const AboutMe = () => {
  const techStack = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
      alt: "TypeScript",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      alt: "React",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      alt: "C++",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
      alt: "Golang",
    },
  ];

  const links = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
      alt: "GitHub",
      linkUrl: "https://github.com/ThinkCreatively",
      className: "bg-white rounded-full border-4",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg",
      alt: "LinkedIn",
      linkUrl: "https://www.linkedin.com/in/jmoore99/",
    },
  ];
  return (
    <div className="flex flex-col">
      <span className="text-5xl text-transparent">Hi! I&apos;m James</span>
      <Image src="" alt="test" height="300" width="300" />
      <span className="text-xl">
        I&apos;m a Software Engineer from Denver Colorado who enjoys the puzzle
        and challenge of working through problems leveraging code for my
        solutions.
      </span>
      <span className="text-xl text-center my-6">What I work with best</span>
      <div className="flex justify-around items-center">
        {techStack.map((item, i) => (
          <AboutMeImage key={i} src={item.src} alt={item.alt} />
        ))}
      </div>
      <span className="text-xl text-center my-6">My Links</span>
      <div className="flex justify-around">
        {links.map((item, i) => (
          <AboutMeImage
            key={i}
            src={item.src}
            alt={item.alt}
            linkUrl={item.linkUrl}
            className={item.className}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
