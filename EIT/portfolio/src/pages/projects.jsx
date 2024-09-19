import Project_card from "../components/project_card";

const Projects = ()=>{
    return(
        <>
            <div className="h-screen p-1 bg-slate-300 ">
                <h1 className="text-2xl font-bold mb-5">Projects</h1>
                <Project_card/>
            </div>
        </>
    )
}

export default Projects;