import { education } from "../../constants.jsx"

function Education() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3 h-full gap-5 overflow-hidden">
            <div className="flex flex-col mt-10 mb-5">
                <p className="font-bold font-Fraunces text-3xl text-name">Learning Is Part of My Story.</p>
            </div>
            <div className="grow flex flex-col gap-10 sm:gap-5 overflow-y-auto scrollbar-none">
                {
                    education.map((edu) => {
                        return (
                            <div className=" flex sm:flex-row flex-col items-center sm:items-start gap-4 rounded-xl ">
                                <div className="sm:w-30 sm:h-30 w-20 h-20 rounded-xl items-center justify-center flex bg-edu-box text-white ">
                                    <p className="font-anton text-4xl sm:text-7xl font-extrabold">{edu.no}</p>
                                </div>
                                <div className="rounded-xl text-center sm:text-left">
                                    <p className="font-syne font-bold text-2xl text-edu-topic ">{edu.name}</p>
                                    <p className="font-anonymous font-bold text-md text-edu-place">{edu.by}</p>
                                    <p className="font-anonymous font-bold text-sm text-edu-time">{edu.time}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<Education />`}</p>
            </div>
        </section>
    )
}

export default Education