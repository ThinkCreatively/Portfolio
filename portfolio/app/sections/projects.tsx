import React from "react";
import ProjectBlock from "../customComps/projectBlock";
import WorkExperiences from "./workExperience";

const Projects = () => {
  return (
    <div className="flex flex-col overflow-auto h-auto lg:my-20 lg:h-screen">
      <span className="text-2xl">Experience</span>
      {WorkExperiences.map((job, i) => (
        <div className=" mt-5" key={i}>
          <span className="text-xl text-slate-300">{job.workTitle}</span>
          <div className="flex flex-col">
            {job.projects.map((project, j) => (
              <ProjectBlock
                key={j}
                title={project.title}
                dates={project.dates}
                desc={project.desc}
                feats={project.feats}
                tags={project.stackTags}
              />
            ))}
          </div>
        </div>
      ))}

      {/* TODO: Pprojects when I have more to put on */}
      {/* <span className="text-2xl">Projects</span> */}
    </div>
  );
};

export default Projects;
