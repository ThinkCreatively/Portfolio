import React from "react";
import ProjectBlock from "../../customComps/projectBlock";

const Projects = () => {
  return (
    <div className="mt-5">
      <ProjectBlock
        title="Wordle"
        dates={["03/24", "05/24"]}
        desc="My own rendition of the popular word game Wordle. Given six tries, try to guess the word. Yellow letters mean right letter wrong position and green letters mean right letter right position."
        feats={["TBD", "TEST", "Will find out"]}
        tags={["React", "TailwindCSS"]}
        extraStyling="w-full"
      />
    </div>
  );
};

export default Projects;
