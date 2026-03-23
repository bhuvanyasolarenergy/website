import BeplOverview from "@/components/about/BeplOverview";
import Features from "@/components/home-one/Features";
import Video from "@/components/home-one/Video";
import AboutUs from "@/components/home-two/AboutUs";
import Newsletter from "@/components/home-two/Newsletter";
import Sponsor from "@/components/home-two/Sponsor";
import Testimonial from "@/components/home-two/Testimonial";
import SectionTop from "@/components/shared/SectionTop";

const About = () => {
  return (
    <>
      <SectionTop title="About Us" />
      <div className="pt-120">
        <BeplOverview />
      </div>
      <div className="pt-120">
        <AboutUs />
      </div>
      <Features />
      <Video />
      <Testimonial />
      <Sponsor />
      <Newsletter />
    </>
  );
};

export default About;
