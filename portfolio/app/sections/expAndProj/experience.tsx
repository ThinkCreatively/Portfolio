import React from "react";
import ProjectBlock from "../../customComps/projectBlock";
import WorkExperiences from "../workExperience";

const Experience = () => {
  return (
    <div>
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
    </div>
  );
};

export default Experience;
