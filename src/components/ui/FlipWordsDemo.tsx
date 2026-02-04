import React from "react";
import { FlipWords } from "../ui/flip-words";

export function FlipWordsDemo() {
  const words = ["Java Developer", "Full Stack Developer", "Backend Developer", "Frontend Developer"];

  return (
    <div className=" flex justify-center items-center px-4 ">
      <div className="w-full md:text-3xl text-xl lg:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 text-center">
        I&apos;m
        <FlipWords words={words} />
      </div>
    </div>
  );
}
