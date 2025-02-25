import { useEffect } from "react";
import initializeAOS from "../utils/aos-init";
import PageWrapper from "../components/pageWrapper";
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  useEffect(() => {
    initializeAOS();
  }, []);

  return (
    <PageWrapper>
      <section className="w-full flex flex-col items-center">
        {/* Header */}
        <div
          className="mb-10 w-full max-w-[95%]"
          data-aos="fade-up"
        >
          <p className="text-[#0F1B33] font-bold text-2xl sm:text-4xl text-center">
            Reach Out
          </p>
          <div className="bg-blue-custom w-28 h-1 mx-auto my-2"></div>
          <p
            className="text-gray-700 text-sm sm:text-base sm:text-center"
            data-aos="zoom-in-down"
          >
            If you're looking for a way to contact me for any discussion of
            potential business deals, feel free to reach out using any of the
            options below.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7 w-full max-w-[90%]">
          {/* Phone Contact */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <FaPhoneAlt className="text-blue-500 text-5xl sm:text-6xl mb-2" />
            <p className="text-lg font-bold text-[#0F1B33] my-2">
              +234 703 055 5581
            </p>
            <p className="text-lg font-bold text-[#0F1B33] my-2">
              +234 803 838 1545
            </p>
            <p className="text-gray-700 flex items-center gap-2">
              <FaWhatsapp className="text-green-500 text-xl" />
              <b>WhatsApp</b> - DM Anytime
            </p>
            <p className="text-gray-700">
              <b>Phone Call</b> - Mon-Sun (4AM - 10PM)
            </p>
          </div>

          {/* Location Contact */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            data-aos="fade-right"
            data-aos-delay="700"
          >
            <FaMapMarkerAlt className="text-red-500 text-5xl sm:text-6xl mb-2" />
            <p className="text-lg font-bold text-[#0F1B33] my-2">
              Anambra State, Nigeria
            </p>
            <p className="text-gray-700">
              Suite B6 Millenium Plaza By Total Filling Station, Near Aroma
              Junction, Awka.
            </p>
          </div>

          {/* Email Contact */}
          <div
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
            data-aos="fade-right"
            data-aos-delay="1000"
          >
            <AiOutlineMail className="text-blue-500 text-5xl sm:text-6xl mb-2" />
            <p className="text-lg font-bold text-[#0F1B33] my-2">
              Frankakpoazaa@gmail.com
            </p>
            <p className="text-gray-700">Send me an email anytime.</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}