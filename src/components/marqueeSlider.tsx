import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Image1, Image10, Image11, Image12, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from "../constants/assets";


const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12];


const MarqueeSlider = () => {
  const [speed, setSpeed] = useState(40);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSpeed = () => {
      const screenWidth = window.innerWidth;
      setSpeed(screenWidth < 768 ? 60 : 40);
    };

    updateSpeed();
    window.addEventListener("resize", updateSpeed);
    return () => window.removeEventListener("resize", updateSpeed);
  }, []);

  return (
    <div ref={containerRef} className="overflow-hidden w-full py-5 my-5">
      <motion.div
        className="flex space-x-6 w-max"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          ease: "linear",
          duration: speed,
          repeat: Infinity,
        }}
      >
        {[...images, ...images].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="h-44 w-auto object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MarqueeSlider;