import { AnimatedModalDemo } from "@/components/ani";
import LandingPage from "@/components/LandingPage";
import { MarqueeDemo } from "@/components/magicmarquee";
import { DockDemo } from "@/components/nav";
import { AnimatedPinDemo } from "@/components/pin";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-gray-600">
      <LandingPage />
      <MarqueeDemo />
      
      <DockDemo />
      <AnimatedPinDemo />
    </main>
  );
}
