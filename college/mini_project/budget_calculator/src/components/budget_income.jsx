import { useState } from "react";
import Budget_input from "../components/budget_input";
import "./budget_income.css";

const Budget_income = () => {
  const [timely_income, Settimely_income] = useState("");
  const [income, setIncome] = useState(Number(0));

  const calc_weekly = (income * 52) / 12;
  const weekly_to_monthly = calc_weekly;

  const monthly = income;

  const calc_yearly = income / 12;
  const yearly_to_monthly = calc_yearly;

  const monthly_income =
    timely_income === "Weekly"
      ? weekly_to_monthly
      : timely_income === "Monthly"
      ? monthly
      : timely_income === "Yearly"
      ? yearly_to_monthly
      : income;

  const calc_fifty = monthly_income * (50 / 100);
  const fifty = calc_fifty;

  const calc_thirty = monthly_income * (30 / 100);
  const thirty = calc_thirty;

  const calc_twenty = monthly_income * (20 / 100);
  const twenty = calc_twenty;

  return (
    <>
      <section className="font-serif lg:text-lg">
        <div className="mb-3">
          <h2 className="text-orange-600 text-lg lg:text-2xl font-semibold ">
            Enter your income to get your
            <span className="font-sans"> 50/30/20</span> budget
          </h2>
        </div>
        <div className="flex flex-col gap-5 px-2 3xl:px-5">
          <label className="text-center xsm:text-left">How often do you receive your income?</label>
          <div className="3xl:flex justify-center">
            <div className="flex items-center gap-2 3xl:w-[75%]">
              <select
                className="h-10 flex-grow flex-shrink rounded-lg p-1 text-ellipsis"
                id="timely-income"
                onChange={(e) => Settimely_income(e.target.value)}
              >
                <option value=""></option>
                <option value="Weekly">Weekly</option>
                {/*  <option value="Every Other Week">Every Other Week</option>
              <option value="Twice a Month">Twice a Month</option> */}
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <span className="help">
                &#x2753;
                <div className="help-cont bg-red-100 lg:text-lg 3xl:text-xl">
                  "If other payment period, convert to monthly and input to
                  income box below. leave this blank"
                </div>
              </span>
            </div>
          </div>

          <label className="text-center xsm:text-left">What is your after-tax income?</label>
          <div className="3xl:flex justify-center">
          <div className="flex items-center gap-2 3xl:w-[75%]">
            <p className="font-semibold text-3xl">&#8377;</p>
            <input
              type="number"
              id="after-income"
              onChange={(e) => {
                const income_int = e.target.value;
                setIncome(Number(income_int));
              }}
              className="h-10 w-full min-w-16 rounded-lg p-1 font-sans no-arrows text-ellipsis "
            />
            <span className="help">
              &#x2753;
              <span className="help-cont bg-red-100">
                "Your after-tax income is the amount in your paycheck after
                taxes and other deductions are taken out. If you save for
                retirement by having money deducted from your paycheck, you can
                include those savings in your budget below - just remember to
                add the amount to your income."
              </span>
            </span>
          </div>
          </div>
        </div>
      </section>
      <Budget_input
        monthly_income={monthly_income}
        fifty={fifty}
        thirty={thirty}
        twenty={twenty}
      />
    </>
  );
};

export default Budget_income;
