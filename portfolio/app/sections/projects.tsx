import React from "react";
import ProjectBlock from "../customComps/projectBlock";

const Projects = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-evenly text-l text-slate-300">
        <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯ Experience ⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
        <div>⎯⎯⎯⎯⎯⎯⎯⎯⎯ Projects ⎯⎯⎯⎯⎯⎯⎯⎯⎯</div>
      </div>
      <ProjectBlock />
      <ProjectBlock />
      <ProjectBlock />
    </div>
  );
};

export default Projects;
