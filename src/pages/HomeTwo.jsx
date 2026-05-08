import LandingBess from "@/components/landing/LandingBess";
import LandingCase from "@/components/landing/LandingCase";
import LandingCta from "@/components/landing/LandingCta";
import LandingFaq from "@/components/landing/LandingFaq";
import LandingFlow from "@/components/landing/LandingFlow";
import LandingHero from "@/components/landing/LandingHero";
import LandingMarket from "@/components/landing/LandingMarket";
import LandingMetrics from "@/components/landing/LandingMetrics";
import LandingProcess from "@/components/landing/LandingProcess";
import LandingProjects from "@/components/landing/LandingProjects";
import LandingServices from "@/components/landing/LandingServices";
import LandingWhy from "@/components/landing/LandingWhy";

const HomeTwo = () => (
  <div className="page-home">
    <LandingHero />
    <LandingMetrics />
    <LandingFlow />
    <LandingServices />
    <LandingBess />
    <LandingMarket />
    <LandingProcess />
    <LandingProjects />
    <LandingCase />
    <LandingWhy />
    <LandingFaq />
    <LandingCta />
  </div>
);

export default HomeTwo;
