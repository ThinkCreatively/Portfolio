import React from "react";

interface cursorCircleProps {
  locX: number;
  locY: number;
}

const CursorCircle = ({ locX, locY }: cursorCircleProps) => {
  return (
    <div
      style={{
        transform: `translate3d(${locX}px,${locY}px,0px)`,
        transition: "transform 0.2s cubic-bezier(.02, 1.23, .79, 1.08)",
        background: "radial-gradient(circle 350px, rgba(255,255,255,0.1), rgba(0,0,0,0) 100%)",
      }}
      className="ease-in-out absolute h-[700px] w-[700px] rounded-full"
    />
  );
};

export default CursorCircle;
