import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { CardSpotlight } from "./card-spotlight";

import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    link: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Define different spotlight backgrounds for each card
  const spotlightConfigs = [
    {
      animationSpeed: 8,
      colors: [
        [255, 70, 71],
        [255, 68, 86],
      ],
      dotSize: 3,
    },
    {
      animationSpeed: 5,
      colors: [
        [59, 130, 246],
        [139, 92, 246],
      ],
      dotSize: 3,
    },
    {
      animationSpeed: 3,
      colors: [
        [34, 197, 94],
        [16, 185, 129],
      ],
      dotSize: 3,
    },
    {
      animationSpeed: 7,
      colors: [
        [20, 184, 166],
        [59, 130, 246],
      ],
      dotSize: 3,
    },
    {
      animationSpeed: 6,
      colors: [
        [251, 191, 36],
        [230, 180, 94],
      ],
      dotSize: 3,
    },
    {
      animationSpeed: 4,
      colors: [
        [236, 72, 153],
        [168, 85, 247],
      ],
      dotSize: 3,
    },
  ];

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <CardSpotlight
            className="h-45 w-96 align-center"
            canvasRevealProps={spotlightConfigs[idx % spotlightConfigs.length]}
          >
            <p className="text-xl font-bold relative z-20 mt-2 text-white flex items-center justify-center h-full">
              {item.title}
            </p>
          </CardSpotlight>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
