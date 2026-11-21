// import { volunteeringImages } from "../../constants.jsx"

function Certifications() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3 h-full ">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl text-name">Milestones That Shape My Journey.</p>
            </div>
            <div className="grid grid-cols-2 h-full gap-5">
                <div className="bg-cert-bg flex gap-2 border  border-cert-border overflow-hidden shadow-md">
                    <div className="relative w-2/5 shrink-0  border-r border-cert-border">
                        <img src="src\assets\cert-1.jpg" alt="" className="object-cover h-full grayscale" />
                        <div className="absolute inset-0 bg-cert-shadow mix-blend-multiply"></div>
                    </div>
                    <div className="grow flex flex-col justify-between p-2 ">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl text-cert-topic" >Learn JavaScript</p>
                            <p className="font-anonymous font-bold text-cert-org">Scrimba - 2026</p>
                            <p className="grow text-justify mt-2 flex items-center font-syne font-bold text-xs text-cert-desc">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        </div>
                        <u className="text-end font-anonymous font-bold text-sm text-cert-know"><a href="#">know more</a></u>
                    </div>
                </div>
                <div className="bg-cert-bg flex gap-2 border  border-cert-border overflow-hidden shadow-md">
                    <div className="relative w-2/5 shrink-0  border-r border-cert-border">
                        <img src="src\assets\cert-1.jpg" alt="" className="object-cover h-full grayscale" />
                        <div className="absolute inset-0 bg-cert-shadow mix-blend-multiply"></div>
                    </div>
                    <div className="grow flex flex-col justify-between p-2 ">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl text-cert-topic" >Learn JavaScript</p>
                            <p className="font-anonymous font-bold text-cert-org">Scrimba - 2026</p>
                            <p className="grow text-justify mt-2 flex items-center font-syne font-bold text-xs text-cert-desc">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        </div>
                        <u className="text-end font-anonymous font-bold text-sm text-cert-know"><a href="#">know more</a></u>
                    </div>
                </div>
                <div className="bg-cert-bg flex gap-2 border  border-cert-border overflow-hidden shadow-md">
                    <div className="relative w-2/5 shrink-0  border-r border-cert-border">
                        <img src="src\assets\cert-1.jpg" alt="" className="object-cover h-full grayscale" />
                        <div className="absolute inset-0 bg-cert-shadow mix-blend-multiply"></div>
                    </div>
                    <div className="grow flex flex-col justify-between p-2 ">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl text-cert-topic" >Learn JavaScript</p>
                            <p className="font-anonymous font-bold text-cert-org">Scrimba - 2026</p>
                            <p className="grow text-justify mt-2 flex items-center font-syne font-bold text-xs text-cert-desc">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        </div>
                        <u className="text-end font-anonymous font-bold text-sm text-cert-know"><a href="#">know more</a></u>
                    </div>
                </div>
                <div className="bg-cert-bg flex gap-2 border  border-cert-border overflow-hidden shadow-md">
                    <div className="relative w-2/5 shrink-0  border-r border-cert-border">
                        <img src="src\assets\cert-1.jpg" alt="" className="object-cover h-full grayscale" />
                        <div className="absolute inset-0 bg-cert-shadow mix-blend-multiply"></div>
                    </div>
                    <div className="grow flex flex-col justify-between p-2 ">
                        <div className="h-1/4">
                            <p className="font-syne font-bold text-2xl text-cert-topic" >Learn JavaScript</p>
                            <p className="font-anonymous font-bold text-cert-org">Scrimba - 2026</p>
                            <p className="grow text-justify mt-2 flex items-center font-syne font-bold text-xs text-cert-desc">Strengthened my JavaScript fundamentals by learning variables, functions, arrays, objects, DOM manipulation, and event handling, gaining the skills to build more interactive web experiences.</p>
                        </div>
                        <u className="text-end font-anonymous font-bold text-sm text-cert-know"><a href="#">know more</a></u>
                    </div>
                </div>
                
                

                
            </div>
            <div className="flex justify-end py-2">
                <u><a className="font-anonymous text-sm text-see-more" href="#"> Click here to see more</a></u>
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<Certifications />`}</p>
            </div>
        </section>
    )
}

export default Certifications