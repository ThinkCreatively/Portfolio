"use client";
import React, { useState } from "react";
import Link from "next/link";
import GithubIcon from "../customComps/svgs/GithubIcon";
import LinkedInIcon from "../customComps/svgs/LinkedInIcon";
import ResumeIcon from "../customComps/svgs/ResumeIcon";

interface AboutMeProps {
  screenWidth: number;
}

const AboutMe = ({ screenWidth }: AboutMeProps) => {
  let [isGHHovered, setIsGHHovered] = useState(false);
  let [isLIHovered, setIsLIHovered] = useState(false);
  let [isRHovered, setIsRHovered] = useState(false);

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
    {
      icon: <ResumeIcon color={isRHovered ? "#FFFFFF" : "#AEAEAE"} />,
      iconSetState: setIsRHovered,
      link: "https://docs.google.com/document/d/e/2PACX-1vQ4lI8YRrQ1ZJXihZ4Pm5SnnrOIED25DuYp-alUKBYCh7V474A1lsxk2zyoaC2pgc88Yz0YVqRdPPvu/pub",
    },
  ];

  const aboutMeBlurbs = [
    "I started my tech journey back in 2021 when I worked at a smoothie bar. While there I was introduced to a software engineer who was in between jobs and he opened my eyes to the world of software engineering and gave me some resources to learn how to code basic HTML, CSS, and JavaScript.",
    "After going through these entry-level courses, I found myself enjoying the challenges that come along with coding and sought to get a deeper understanding. In this pursuit, I came across Hack Reactor, a boot camp that got me off my feet and running in the tech world as a junior front-end dev. Two years later, still seeking a deeper knowledge of software I enrolled in Western Governors University to get my BS in Computer Science.",
    "When I am not working I have shifted my focus on becoming more of a master on the front end as I enjoy the creativity that comes along with web design. Outside of code, you can find me at the nearest spicy chicken joint, playing with my cats, or snowboarding in the wintertime.",
  ];

  return (
    <div className="flex flex-col my-10">
      <div className="flex flex-col">
        <span className="text-5xl">James Moore</span>
        <span className="text-2xl mt-3">Experienced Software Engineer</span>
        <span className="text-l text-slate-300">
          I create refreshing and unique experiences on the web
        </span>
        {screenWidth > 770 ? null : (
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
        )}
      </div>
      <div className="flex flex-col">
        {aboutMeBlurbs.map((blurb, i) => (
          <span key={i} className="text-l text-slate-400 mt-5">
            {blurb}
          </span>
        ))}
      </div>
      {screenWidth > 770 ? (
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
      ) : null}
    </div>
  );
};

export default AboutMe;
