"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { Suspense } from "react";
import { CardBody, CardContainer, DivItem, ParaItem, AnchorItem } from "@/components/ui/3d-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { CardSpotlightDemo } from "@/components/Projects";
import {
  basicCards,
  aimlCards,
  fullstackCards,
  hackathonCards,
} from "@/components/Project";

const cardsMap: Record<string, typeof basicCards> = {
  fullstack: fullstackCards,
  basic: basicCards,
  aiml: aimlCards,
  hackathons: hackathonCards,
};

function CardsDisplay({ cards }: { cards: typeof basicCards }) {
  return (
    <div className="flex flex-wrap gap-12 justify-center p-[3vmin]">
      {cards.map((card, idx) => (
        <CardContainer className="inter-var" key={idx}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <DivItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </DivItem>
            <ParaItem
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </ParaItem>
            <DivItem translateZ="100" className="w-full mt-4">
              <Image
                src={card.image}
                height={1000}
                width={1000}
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </DivItem>

              <DivItem
                translateZ={100}
                className="flex flex-row items-center mt-10 w-full"
              >
                <AnimatedTooltip items={card.skills} />
              </DivItem>

            <div className="flex justify-between items-center mt-5">
              {card.tryLabel &&<AnchorItem
                translateZ={20}
                href={card.tryLink}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {card.tryLabel} →
              </AnchorItem>}
              <AnchorItem
                translateZ={20}
                href={card.sourceCodeLink}
                target="_blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Source Code
              </AnchorItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

function ProjectsContent() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  if (!type || !cardsMap[type]) {
    return <CardSpotlightDemo />;
  }

  return <CardsDisplay cards={cardsMap[type]} />;
}

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}
