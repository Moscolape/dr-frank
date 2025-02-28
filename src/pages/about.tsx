import PageWrapper from "../components/pageWrapper";
import { useEffect, useState } from "react";
import initializeAOS from "../utils/aos-init";
import { motion } from "framer-motion";
import {
  Slider1a,
  Slider1b,
  Slider1c,
  Slider1d,
  Slider1e,
  Slider1f,
  Slider1g,
  Slider1h,
  Slider1i,
  Slider1j,
  Slider2a,
  Slider2b,
  Slider2c,
  Slider2d,
  Slider2e,
  Slider2f,
  Slider2g,
  Slider2h,
  Slider2i,
  Slider2j,
  Slider2k,
  Slider2l,
  Slider2m,
  Slider2n,
  Slider2o,
  Slider2p,
  Slider2q,
  Slider2r,
  Slider3a,
  Slider3b,
  Slider3c,
  Slider3d,
  Slider3e,
  Slider3f,
  Slider3g,
  Slider3h,
  Slider3i,
  Slider3j,
  Slider3k,
  Slider3l,
  Slider3m,
  Slider4a,
  Slider4b,
  Slider4c,
  Slider4d,
  Slider4e,
  Slider4f,
} from "../constants/assets";

const About = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    initializeAOS();

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    const sections = document.querySelectorAll("section");
    // const navLinks = document.querySelectorAll("aside nav ul li a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const ImageSlider = ({ images }: { images: string[] }) => {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }, [images]);

    return (
      <div className="relative w-full h-96 mt-5 overflow-hidden rounded-lg shadow-lg">
        {images.map((src: string, i: number) => (
          <motion.img
            key={i}
            src={src}
            alt="Section Image"
            className="absolute w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: i === index ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </div>
    );
  };

  const slider1 = [
    Slider1a,
    Slider1b,
    Slider1c,
    Slider1d,
    Slider1e,
    Slider1f,
    Slider1g,
    Slider1h,
    Slider1i,
    Slider1j,
  ];
  const slider2 = [
    Slider2a,
    Slider2b,
    Slider2c,
    Slider2d,
    Slider2e,
    Slider2f,
    Slider2g,
    Slider2h,
    Slider2i,
    Slider2j,
    Slider2k,
    Slider2l,
    Slider2m,
    Slider2n,
    Slider2o,
    Slider2p,
    Slider2q,
    Slider2r,
  ];
  const slider3 = [
    Slider3a,
    Slider3b,
    Slider3c,
    Slider3d,
    Slider3e,
    Slider3f,
    Slider3g,
    Slider3h,
    Slider3i,
    Slider3j,
    Slider3k,
    Slider3l,
    Slider3m,
  ];
  const slider4 = [Slider4a, Slider4b, Slider4c, Slider4d, Slider4e, Slider4f];

  return (
    <PageWrapper>
      {/* Fixed Side Navigation */}
      <aside className="fixed left-0 top-1/6 z-50 hidden sm:block">
        <nav className="bg-white p-4 rounded-r-lg shadow-lg">
          <ul className="space-y-4">
            {[
              { id: "early-life", label: "Early Life & Education" },
              { id: "career", label: "Career & Achievements" },
              { id: "philanthropy", label: "Philanthropy" },
              { id: "event-planning", label: "Event Planning" },
              { id: "conclusion", label: "Conclusion" },
            ].map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block text-gray-700 hover:text-blue-600 transition-all duration-300 ${
                    activeSection === id ? "text-blue-600 font-bold" : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="mt-10">
        <h1
          className={`text-4xl font-bold text-center font-Montserrat`}
          data-aos="flip-down"
        >
          Biography
        </h1>
      </div>

      <div className="flex flex-col mt-10 sm:px-6 lg:px-10 sm:w-3/5 m-auto">
        <section data-aos="fade-up" id="early-life">
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
          <ImageSlider images={slider1} />
        </section>

        <section data-aos="fade-up" data-aos-delay="500" id="career">
          <h1 className="text-2xl font-bold font-Poppins mt-10">
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
          <ImageSlider images={slider2} />
        </section>

        <section data-aos="fade-up" id="philanthropy">
          <h1 className="text-2xl font-bold font-Poppins mt-10">
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
          <ImageSlider images={slider3} />
        </section>

        <section data-aos="fade-up" data-aos-delay="500" id="event-planning">
          <h1 className="text-2xl font-bold font-Poppins mt-10">
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
          <ImageSlider images={slider4} />
        </section>

        <section data-aos="fade-up" id="conclusion">
          <h1 className="text-2xl font-bold font-Poppins mt-10">Conclusion</h1>
          <p className="my-5 text-sm sm:text-base">
            Dr. Frank Odinaka Igbojindu is a multifaceted individual whose
            contributions to accountancy, entrepreneurship, education, and
            philanthropy have made a lasting impact on his community and beyond.
            His journey from a small-town native to a celebrated professional
            serves as an inspiration to many. With a commitment to excellence
            and a heart for service, Dr. Igbojindu continues to pave the way for
            future generations, embodying the spirit of leadership and
            innovation in all his endeavors.
          </p>
        </section>
      </div>
    </PageWrapper>
  );
};

export default About;
