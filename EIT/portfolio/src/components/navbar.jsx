import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      
      <nav className="h-fit w-fit p-1 font-serif flex flex-grow flex-shrink justify-center ">
        <ul className="list-none flex flex-row gap-5 items-center text-lg font-semibold *:bg-slate-200 *:p-1 *:rounded-md *:hover:cursor-pointer flex-wrap">
          <Link to="/home" className="hover:bg-slate-300 focus:bg-slate-400 active:text-white">
            <li>Home</li>
          </Link>
          <Link to="/about" className="hover:bg-slate-300 focus:bg-slate-400 active:text-white">
            <li>About</li>
          </Link>
          <Link to="/projects" className="hover:bg-slate-300 focus:bg-slate-400 active:text-white">
            <li>Projects</li>
          </Link>
          <Link to="/contact" className="hover:bg-slate-300 focus:bg-slate-400 active:text-white">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      
    </>
  );
};

export default Navbar;
