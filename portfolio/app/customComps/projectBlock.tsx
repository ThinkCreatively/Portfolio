import React from "react";
import Image from "next/image";

const ProjectBlock = () => {
  return (
    <div className="flex rounded border-2 h-32 w-10/12 hover:shadow-lg hover:shadow-white mt-10">
      <div className="relative h-full w-40 mr-5">
        <Image
          src=""
          alt="project image"
          fill
          className="rounded border-2 border-red-500"
        />
      </div>
      <span className="relative h-full w-full border-2 border-green-500">
        Text blurb describing the project
      </span>
    </div>
  );
};

export default ProjectBlock;
