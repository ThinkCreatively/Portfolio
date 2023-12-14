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
        transition: "transform 0.2s cubic-bezier(.02,1.23,.79,1.08)",
      }}
      className="ease-in-out flex relative bg-red-950 h-32 w-32 rounded-full"
    />
  );
};

export default CursorCircle;
