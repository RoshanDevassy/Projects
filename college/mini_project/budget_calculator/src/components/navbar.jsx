import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="h-fit min-w-min flex flex-grow justify-center bg-slate-400">
        <nav className="bg-slate-400 p-1 3xl:p-4 flex flex-grow justify-center flex-wrap">
          <ul className="flex flex-col xsm:flex-row xsm:gap-5 items-center gap-1 text-black font-semibold flex-wrap justify-center 2xl:pb-1">
            <li className="hover:cursor-pointer">
              <Link
                to="/home"
                className="font-bold text-lg md:text-xl xl:text-2xl 2xl:text-[28px] 3xl:text-5xl"
              >
                Home
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to="/about"
                className="font-bold text-lg md:text-xl xl:text-2xl xl:px-3 2xl:text-[28px] 2xl:px-5 3xl:text-5xl"
              >
                About
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link
                to="/app"
                className="font-bold text-lg md:text-xl xl:text-2xl 2xl:text-[28px] 3xl:text-5xl"
              >
                App
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
