// import { volunteeringImages } from "../../constants.jsx"

function Certifications() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3 h-full ">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl">Milestones That Shape My Journey.</p>
            </div>
            <div className="grid grid-cols-2 h-full gap-5">
                <div className="bg-gray-400 rounded-lg flex p-2 gap-2">
                    <div className="border border-red-400 border-dotted w-1/3 shrink-0 rounded-3xl">
                        <img src="" alt="" />
                    </div>
                    <div className="grow flex flex-col">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl " >Learn JavaScript</p>
                            <p className="font-anonymous font-bold">Scrimba - 2026</p>
                        </div>
                        <p className="grow text-justify flex items-center font-syne text-sm">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        <u className="text-end font-anonymous font-bold" ><a href="#">know more</a></u>
                    </div>
                </div>
                <div className="bg-gray-400 rounded-lg flex p-2 gap-2">
                    <div className="border border-red-400 border-dotted w-1/3 shrink-0 rounded-3xl">
                        <img src="" alt="" />
                    </div>
                    <div className="border border-red-400 border-dotted grow flex flex-col">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl " >Learn JavaScript</p>
                            <p className="font-anonymous font-bold">Scrimba - 2026</p>
                        </div>
                        <p className="grow text-justify flex items-center font-syne text-sm">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        <u className="text-end font-anonymous font-bold" ><a href="#">know more</a></u>
                    </div>
                </div>
                <div className="bg-gray-400 rounded-lg flex p-2 gap-2">
                    <div className="border border-red-400 border-dotted w-1/3 shrink-0 rounded-3xl">
                        <img src="" alt="" />
                    </div>
                    <div className="border border-red-400 border-dotted grow flex flex-col">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl " >Learn JavaScript</p>
                            <p className="font-anonymous font-bold">Scrimba - 2026</p>
                        </div>
                        <p className="grow text-justify flex items-center font-syne text-sm">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        <u className="text-end font-anonymous font-bold" ><a href="#">know more</a></u>
                    </div>
                </div>
                <div className="bg-gray-400 rounded-lg flex p-2 gap-2">
                    <div className="border border-red-400 border-dotted w-1/3 shrink-0 rounded-3xl">
                        <img src="" alt="" />
                    </div>
                    <div className="border border-red-400 border-dotted grow flex flex-col">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl " >Learn JavaScript</p>
                            <p className="font-anonymous font-bold">Scrimba - 2026</p>
                        </div>
                        <p className="grow text-justify flex items-center font-syne text-sm">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        <u className="text-end font-anonymous font-bold" ><a href="#">know more</a></u>
                    </div>
                </div>
            </div>
            <div className="flex justify-end py-2">
                <u><a className="font-anonymous text-sm" href="#"> Click here to see more</a></u>
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous">{`<Certifications />`}</p>
            </div>
        </section>
    )
}

export default Certifications