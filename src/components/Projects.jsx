// import { volunteeringImages } from "../../constants.jsx"

function Projects() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl">Ideas, Engineered.</p>
            </div>
            <div className="flex justify-between h-full gap-5">
                <div className="w-full bg-gray-400 rounded-lg">
                    <div  className="p-3 flex flex-col justify-between h-full">
                        <div className="font-syne font-bold">
                            <p className="mb-3 text-lg">Weather Application</p>
                            <p className="text-sm text-justify">A responsive weather application providing real-time weather updates for locations worldwide, featuring temperature conversion, location search, and light and dark themes.</p>
                        </div>
                        <div className="flex flex-col gap-5 ">
                            <div className="font-anonymous font-bold text-sm flex flex-wrap gap-1">
                                <div className="flex justify-center items-center whitespace-nowrap w-fit h-fit px-3 bg-amber-200">JavaScript</div>
                                <div className="flex justify-center items-center whitespace-nowrap w-fit h-fit px-3 bg-amber-200">tailwindCSS</div>
                                <div className="flex justify-center items-center whitespace-nowrap w-fit h-fit px-3 bg-amber-200">HTML</div>
                                <div className="flex justify-center items-center whitespace-nowrap w-fit h-fit px-3 bg-amber-200">API Integration</div>
                                <div className="flex justify-center items-center whitespace-nowrap w-fit h-fit px-3 bg-amber-200">Postman</div>
                                <div className="flex justify-center items-center whitespace-nowrap w-fit h-fit px-3 bg-amber-200">responsive web design</div>
                            </div>
                            <div className="flex gap-3 font-anonymous text-sm font-bold">
                                <u><a href="#">live demo</a></u>
                                <u><a href="#">github repository</a></u>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-gray-400 rounded-lg"></div>
                <div className="w-full bg-gray-400 rounded-lg"></div>
                <div className="w-full bg-gray-400 rounded-lg"></div>
            </div>
            <div className="flex justify-end py-2">
                <u><a className="font-anonymous text-sm" href="#"> Click here to see more</a></u>
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous">{`<Projects />`}</p>
            </div>
        </section>
    )
}

export default Projects