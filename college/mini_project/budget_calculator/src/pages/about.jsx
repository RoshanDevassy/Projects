const About = () => {
  return (
    <>
      <div className=" sm:h-full md:h-screen min-w-[185px] bg-slate-200 p-4 bg-no-repeat bg-contain bg-center bg-blend-lighten font-semibold">
        <div className="h-full flex items-center">
          <section className="mt-5 text-justify">
            <h1 className="text-xl font-bold">About</h1>
            <p className="before:p-5 text-lg mt-3">
              The Budget Calculator is an interactive, online experience to help
              you create a monthly budget. The analysis in this experience is
              based on the information provided by you. This information does
              not serve, either directly or indirectly, as legal, financial or
              tax advice and you should always consult a qualified professional
              legal, financial and/or tax advisor when making decisions relative
              to your individual tax situation.
            </p>
            <p className="mt-3 text-lg">
              IMPORTANT: The illustrations or other information generated by the
              calculators are hypothetical in nature, do not reflect actual
              investment results, and are not guarantees of future results.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
