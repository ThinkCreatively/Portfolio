"use client";
import React from "react";
import Link from "next/link";
import TryButton from "../customComps/tryButton";

const Wordle = () => {
  return (
    <div className="flex flex-col justify-center content-between min-h-screen px-6 bg-indigo-950 overflow-hidden">
      <div className="flex flex-col border-2 min-h-screen justify-center items-center">
        <div className="self-start">
          <TryButton text="Home" route="/" />
        </div>
        <div className="border-2 w-96 h-96 mb-5">Test</div>
        <div className="flex flex-col border-2 w-1/2 h-60 items-center">
          <div>Top Row</div>
          <div>Middle Row</div>
          <div>Bottom Row</div>
        </div>
      </div>
    </div>
  );
};

export default Wordle;
