import { LandingPage } from "@/components/home/LandingPage";
import { CallToAction } from "@/components/cta/CallToAction";

export default function Home() {
  return (
    <div className="min-h-screen">
      <LandingPage />
      <CallToAction />
    </div>
  );
}
