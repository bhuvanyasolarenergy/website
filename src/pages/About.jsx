import AboutHero from "@/components/about/AboutHero";
import AboutIntro from "@/components/about/AboutIntro";
import AboutLeadership from "@/components/about/AboutLeadership";
import AboutServices from "@/components/about/AboutServices";
import AboutStats from "@/components/about/AboutStats";
import AboutVisionMission from "@/components/about/AboutVisionMission";
import Testimonial from "@/components/home-two/Testimonial";
import Sponsor from "@/components/home-two/Sponsor";

const About = () => {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutStats />
      <AboutLeadership />
      <AboutVisionMission />
      <AboutServices />
      <Testimonial />
      <Sponsor />
    </>
  );
};

export default About;
