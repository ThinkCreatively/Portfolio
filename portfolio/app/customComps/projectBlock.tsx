import React from "react";
import TextPill from "../customComps/textPill";

interface ProjectBlockProps {
  title: string;
  dates: string[];
  desc: string;
  tags: string[];
  feats?: string[];
  extraStyling?: string;
}

const ProjectBlock = ({
  title,
  dates,
  desc,
  tags,
  feats,
  extraStyling,
}: ProjectBlockProps) => {
  return (
    <div
      className={`flex flex-col px-2 pt-2 rounded my-5 shadow-md w-full ${extraStyling}`}
      style={{ backgroundColor: "rgba(49, 46, 129, 0.5)" }}
    >
      <div className="flex justify-between h-1/3">
        <span className="text-xl">{title}</span>
        <span className="text-l">
          {dates[0]} - {dates[1]}
        </span>
      </div>
      <span className="flex h-1/3">{desc}</span>
      <div>
        {feats
          ? feats.map((feat, j) => (
              <div key={j}>
                <span className="text-slate-400">{`- ${feat}`}</span>
                <br />
              </div>
            ))
          : ""}
      </div>
      <div className="flex flex-wrap">
        {tags.map((tag, i) => (
          <TextPill key={i} text={tag} />
        ))}
      </div>
    </div>
  );
};

export default ProjectBlock;
