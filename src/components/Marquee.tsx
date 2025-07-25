"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { BackgroundGradient } from "@/components/ui/background-gradient";

import EVClub1 from "@/data/images/EVClub1.png";
import calculator from "@/data/images/Calculator.png";
import TicTacToe from "@/data/images/TicTacToe.png";
import HealthEase from "@/data/images/HealthEase.png";
import BuildSmart from "@/data/images/BuildSmart.png";
import Attendance from "@/data/images/Attendance.png";
import DevInferno from "@/data/images/DevInferno.png";
import IEEEHackathon from "@/data/images/IEEEHackathon.png";
import Dominos from "@/data/images/Dominos.png";
import JobPortal from "@/data/images/JobPortal.png";
import Hp from "@/data/images/HP.png";

export function ThreeDMarqueeDemo() {
  const images = [
    EVClub1,
    HealthEase,
    calculator,
    BuildSmart,
    Attendance,
    Dominos,
    DevInferno,
    TicTacToe,
    TicTacToe,
    Hp,
    IEEEHackathon,
    HealthEase,
    calculator,
    Hp,
    BuildSmart,
    JobPortal,
    EVClub1,
    DevInferno,
    Attendance,
    IEEEHackathon,
    Dominos,
    JobPortal,
    TicTacToe,
    HealthEase,
    IEEEHackathon,
    Hp,
    BuildSmart,
    Attendance,
    calculator,
    DevInferno,
    EVClub1,
    Dominos,
    JobPortal,
  ];
  return (
    <div className="relative mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <a href="/projects" className="mb-10 z-10 absolute top-[50%] left-[50%] translate-[-50%] flex items-center justify-between">
        <BackgroundGradient className="rounded-[22px]  p-1 bg-white dark:bg-zinc-900">
          
          <p className="text-neutral-300 p-5 relative z-20 text-sm">
            PROJECTS
          </p>
        </BackgroundGradient>
        
      </a>
      <ThreeDMarquee images={images} />
    </div>
  );
}
