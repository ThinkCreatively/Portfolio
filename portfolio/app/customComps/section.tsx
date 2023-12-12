import { ReactNode } from "react";

interface CustomeSectionProps {
  children: ReactNode;
  extra?: string;
}

const CustomSection = ({ children, extra }: CustomeSectionProps) => {
  return (
    <div
      className={`flex flex-col relative overflow-auto justify-center ml-5 min-h-screen max-h-screen items-top w-1/2 self-start border-2 border-green-500 ${
        extra ? extra : ""
      }`}
    >
      {children}
    </div>
  );
};

export default CustomSection;
