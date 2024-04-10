import Image from "next/image";
import { LandingVideo } from "@/components/video";
import { FeatureCards } from "./ui/feature";
import { PricingCards } from "./ui/pricing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-8 m-4">
        <h1 className="text-6xl font-bold text-center">
          Welcome to Safe Roofs Dev
        </h1>
        <p className="text-xl text-center text-muted-foreground">
          Your one stop shop for all things roofing
        </p>
        <LandingVideo />
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 m-4">
        <FeatureCards />
      </div>
      <div className="flex flex-col items-center justify-center space-y-8 m-4">
        <PricingCards />
      </div>
      
      
    </main>
  );
}
