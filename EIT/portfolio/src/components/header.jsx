import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";

const Header = () => {
  return (
    <>
      <div className="h-fit min-w-min  flex flex-col flex-grow flex-shrink p-3 bg-gradient-to-t from-slate-500 to-black">
        <h1 className="text-center p-1 text-2xl font-bold font-serif text-white 
        animate-bounce duration-100 ease-in-out">
          Port-Folio
        </h1>
        <div className="flex flex-row items-center flex-wrap">
          <Navbar />
        </div>
      </div>
      <Outlet />
      <Footer/>
    </>
  );
};

export default Header;
