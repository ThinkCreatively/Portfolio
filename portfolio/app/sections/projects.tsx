import React from "react";
import ProjectBlock from "../customComps/projectBlock";

const Projects = () => {
  const experiences = [
    {
      title: "Dish Network",
      dates: ["2021", "2023"],
      desc: "Worked on an array of projects providing support on the full spectrum of the stack. Aided in code review while ensuring best code practices were being used within my own code and holding others to such standards",
      feats: [
        "Sling (React, Redux, Javascript, Node )",
        "Sling Rewards (Golang, Typescript, React, React Native )",
        "Onstream ( Typescript, Node, React, Mongo )",
        "Encoder ( C++, Python )",
      ],
      stackTags: [
        "Javascript",
        "Typescript",
        "Node",
        "React",
        "React Native",
        "Redux",
        "C++",
        "Golang",
        "Python",
      ],
    },
  ];

  return (
    <div className="flex flex-col overflow-auto">
      <span className="text-2xl">Experience</span>
      {experiences.map((item, i) => (
        <ProjectBlock
          key={i}
          title={item.title}
          dates={item.dates}
          desc={item.desc}
          feats={item.feats}
          tags={item.stackTags}
        />
      ))}
      <span className="text-2xl">Projects</span>
    </div>
  );
};

export default Projects;
