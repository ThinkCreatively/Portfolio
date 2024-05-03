import React from "react";

interface TextPillProps {
  text: string;
}

const TextPill = ({ text }: TextPillProps) => {
  return (
    <span
      className="flex h-auto py-1 px-2 my-2 mx-1 rounded-full text-emerald-400"
      style={{ backgroundColor: "rgba(20, 84, 45, .5)" }}
    >
      {text}
    </span>
  );
};

export default TextPill;
