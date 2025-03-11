import Marquee from "react-fast-marquee";
import { Image1, Image10, Image11, Image12, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9 } from "../constants/assets";

const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8, Image9, Image10, Image11, Image12];


const MarqueeSlider = () => {
  return (
    <Marquee className="overflow-hidden w-full py-5 my-5">
      <div className="flex items-center">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="h-32 w-auto object-cover mr-5"
          />
        ))}
      </div>
    </Marquee>
  );
};

export default MarqueeSlider;