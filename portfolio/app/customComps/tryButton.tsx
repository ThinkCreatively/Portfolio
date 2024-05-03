import React from "react";

interface TryButtonProps {
  text: string;
}

const TryButton = ({ text }: TryButtonProps) => {
  return (
    <div className="flex h-auto py-1 px-2 my-2 mx-1 rounded-full text-white-400 bg-blue-800">
      <span>{text}</span>
    </div>
  );
};

export default TryButton;
