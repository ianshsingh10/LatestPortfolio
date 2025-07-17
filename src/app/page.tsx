import { ThreeDMarqueeDemo } from "@/components/Marquee";
import { TimelineDemo } from "@/components/Journey";
import { DraggableCardDemo } from "@/components/Dragable";
import { FileUploadDemo } from "@/components/FileUpload";

export default function Home() {
  return (
    <>
      <TimelineDemo />
      <ThreeDMarqueeDemo />
      <DraggableCardDemo />
      <FileUploadDemo />
    </>
  );
}

