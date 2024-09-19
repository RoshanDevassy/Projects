import piggy from "../assets/piggybank.svg";
import house from "../assets/house-outlined.png";
import giftbox from "../assets/giftbox-monocolor.png";
import savings from "../assets/savings.svg";

const Budget_output = (props) => {
  return (
    <>
      <section className="font-serif text-lg 2xl:text-xl 3xl:text-2xl">
        {/* Budget Output Header */}
        <section className=" p-1 xsm:p-5 flex gap-5 justify-center md:justify-start items-center border-black border-b flex-wrap sm:flex-nowrap flex-grow">
          <div className="">
            <img src={piggy} className="h-8 w-8 sm:h-12 sm:w-12" />
          </div>
          <div className="">
            <h2 className="text-orange-600 font-semibold text-center md:text-left lg:text-lg 2xl:text-xl 3xl:text-2xl">
              My <span className="font-sans">50/30/20</span> Monthly Budget
            </h2>
          </div>
        </section>
        {/* Budget Output Images */}
        <section className="">
          <div className="pt-3 font-sans text-lg mb-5">
            <p className=" text-center 2xl:text-xl 3xl:text-2xl">
              Your Monthly Income {Math.ceil(props.monthly_income).toFixed(2)}
              &#8377;
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:justify-around p-2 flex-wrap">
            <div className="flex flex-col justify-center gap-3">
              <img src={house} className="h-16 w-16 self-center" />
              <p className=" text-center">
                Needs{" "}
                <span className="font-sans">
                  50% &#8377;{Math.ceil(props.fifty).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3 py-10 md:py-0">
              <img src={giftbox} className="h-16 w-16 self-center" />
              <p className=" text-center">
                Wants{" "}
                <span className="font-sans">
                  30% &#8377;{Math.ceil(props.thirty).toFixed(2)}
                </span>
              </p>
            </div>
            <div className="flex flex-col justify-center gap-3">
              <img src={savings} className="h-16 w-16 self-center" />
              <p className=" text-center">
                Savings{" "}
                <span className="font-sans">
                  20% &#8377;{Math.ceil(props.twenty).toFixed(2)}
                </span>
              </p>
            </div>
          </div>
        </section>
        {/* Budget Output Content */}
        <section>
          <div className="flex justify-center pt-5 pb-2">
            <p className="text-slate-500 text-center">
              Values are based on a monthly budget
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-wrap text-justify">
            <p>Congratulations, you're off to a great start!</p>
            <p>
              Your <span className="font-sans">50/30/20</span> budget is a
              simple rule of thumb that can be a helpful way to get started with
              budgeting.
            </p>
            <p>
              Take the next step and personalize your budget based on your
              priorities and financial situation.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Budget_output;
