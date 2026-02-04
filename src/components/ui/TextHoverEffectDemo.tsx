import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {FlipWordsDemo} from "@/components/ui/FlipWordsDemo";
import { SparklesCore } from "@/components/ui/sparkles";
import {EncryptedTextDemoSecond} from "@/components/ui/EncryptedTextDemoSecond";

export function TextHoverEffectDemo() {
  return (
    <>
        <div className="h-[40rem] absolute flex items-center justify-center z-10">
          <TextHoverEffect text="MADDY"/>
        </div>
        <div className="h-[100vh] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
          
          <EncryptedTextDemoSecond/>
          <div className="w-[40rem] h-40 relative">
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4 " />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 " />
            <div className="absolute top-0 w-full z-15">
              <FlipWordsDemo/>
            </div>
            <SparklesCore
              background="transparent"
              minSize={0.4}
              maxSize={1}
              particleDensity={1200}
              className="w-full h-full"
              particleColor="#FFFFFF"
              />
            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            
          </div>
        </div>
        </> 
      );
}
