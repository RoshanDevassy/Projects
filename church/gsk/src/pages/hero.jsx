import { useNavigate } from "react-router-dom";

const Hero = () => {

    const navigate = useNavigate();
  const handleSignup = ()=>{
    navigate('/signuppage',{replace:true})
  }

  return (
    <>
      <div className="bg-pink-200 h-screen bg-[url('./images/hero.jpg')] bg-contain bg-center bg-no-repeat">
        <div className="h-full w-full flex justify-center place-items-end">
            <button className="text-white bg-slate-600 px-6 py-3 rounded-lg" onClick={handleSignup}>
              Sign up
            </button>
        </div>
      </div>
      
    </>
  );
};

export default Hero;
