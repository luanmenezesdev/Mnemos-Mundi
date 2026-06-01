import { ExperienceSection } from "./experience-section";
import { FinalCtaSection } from "./final-cta-section";
import { HeroSection } from "./hero-section";
import { ImpactSection } from "./impact-section";
import { InstitutionsSection } from "./institutions-section";
import { ProblemSection } from "./problem-section";
import { RevelationSection } from "./revelation-section";
import { Web3Section } from "./web3-section";

export function LandingPage() {
  return (
    <main className="landing-page bg-background text-foreground">
      <HeroSection />
      <ProblemSection />
      <RevelationSection />
      <ExperienceSection />
      <Web3Section />
      <InstitutionsSection />
      <ImpactSection />
      <FinalCtaSection />
    </main>
  );
}
