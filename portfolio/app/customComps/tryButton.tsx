import React from "react";
import Link from "next/link";

interface TryButtonProps {
  route: string;
  text: string;
}

const TryButton = ({ text, route }: TryButtonProps) => {
  return (
    <div
      className="flex h-auto py-1 px-2 my-2 mx-1 rounded-full text-indigo-100 w-fit"
      style={{ backgroundColor: "rgb(99, 102, 241, .5)" }}
      onClick={() => {}}
    >
      <Link href={`/${route.toLowerCase()}`}>{text}</Link>
    </div>
  );
};

export default TryButton;
