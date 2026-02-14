"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export function CardSpotlightDemo() {
  return (
    <div className="flex flex-wrap gap-3 h-[100vh] items-center justify-center mx-auto py-10 max-w-7xl p-2">
        <HoverEffect items={projects} />
    </div>
  );
}

export const projects = [
  {
    title: "Full Stack",
    link: "/projects?type=fullstack",
  },
  {
    title: "Hackathons",
    link: "/projects?type=hackathons",
  },
  {
    title: "AI/ML",
    link: "/projects?type=aiml",
  },
  {
    title: "Basic",
    link: "/projects?type=basic",
  },
];

