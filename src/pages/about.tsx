import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const About = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="mt-20">
        <p
          className={`text-6xl font-bold text-center font-Poppins`}
          data-aos="flip-down"
        >
          About Me
        </p>
      </div>
    </PageWrapper>
  );
};

export default About;
