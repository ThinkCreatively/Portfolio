import React from "react";
import ProjectBlock from "../customComps/projectBlock";

const Projects = () => {
  const experiences = [
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Nice description about number of projects and what I did on each one",
      stackTags: ["Javascript", "Typescript", "React", "C++", "Golang"],
    },
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Nice description about number of projects and what I did on each one",
      stackTags: ["Javascript", "Typescript", "React", "C++", "Golang"],
    },
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Nice description about number of projects and what I did on each one",
      stackTags: ["Javascript", "Typescript", "React", "C++", "Golang"],
    },
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Nice description about number of projects and what I did on each one",
      stackTags: ["Javascript", "Typescript", "React", "C++", "Golang"],
    },
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Nice description about number of projects and what I did on each one",
      stackTags: ["Javascript", "Typescript", "React", "C++", "Golang"],
    },
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Nice description about number of projects and what I did on each one",
      stackTags: ["Javascript", "Typescript", "React", "C++", "Golang"],
    },
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Nice description about number of projects and what I did on each one",
      stackTags: ["Javascript", "Typescript", "React", "C++", "Golang"],
    },
  ];

  return (
    <div className="flex flex-col overflow-auto">
      <div className="flex justify-evenly text-l text-slate-300">
        <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯ Experience ⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
        <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯ Projects ⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
      </div>
      {experiences.map((item, i) => (
        <ProjectBlock
          key={i}
          title={item.title}
          dates={item.dates}
          desc={item.desc}
          tags={item.stackTags}
        />
      ))}
    </div>
  );
};

export default Projects;
