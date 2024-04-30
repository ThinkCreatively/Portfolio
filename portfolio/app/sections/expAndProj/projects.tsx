import React from "react";
import ProjectBlock from "../../customComps/projectBlock";

const Projects = () => {
  return (
    <div className="mt-5">
      <ProjectBlock
        title="Wordle"
        dates={["03/24", "05/24"]}
        desc="My version of the well-known word game Wordle. You have six attempts to guess the secret word. Yellow letters indicate the correct letter but in the wrong position, while green letters signify both the correct letter and its correct position."
        feats={["TBD", "TEST", "Will find out"]}
        tags={["React", "TailwindCSS"]}
        extraStyling="w-full"
      />
    </div>
  );
};

export default Projects;
