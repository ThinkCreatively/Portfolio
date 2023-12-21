import React from "react";
import TextPill from "../customComps/textPill";

interface ProjectBlockProps {
  title: string;
  dates: string[];
  desc: string;
  tags: string[];
}

const ProjectBlock = ({ title, dates, desc, tags }: ProjectBlockProps) => {
  return (
    <div
      className="flex flex-col rounded my-5 shadow-md"
      style={{ backgroundColor: "rgba(49, 46, 129, 0.5)" }}
    >
      <div className="flex justify-between px-2 pt-2 h-1/3">
        <span>{title}</span>
        <span>
          {dates[0]} - {dates[1]}
        </span>
      </div>
      <span className="flex h-1/3 px-2">{desc}</span>
      <div className="flex flex-wrap px-2">
        {tags.map((tag, i) => (
          <TextPill key={i} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBlock;
