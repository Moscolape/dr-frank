import { motion } from "framer-motion";
import Image1 from "../assets/AKPOAZAA REAL ESTATES LOGO.png";
import Image2 from "../assets/BBC LOGO.png";
import Image3 from "../assets/AKPOAZAA EVENT PLANNERS LOGO.png";
import Image4 from "../assets/BBC ICON AWARD LOGO.png";
import Image5 from "../assets/AKPOAZAA OIL AND GAS LOGO.png";
import Image6 from "../assets/DE FRANK SOLUTIONS LOGO.png";
import Image7 from "../assets/Akpoazaa Foundation Logo.png";
import Image8 from "../assets/AKPOAZAA GROUP LOGO.png";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

const MarqueeSlider = () => {
  return (
    <div className="overflow-hidden w-full py-5 my-5">
      <motion.div
        className="flex flex-nowrap space-x-6"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="h-40 w-auto object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSlider;