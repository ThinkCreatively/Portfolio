import React from "react";
import TextPill from "../customComps/textPill";

const ProjectBlock = () => {
  return (
    <div className="flex flex-col rounded border-2 w-full my-5">
      <div className="flex justify-between px-2 pt-2 h-1/3">
        <span>TITLE</span>
        <span>DATE</span>
      </div>
      <span className="flex h-1/3 px-2 border-2 border-green-500">
        Text blurb describing the project
      </span>
      <div className="flex flex-wrap px-2">
        <TextPill text="Javascript" />
        <TextPill text="React" />
        <TextPill text="s" />
        <TextPill text="Something long" />
        <TextPill text="Something super long, it just keeps going and is longgg" />
        <TextPill text="Something super long, it just keeps going and is longgg" />
        <TextPill text="Something super long, it just keeps going and is longgg" />
      </div>
    </div>
  );
};

export default ProjectBlock;
