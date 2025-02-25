import { Link } from "react-router-dom";
import PageWrapper from "../components/pageWrapper";
import myImage from "../assets/_DEN6684-Photoroom.png";
import myImage2 from "../assets/_DEN6699-Photoroom.png";
import MarqueeSlider from "../components/marqueeSlider";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const Home = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <>
      <PageWrapper>
        {/* Hero Section */}
        <div className="w-full flex flex-wrap justify-between items-center sm:px-6 py-10 font-Montserrat">
          {/* Left Content */}
          <div className="w-full sm:w-1/2">
            <p
              className="text-4xl md:text-6xl text-yellow-800 font-bold"
              data-aos="fade-up"
            >
              Celebrity Event Planner
            </p>
            <p
              className="text-lg md:text-xl my-5 md:my-10 md:w-[90%]"
              data-aos="fade-right"
            >
              If you're looking for a trustworthy businessman who understands
              the importance of an event well planned and executed, then search
              no more.
            </p>
            <p className="text-lg md:text-xl my-5" data-aos="fade-right">
              My names are{" "}
              <b>DR. FRANK ODINAKA IGBOJINDU (Bsc., Msc., Ph.D in Acc.)</b>
            </p>
            <Link to="/contact">
              <button
                className="bg-yellow-800 transition duration-500 hover:bg-yellow-900 text-white px-6 py-3 rounded-md"
                data-aos="fade-up"
              >
                Plan with Me!
              </button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              src={myImage}
              className="w-full max-w-xs md:max-w-sm object-cover"
              alt="accountant"
              data-aos="fade-down"
            />
          </div>
        </div>

        {/* About Section */}
        <div className="mt-20 text-center">
          <p
            className="text-4xl md:text-6xl font-bold font-Poppins"
            data-aos="flip-down"
          >
            Who Am I and What Do I Do?
          </p>

          <div className="mt-10 flex flex-wrap justify-center items-center gap-10">
            {/* Left Image */}
            <img
              src={myImage2}
              alt="phd"
              className="w-full max-w-xs md:max-w-sm object-cover"
              data-aos="flip-right"
            />

            {/* Right Content */}
            <div className="w-full md:w-3/5 text-left">
              <p
                className="text-lg md:text-xl my-5 md:my-10"
                data-aos="fade-up"
              >
                I am the <span className="text-orange-600 font-bold">CEO</span>{" "}
                of{" "}
                <span className="text-blue-900 font-bold">AKPOAZAA GROUP</span>,
                a conglomerate company with subsidiaries in various industries.
              </p>
              <p
                className="text-lg md:text-xl my-5 md:my-10"
                data-aos="fade-down"
              >
                Over the past 10 years, my team and I have built a business that
                prioritizes human capital development and aims to leave a
                lasting legacy.
              </p>
            </div>
          </div>
        </div>
        {/* Marquee Slider */}
        <MarqueeSlider />
      </PageWrapper>
    </>
  );
};

export default Home;
