import React from "react";
import TextPill from "../customComps/textPill";

const ProjectBlock = () => {
  const testDataTags = [
    "Javascript",
    "React",
    "S",
    "SSS",
    "Something Long",
    "Something super long, it just keeps going and is longgggg",
    "Something super long, it just keeps going and is longgggg",
    "SSS",
    "Javascript",
    "React",
    "Something super long, it just keeps going and is longgggg",
  ];
  return (
    <div className="flex flex-col rounded border-2 my-5">
      <div className="flex justify-between px-2 pt-2 h-1/3">
        <span>TITLE</span>
        <span>Example - date</span>
      </div>
      <span className="flex h-1/3 px-2 border-2 border-green-500">
        Text blurb describing the project
      </span>
      <div className="flex flex-wrap px-2">
        {testDataTags.map((item, i) => (
          <TextPill key={i} text={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBlock;
