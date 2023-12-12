import { ReactNode } from "react";

const CustomSection = (props: { children: ReactNode }) => {
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
      "
    >
      {props.children}
    </div>
  );
};

export default CustomSection;
