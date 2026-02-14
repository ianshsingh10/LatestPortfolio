import { ThreeDMarqueeDemo } from "@/components/Marquee";
import { TimelineDemo } from "@/components/Journey";
import { DraggableCardDemo } from "@/components/Dragable";
import { SparklesPreview } from "@/components/landing";
import { HoverBorderGradientDemo } from "@/components/Skills";

export default function Home() {
  return (
    <>
      <SparklesPreview />
      <div id="journey" className="pt-[10vmin]">
        <TimelineDemo />
      </div>
      <div id="skills" className="pt-[15vmin]">
        <HoverBorderGradientDemo />
      </div>
      <ThreeDMarqueeDemo />
      <DraggableCardDemo />
    </>
  );
}
