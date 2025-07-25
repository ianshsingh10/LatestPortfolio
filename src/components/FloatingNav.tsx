import React from "react";
import Image from "next/image";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Project Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Full Stack",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects?type=fullstack",
    },
    {
      title: "Collabs",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects?type=collabs",
    },
    {
      title: "Hackathons",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects?type=hackathons",
    },
    {
      title: "AI/ML",
      icon: (
        <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects?type=aiml",
    },
    {
      title: "Basic",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects?type=basic",
    },
    {
      title: "UI/UX",
      icon: (
        <Image
          src="https://assets.aceternity.com/logo-dark.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "/projects?type=uiux",
    },
  ];
  return (
    <div className="fixed z-10 bottom-5 flex items-center justify-center w-full">
      <FloatingDock
        items={links}
      />
    </div>
  );
}
