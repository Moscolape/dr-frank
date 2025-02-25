import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import FooterImage from "../assets/_DEN6645.jpg";

const socialMediaLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/franklyn.akpoazaa/",
  },
  {
    icon: <FaInstagram />,
    href: "https://www.instagram.com/officialakpoazaa?igsh=MWJoNjZ1a2UyZmo0Zw==",
  },
  {
    icon: <FaWhatsapp />,
    href: "https://wa.me/+2347030555581",
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-[#071125] text-white text-body1 mt-20">
      <div className="flex justify-between items-center py-4 sm:px-5 mo:px-5 mx-5">
        {/* Social Media Icons */}
        <div className="text-h6 sm:w-[10%] mo:w-1/5 flex justify-between">
          {socialMediaLinks.map((link, index) => (
            <Link to={link.href} key={index} target="_blank" rel="noopener noreferrer" className="mr-2 text-2xl">
              {link.icon}
            </Link>
          ))}
        </div>
        {/* Profile Image */}
        <img src={FooterImage} alt="Moscolian" className="rounded-full w-20 h-20" />
      </div>
      {/* Footer Text */}
      <div className="w-full m-auto py-6 text-center border-t-2 border-white">
        <p className="sm:px-0 mo:px-7 sm:text-body2 mo:text-sub">
          Akpoazaa Group &copy; 2025 | All rights reserved.
        </p>
      </div>
    </div>
  );
}
