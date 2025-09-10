import { projects } from "../../utils";
function Projects(){

    return (
        <section id="projects" className="px-2 space-y-4 mb-[50px] py-5 md:relative ">
            <h3 className="font-bold text-lg text-center lg:text-4xl bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent mb-12 ">My projects</h3>

            <div className={`grid grid-cols-1 place-items-center md:grid md:mx-6 md:grid-cols-2 md:place-items-center lg:flex lg:justify-center lg:items-center md:gap-4 space-y-4 md:space-y-0 px-2  `}>
                {
                    projects.map((project,index)=>(
                        <div key={index} className={`bg-slate-900  h-[120px] w-[90%] max-w-sm md:w-[350px] lg:h-[200px] rounded hover:scale-105 break-inside-avoid group relative overflow-hidden cursor-pointer `}>
                            <img src={project.image} alt={project.name} className="h-full w-full transition-transform duration-500 ease-in-out group-hover:scale-105 " />

                            <div className="absolute inset-0 p-4 flex items-end opacity-0 bg-black/20 transform-opacity duration-300 group-hover:opacity-100">
                                <p className="text-sm text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300  ">{project.name}</p>
                            </div>
                        </div>
                    ))
                    }
            </div>
        </section>
    )
}
export default Projects;