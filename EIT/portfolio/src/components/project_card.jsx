const Project_card = () => {
  return (
    <>
      <div className="w-fit" onClick={()=>alert("It's the current Project")}>
        <a className="hover:cursor-pointer inline">
          <div className="h-fit w-fit p-4 bg-slate-600 rounded-lg hover:bg-opacity-50 text-white hover:text-black">
            <div className="font-semibold">Port-Folio Website</div>
          </div>
        </a>
      </div>
    </>
  );
};

export default Project_card;
