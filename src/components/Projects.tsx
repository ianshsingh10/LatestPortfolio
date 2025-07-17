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
    title: "Frontend",
    link: "/projects?type=frontend",
  },
  {
    title: "Backend",
    link: "/projects?type=backend",
  },
  {
    title: "UI/UX",
    link: "/projects?type=uiux",
  },
  {
    title: "Full Stack",
    link: "/projects?type=fullstack",
  },
  {
    title: "Amazon",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    link: "https://microsoft.com",
  },
];

