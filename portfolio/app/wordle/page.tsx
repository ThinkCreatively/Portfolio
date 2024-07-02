"use client";
import React from "react";
// import Link from "next/link";
import TryButton from "../customComps/tryButton";
import Guesses from "./guesses";
import KeyBoard from "./keyboard";

const Wordle = () => {
  return (
    <div className="flex flex-col justify-center content-between min-h-screen px-6 bg-indigo-950 overflow-hidden">
      <div className="flex flex-col border-2 min-h-screen justify-center items-center">
        <div className="self-start">
          <TryButton text="Home" route="/" />
        </div>
        <Guesses />
        <KeyBoard />
      </div>
    </div>
  );
};

export default Wordle;
