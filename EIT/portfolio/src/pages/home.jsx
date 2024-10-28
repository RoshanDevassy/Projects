import { Link } from "react-router-dom";
import './home.css';


const Home = () => {
  return (
    <>
      <div className="h-screen bg-slate-300">
        <div className="h-full p-1 flex flex-col justify-around items-center">
          <p className="text-4xl font-semibold p-1 font-serif text-animate relative">
          Welcome to My Portfolio
          </p>
          <p className="text-4xl font-bold font-serif text-animate relative">
            Full-Stack Web Developer Python
          </p>
          <Link to="/about">
            <button className="py-3 px-6 bg-slate-700 rounded-md left-80 text-white font-serif mb-10 hover:bg-slate-500 hover:text-black hover:font-semibold">
              About Me
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
