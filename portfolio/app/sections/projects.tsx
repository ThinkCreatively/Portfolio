import React from "react";
import ProjectBlock from "../customComps/projectBlock";
import WorkExperiences from "./workExperience";
import AcademicExperience from "./academicExp";

const Projects = () => {
  return (
    <div className="flex flex-col overflow-auto h-auto lg:my-20 lg:h-screen">
      <span className="text-2xl">Experience</span>
      {WorkExperiences.map((job, i) => (
        <div className=" mt-5" key={i}>
          <div className="flex justify-between">
            <span className="text-xl text-slate-300">{job.workTitle}</span>
            <span className="text-xl text-slate-300">{job.timeWorked}</span>
          </div>
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
      {AcademicExperience.map((study, i) => (
        <div className=" mt-5" key={i}>
          <div className="flex justify-between">
            <span className="text-xl text-slate-300">{study.workTitle}</span>
            <span className="text-xl text-slate-300">{study.timeWorked}</span>
          </div>
          <div className="flex flex-col">
            {study.projects.map((acProject, j) => (
              <ProjectBlock
                key={j}
                title={acProject.title}
                dates={acProject.dates}
                desc={acProject.desc}
                feats={acProject.feats}
                tags={acProject.stackTags}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
