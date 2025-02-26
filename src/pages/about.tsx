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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-10 sm:px-6 lg:px-10">
        <div data-aos="fade-up">
          <h1 className="text-2xl font-bold font-Poppins">
            Early Life & Education
          </h1>
          <p className="my-5 text-sm sm:text-base">
            Dr. Frank Odinaka Igbojindu was born on January 30, 1985, in
            Ubahuagboba Ubahu Okija, located in the Ihiala Local Government Area
            of Anambra State, Nigeria. Growing up in a vibrant community, Frank
            was instilled with the values of hard work and community service
            from an early age. His passion for education led him to pursue a
            higher education path that would ultimately shape his future
            endeavours.
          </p>
          <p className="text-sm sm:text-base">
            Dr. Igbojindu attended the prestigious Nnamdi Azikiwe University,
            Awka, where he earned his Diploma, Bachelor of Science (BSc), Master
            of Science (MSc), and Doctor of Philosophy (PhD) in Accountancy. His
            academic journey was marked by excellence, dedication, and a
            commitment to advancing the field of accountancy.
          </p>
        </div>
        <div data-aos="fade-right" data-aos-delay="500">
          <h1 className="text-2xl font-bold font-Poppins">
            Career and Achievements
          </h1>
          <p className="my-5 text-sm sm:text-base">
            Dr. Igbojindu is a serial entrepreneur with a diverse portfolio of
            ventures. He has successfully founded and managed several businesses
            across different sectors, demonstrating his remarkable ability to
            identify opportunities and innovate solutions. His entrepreneurial
            spirit is complemented by his expertise in accountancy, making him a
            sought-after consultant in financial matters.
          </p>
          <p className="my-5 text-sm sm:text-base">
            In addition to his entrepreneurial pursuits, Dr. Igbojindu is a
            respected auditor and accountant. His professional acumen has earned
            him recognition in both local and national circles, where he is
            often called upon to lend his expertise to various organizations.
          </p>
          <p className="text-sm sm:text-base">
            As an educationist, Dr. Igbojindu is deeply committed to improving
            educational standards in his community. He actively engages in
            initiatives that promote learning and development, believing that
            education is a powerful tool for societal transformation.
          </p>
        </div>
        <div data-aos="fade-left">
          <h1 className="text-2xl font-bold font-Poppins">
            Philanthropy and Community Involvement
          </h1>
          <p className="my-5 text-sm sm:text-base">
            Dr. Igbojindu is a philanthropist par excellence, dedicating
            significant time and resources to uplift his community. His
            philanthropic efforts focus on education, healthcare, and youth
            empowerment. He has initiated various scholarship programs and
            community development projects aimed at providing opportunities for
            underprivileged individuals.
          </p>
        </div>
        <div data-aos="fade-down" data-aos-delay="500">
          <h1 className="text-2xl font-bold font-Poppins">
            Event Planning and Celebrity Recognition
          </h1>
          <p className="my-5 text-sm sm:text-base">
            In addition to his accomplishments in accountancy and
            entrepreneurship, Dr. Igbojindu has gained prominence as a celebrity
            event planner. His creative flair and attention to detail have made
            him a go-to professional for high profile events. His ability to
            curate unforgettable experiences has garnered him a loyal clientele
            and significant recognition in the events industry.
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="sm:px-10">
        <h1 className="text-2xl font-bold font-Poppins sm:text-center mt-10">
          Conclusion
        </h1>
        <p className="my-5 text-sm sm:text-base">
          Dr. Frank Odinaka Igbojindu is a multifaceted individual whose
          contributions to accountancy, entrepreneurship, education, and
          philanthropy have made a lasting impact on his community and beyond.
          His journey from a small-town native to a celebrated professional
          serves as an inspiration to many. With a commitment to excellence and
          a heart for service, Dr. Igbojindu continues to pave the way for
          future generations, embodying the spirit of leadership and innovation
          in all his endeavors.
        </p>
      </div>
    </PageWrapper>
  );
};

export default About;
