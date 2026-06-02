import { ExperienceSection } from "./experience-section";
import { FinalCtaSection } from "./final-cta-section";
import { HeroSection } from "./hero-section";
import { ImpactSection } from "./impact-section";
import { InstitutionsSection } from "./institutions-section";
import { ProblemSection } from "./problem-section";
import { RevelationSection } from "./revelation-section";
import { ScrollRevealSection } from "./scroll-reveal-section";
import { Web3Section } from "./web3-section";

export function LandingPage() {
  return (
    <main className="landing-page bg-background text-foreground">
      <HeroSection />
      <ScrollRevealSection>
        <ProblemSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <RevelationSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <ExperienceSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <Web3Section />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <InstitutionsSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <ImpactSection />
      </ScrollRevealSection>
      <ScrollRevealSection>
        <FinalCtaSection />
      </ScrollRevealSection>
    </main>
  );
}
