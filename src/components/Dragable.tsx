import React from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import Image from "next/image";

import DevHackCertificate from "@/data/certificates/DevHackCertificate.jpg";
import FundamentalsOfAMLLCerti from "@/data/certificates/FundamentalsOfAMLLCerti.png";
import ProgramminginJAVACerti from "@/data/certificates/ProgramminginJAVACerti.png";
import PythonEssentialCerti from "@/data/certificates/PythonEssentialCerti.png";
import RoboSoccerCerti from "@/data/certificates/RoboSoccerCerti.png";
import RoboRallyCerti from "@/data/certificates/RoboRallyCerti.png";
import ROBOXCerti from "@/data/certificates/ROBOXCerti.png";

export function DraggableCardDemo() {
  const items = [
    {
      title: "1st Runner Up in Dev Inferno Hackathon",
      image: DevHackCertificate,
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "The Narrator",
      image: FundamentalsOfAMLLCerti,
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Iceland",
      image: ProgramminginJAVACerti,
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "Japan",
      image: PythonEssentialCerti,
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Norway",
      image: RoboSoccerCerti,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "New Zealand",
      image: RoboRallyCerti,
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "Canada",
      image: ROBOXCerti,
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];
  return (
    <DraggableCardContainer className="relative flex min-h-screen w-full items-center justify-center overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        If its your first day at Fight Club, you have to fight.
      </p>
      {items.map((item) => (
        <DraggableCardBody key={item.title} className={item.className}>
          <Image
            src={item.image}
            alt={item.title}
            width={100}
            height={100}
            className="pointer-events-none relative z-10 h-80 w-120 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
  );
}
