"use client";

import { useSearchParams } from "next/navigation";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { CardSpotlightDemo } from "@/components/Projects";
import {
  backendCards,
  frontendCards,
  uiuxCards,
  fullstackCards,
} from "@/components/Project";

const cardsMap: Record<string, typeof backendCards> = {
  backend: backendCards,
  frontend: frontendCards,
  uiux: uiuxCards,
  fullstack: fullstackCards,
};

function CardsDisplay({ cards }: { cards: typeof backendCards }) {
  return (
    <div className="flex flex-wrap gap-12 justify-center mt-[3vmin]">
      {cards.map((card, idx) => (
        <CardContainer className="inter-var" key={idx}>
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
              {card.title}
            </CardItem>
            <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.image}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              <CardItem
                translateZ={20}
                as="a"
                href={card.tryLink}
                target="__blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                {card.tryLabel} →
              </CardItem>
              <CardItem
                translateZ={20}
                as="a"
                href={card.sourceCodeLink}
                target="_blank"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Source Code
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  if (!type) {
    // Show spotlight overview as default
    return <CardSpotlightDemo />;
  }

  if (cardsMap[type]) {
    return <CardsDisplay cards={cardsMap[type]} />;
  }

  // fallback: show spotlight if type is invalid
  return <CardSpotlightDemo />;
}