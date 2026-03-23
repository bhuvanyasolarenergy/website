import AboutUs from "@/components/home-one/AboutUs";
import AboutUsTwo from "@/components/home-one/AboutUsTwo";
import Blogs from "@/components/home-one/Blogs";
import Contact from "@/components/home-one/Contact";
import Features from "@/components/home-one/Features";
import Footer from "@/components/home-one/Footer";
import Header from "@/components/home-one/Header";
import Hero from "@/components/home-one/Hero";
import Newsletter from "@/components/home-one/Newsletter";
import Portfolio from "@/components/home-one/Portfolio";
import Question from "@/components/home-one/Question";
import Service from "@/components/home-one/Service";
import Sponsor from "@/components/home-one/Sponsor";
import Stats from "@/components/home-one/Stats";
import Testimonial from "@/components/home-one/Testimonial";
import Video from "@/components/home-one/Video";

const Home = () => {
  return (
    <div>
      <div>
        <Header />
        {/* <!-- Hero --> */}
        <Hero />
        {/* <!-- Service --> */}
        <Service />

        {/* <!-- About US--> */}
        <AboutUs />

        {/* <!-- About US Bottom--> */}
        <AboutUsTwo />

        {/* <!-- Features --> */}
        <Features />

        {/* <!-- Video Section --> */}
        <Video classes="srex-section" />

        {/* <!-- Contact Section --> */}
        <Contact />

        {/* <!--  Latest PortFolio --> */}
        <Portfolio />

        {/* <!-- Sponsor Section --> */}
        <Sponsor />

        {/* <!-- Question Section --> */}
        <Question />

        {/* <!-- NewsLetter Section --> */}
        <Newsletter />

        {/* <!-- Stats Section --> */}
        <Stats />

        {/* <!-- Testimonial Section--> */}
        <Testimonial />

        {/* <!-- Blog Section--> */}
        <Blogs />

        {/* <!-- Footer--> */}
        <Footer />
      </div>
    </div>
  );
};

export default Home;
