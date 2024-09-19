import { useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const handleSubmit = async(event) => {
    event.preventDefault();
    navigate('/landingpage',{replace:true});
  };

  return (
    <>
      <div className="h-screen bg-slate-400 font-serif">
        <div className="h-full flex justify-center items-center relative">
          <section className="">
            <h1 className="text-4xl text-center mb-5 font-extrabold">Signup Form</h1>
            <form
              className="flex flex-col w-fit bg-slate-500 p-10 *:p-2 rounded-lg"
              onSubmit={handleSubmit}
            >
              <label className="text-lg">Name</label>
              <input
                type="text"
                minLength={3}
                maxLength={20}
                required
                className="rounded-lg"
              />
              <label className="text-lg">Phone Number</label>
              <input
                type="tel"
                minLength={10}
                maxLength={10}
                required
                className="rounded-lg font-sans"
              />
              <button className="bg-slate-600 rounded-full mt-5">Submit</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default Signup;
