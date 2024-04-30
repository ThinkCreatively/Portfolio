import React from "react";
import ProjectBlock from "../../customComps/projectBlock";

const Projects = () => {
  return (
    <div className="mt-5">
      <ProjectBlock
        title="Test"
        dates={["03/24", "05/24"]}
        desc="My own rendition of the popular word game Wordle"
        feats={["TBD", "TEST", "Will find out"]}
        tags={["React", "TailwindCSS"]}
      />
    </div>
  );
};

export default Projects;
