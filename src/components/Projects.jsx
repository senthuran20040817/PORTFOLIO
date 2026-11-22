import { projects } from "../../constants.jsx"

function Projects() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3 overflow-hidden">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl text-name">Ideas, Engineered.</p>
            </div>
            <div className="sm:grid sm:grid-cols-4 sm:h-full gap-5 overflow-y-auto scrollbar-none flex flex-col pb-2">
                {
                    projects.map((project) => {
                        return (
                            <div className="w-full flex-1  sm:flex-0 bg-gray-50 rounded-sm shadow-md border border-gray-400 h-full">
                                <div className="p-3 flex flex-col justify-between h-full">
                                    <div className="font-syne font-bold">
                                        <p className="mb-3 text-lg text-project-name">{project.topic}</p>
                                        <p className="text-xs text-gray-500 text-justify h-40 sm:h-auto">{project.desc}</p>
                                    </div>
                                    <div className="flex flex-col gap-5 ">
                                        <div className="font-anonymous font-bold text-sm flex flex-wrap gap-1">
                                            {
                                                project.skills.map((skill) => {
                                                    return (
                                                        <div className="flex justify-center items-center whitespace-nowrap w-fit h-fit px-3 bg-project-skill-bg text-project-skill-text border"><p>{skill}</p></div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="flex gap-3 font-anonymous text-sm font-bold">
                                            <u className="text-project-link-text "><a href={project.demo} target="_blank">live demo</a></u>
                                            <u className="text-project-link-text"><a href={project.repo} target="_blank">github repository</a></u>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }



            </div>
            <div className="justify-end py-2 hidden sm:flex">
                <u className="font-anonymous text-sm text-see-more"><a href="#"> Click here to see more</a></u>
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<Projects />`}</p>
            </div>
        </section>
    )
}

export default Projects