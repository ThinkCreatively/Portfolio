import { ReactNode } from "react";

interface CustomeSectionProps {
  children: ReactNode;
  extra?: string;
}

const CustomSection = ({ children, extra }: CustomeSectionProps) => {
  return (
    <div
      className={`flex flex-col relative overflow-auto justify-center mr-5 items-top w-1/2 self-start ${
        extra ? extra : ""
      } lg:min-h-screen lg:ml-5`}
    >
      {children}
    </div>
  );
};

export default CustomSection;
