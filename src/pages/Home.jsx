import AboutUs from "@/components/home-one/AboutUs";
import AboutUsTwo from "@/components/home-one/AboutUsTwo";
import Blogs from "@/components/home-one/Blogs";
import Contact from "@/components/home-one/Contact";
import Features from "@/components/home-one/Features";
import Footer from "@/components/home-one/Footer";
import Header from "@/components/home-one/Header";
import Hero from "@/components/home-one/Hero";
import Portfolio from "@/components/home-one/Portfolio";
import Question from "@/components/home-one/Question";
import Service from "@/components/home-one/Service";
import Sponsor from "@/components/home-one/Sponsor";
import Stats from "@/components/home-one/Stats";
import Testimonial from "@/components/home-one/Testimonial";

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

        {/* <!-- Contact Section --> */}
        <Contact />

        {/* <!--  Latest PortFolio --> */}
        <Portfolio />

        {/* <!-- Sponsor Section --> */}
        <Sponsor />

        {/* <!-- Question Section --> */}
        <Question />

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
