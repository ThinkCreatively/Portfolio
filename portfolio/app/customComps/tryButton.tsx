import React from "react";
import Link from "next/link";

interface TryButtonProps {
  route: string;
}

const TryButton = ({ route }: TryButtonProps) => {
  return (
    <div
      className="flex h-auto py-1 px-2 my-2 mx-1 rounded-full text-indigo-100"
      style={{ backgroundColor: "rgb(99, 102, 241, .5)" }}
      onClick={() => {}}
    >
      <Link href={`/${route.toLowerCase()}`}>Try Here</Link>
    </div>
  );
};

export default TryButton;
