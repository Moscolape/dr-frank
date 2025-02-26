import Footer from "./footer";
import NavLinks from "./navBar";
import { ReactNode } from "react";

type PageWrapperProps = {
  children: ReactNode;
};

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full h-full custom-scrollbar-example">
      <NavLinks />
      <div className="w-[90%] m-auto mt-32">{children}</div>
      <Footer />
    </div>
  );
};

export default PageWrapper;
