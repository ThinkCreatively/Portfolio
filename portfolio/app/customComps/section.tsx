import { ReactNode } from "react";

const CustomSection = (props: { children: ReactNode }) => {
  return (
    <div
      className="
        flex
        flex-col
        relative
        border-2
        overflow-auto
        justify-center
        ml-5
        min-h-screen
        max-h-screen
        items-top
        w-1/2
        self-start
        border-green-500
      "
    >
      {props.children}
    </div>
  );
};

export default CustomSection;
