import AboutUs from "@/components/home-two/AboutUs";
import Blogs from "@/components/home-two/Blogs";
import Footer from "@/components/home-two/Footer";
import Header from "@/components/home-two/Header";
import Hero from "@/components/home-two/Hero";
import Portfolio from "@/components/home-two/Portfolio";
import Question from "@/components/home-two/Question";
import ServiceOne from "@/components/home-two/ServiceOne";
import Services from "@/components/home-two/Services";
import Sponsor from "@/components/home-two/Sponsor";
import Support from "@/components/home-two/Support";
import Testimonial from "@/components/home-two/Testimonial";

const HomeTwo = () => {
  return (
    <>
      <Header />
      {/* <!-- Header End --> */}

      {/* <!-- Hero Section Start --> */}
      <Hero />
      {/* <!-- Hero Section End --> */}

      {/* <!-- Sponsor Section Start --> */}
      <Sponsor />
      {/* <!-- Sponsor Section End --> */}

      {/* <!-- About Us Section Start --> */}
      <AboutUs />
      {/* <!-- About Us Section End --> */}

      {/* <!-- Service Start --> */}
      <ServiceOne />
      {/* <!-- Service End --> */}

      {/* <!-- Latest Portfolio Start --> */}
      <Portfolio />
      {/* <!-- Latest Portfolio End --> */}

      {/* <!-- Testimonial Section Start --> */}
      <Testimonial />
      {/* <!-- Testimonial Section End --> */}

      {/* <!-- Services Section Start --> */}
      <Services />
      {/* <!-- Services Section End --> */}

      {/* <!-- Question Section Start --> */}
      <Question />
      {/* <!-- Question Section End --> */}

      {/* <!--  Support Section Start  -->  */}
      <Support />
      {/* <!--  Support Section End  -->   */}

      {/* <!-- Blog Section Start--> */}
      <Blogs />
      {/* <!-- Blog Section End--> */}

      {/* <!-- Footer Start--> */}
      <Footer />
    </>
  );
};

export default HomeTwo;
