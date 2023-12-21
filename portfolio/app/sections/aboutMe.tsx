"use client";
import React, { useState } from "react";
import Link from "next/link";
import GithubIcon from "../customComps/svgs/GithubIcon";
import LinkedInIcon from "../customComps/svgs/LinkedInIcon";

const AboutMe = () => {
  let [isGHHovered, setIsGHHovered] = useState(false);
  let [isLIHovered, setIsLIHovered] = useState(false);

  const links = [
    {
      icon: <GithubIcon color={isGHHovered ? "#FFFFFF" : "#AEAEAE"} />,
      iconSetState: setIsGHHovered,
      link: "https://github.com/ThinkCreatively",
    },
    {
      icon: <LinkedInIcon color={isLIHovered ? "#FFFFFF" : "#AEAEAE"} />,
      iconSetState: setIsLIHovered,
      link: "https://www.linkedin.com/in/jmoore99/",
    },
  ];

  const aboutMeBlurbs = [
    "I started my tech journey back in 2021 when I worked at a smoothie bar. While there I was introduced to a software engineer who was in between jobs and he opened my eyes to the world of software engineering and gave me some resources to learn how to code basic html, css, and javascript.",
    "After going through these entry level courses, I found myself enjoying the challenges that comes along with coding and sought to get a deeper understanding. In this pursuit I came across Hack Reactor, a bootcamp that got me off my feet and running in the tech world as a junior front end dev. Two years later, still seeking a deeper knowledge of software I enrolled into Western Governors University to get my BS in Computer Science.",
    "Nowadays I work on the backend while when I am not working I have shifted my focus on becoming more of a master on the front end as I enjoy the creativety that comes along web design. Outside of code you can find me at the nearest spicy chicken joint, playing my cats, or snowboarding in the winter time.",
  ];

  return (
    <div className="flex flex-col min-h-full fixed w-5/12 top-20 left-10">
      <div className="flex flex-col">
        <span className="text-5xl">James Moore</span>
        <span className="text-2xl mt-3">Experienced Software Engineer</span>
        <span className="text-l text-slate-300">
          I create refreshing and unique experiences on the web
        </span>
      </div>
      <div className="flex flex-col">
        {aboutMeBlurbs.map((blurb, i) => (
          <span key={i} className="text-l text-slate-400 mt-5">
            {blurb}
          </span>
        ))}
      </div>
      <div className="flex justify-start mt-5">
        {links.map((item, i) => (
          <div
            key={i}
            className="mr-5"
            onMouseEnter={() => {
              item.iconSetState(true);
            }}
            onMouseLeave={() => {
              item.iconSetState(false);
            }}
          >
            <Link href={item.link} target="_blank">
              {item.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
