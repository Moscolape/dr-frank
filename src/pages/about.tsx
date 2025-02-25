import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const About = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="mt-10">
        <h1
          className={`text-4xl font-bold text-center font-Montserrat`}
          data-aos="flip-down"
        >
          Biography
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <h1>Early Life & Education</h1>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </PageWrapper>
  );
};

export default About;
