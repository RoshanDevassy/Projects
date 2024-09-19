const Landingpage = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
      const  ch_val = document.getElementById('choose').value;
      const food_count = document.getElementById('food-count').value
        ch_val === '' || food_count === '' ? alert("Enter all Value") : alert("Submitted")
        console.log(ch_val)
        console.log(food_count)
    }

  return (
    <>
      <div className="h-screen bg-slate-300 font-serif">
        <section className="w-full">
          <div className="w-full flex justify-center">
            <form className="p-10 flex flex-col gap-2" onSubmit={handleSubmit}>
              {/* <div className="flex flex-col w-fit">
                <h1 className="font-bold text-2xl">Details</h1>
              </div> */}
              <div className="flex flex-col w-fit gap-1 *:p-2">
                <label>Choose Church</label>
                <select className="rounded-lg" id="choose">
                    <option value=""></option>
                  <option value="Good Shepherd Church">
                    Good Shepherd Church
                  </option>
                  <option value="">nil</option>
                </select>
              </div>
              <div className="flex flex-col w-fit gap-1 *:p-2">
                <label>Food Count</label>
                <input type="number" className="rounded-lg font-sans" id="food-count"/>
              </div>
              <div className="flex mt-5 justify-center">
                <button className="bg-slate-500 rounded-lg px-6 py-3">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default Landingpage;
