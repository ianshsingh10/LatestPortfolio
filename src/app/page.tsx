import { ThreeDMarqueeDemo } from "@/components/Marquee";
import { TimelineDemo } from "@/components/Journey";
import { DraggableCardDemo } from "@/components/Dragable";
import {SparklesPreview} from "@/components/landing";
import {HoverBorderGradientDemo} from "@/components/Skills";

export default function Home() {
  return (
    <>
      <SparklesPreview/>
      <TimelineDemo />
      <HoverBorderGradientDemo/>
      <ThreeDMarqueeDemo />
      <DraggableCardDemo />
    </>
  );
}

