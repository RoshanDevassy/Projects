import './contact.css';


const Contact = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Submitted");
    }

  return (
    <>
      <section className="h-screen font-serif bg-slate-400 flex justify-center items-center ">
        <div className="w-fit p-10 bg-slate-500 rounded-xl animate-form">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
          <h1 className="text-center mb-1 text-2xl font-semibold">Contact Form</h1>
          <label className="text-lg">Full Name </label>
          <input type="text" className="rounded-md p-1" required />
          <label className="text-lg">E-mail</label>
          <input type="email" className="rounded-md p-1" required />
          <div className="flex justify-center">
            <button type="submit" className="bg-slate-700 rounded-full w-fit px-6 py-3 text-white hover:bg-slate-400 hover:text-black">
              Submit
            </button>
          </div>
        </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
