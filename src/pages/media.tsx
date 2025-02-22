import PageWrapper from "../components/pageWrapper";
import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import ReactPlayer from "react-player";

const Media = () => {
  useEffect(() => {
    initializeAOS();
  }, []);

  const videoFiles = [
    {
      src: "/Scholarship_scheme.mp4",
      videoText: "Collaboration with De Imperial Philantropic Family.",
    },
    {
      src: "/Interviewed By NTA.mp4",
      videoText: "Interviewed By Arise News TV and NTA.",
    },
    {
      src: "/Best Brain Contest.mp4",
      videoText:
        "After a Successful Examination Context in an Anambra girls' secondary school.",
    },
  ];

  return (
    <PageWrapper>
      <div className="mb-10 text-center w-full max-w-[95%]" data-aos="fade-up">
        <p className="text-[#0F1B33] font-bold text-2xl sm:text-4xl">
          Welcome to my media coverage page
        </p>
        <div className="bg-blue-custom w-28 h-1 mx-auto my-2"></div>
        <p
          className="text-gray-700 text-sm sm:text-base sm:w-4/5 m-auto"
          data-aos="zoom-in-down"
        >
          Over the years, I've engaged myself in several conferences, hosted
          different educational programs, made a lot of collaborations with
          business partners on events, amongst others. Below are some of the
          video coverage of these occasional events;
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {videoFiles.map((video, index) => {
          return (
            <div
              key={index}
              className="mb-10 m-auto w-full max-w-md"
              data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
            >
              <div className="relative w-full aspect-video">
                <ReactPlayer
                  url={video.src}
                  width="100%"
                  height="100%"
                  controls
                />
              </div>
              <span className="text-center block my-4">{video.videoText}</span>
            </div>
          );
        })}
      </div>
    </PageWrapper>
  );
};

export default Media;
