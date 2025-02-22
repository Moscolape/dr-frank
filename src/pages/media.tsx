import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";

const Media = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <div className="mb-10 text-center w-full max-w-[95%]" data-aos="fade-up">
        <p className="text-[#0F1B33] font-bold text-2xl sm:text-4xl">
          Welcome to my media coverage page
        </p>
        <div className="bg-blue-custom w-28 h-1 mx-auto my-2"></div>
        <p
          className="text-gray-700 text-sm sm:text-base w-4/5 m-auto"
          data-aos="zoom-in-down"
        >
          Over the years, i've engaged myself in several conferences, hosted different educational programs, made a lot of collaborations with business partners on events, amongst others. Below are some of the video coverage of these occassional events;
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div>
          <video src="../assets/Scholarship_scheme.mp4"></video>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Media;
