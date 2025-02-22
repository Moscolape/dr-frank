import NavLinks from "./navBar";
import { ReactNode } from "react";

type PageWrapperProps = {
    children: ReactNode;
  };
  
const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  return (
    <div className="w-full h-full">
      <NavLinks />
      <div className="w-[85%] m-auto mt-10">
        {children}
      </div>
    </div>
  );
}

export default PageWrapper;
