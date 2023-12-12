import { ReactNode } from "react";

const CustomSection = (props: { children: ReactNode; className?: string }) => {
  return (
    <div
      className="
        flex
        flex-col
        relative
        overflow-auto
        justify-center
        ml-5
        min-h-screen
        max-h-screen
        items-top
        w-1/2
        self-start
        border-2
        border-green-500
      "
    >
      {props.children}
    </div>
  );
};

export default CustomSection;
