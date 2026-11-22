import { volunteering } from "../../constants.jsx"

function Volunteering() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl text-name">A Purpose Beyond Myself</p>
            </div>
            <div className="grid sm:grid-cols-4 grid-cols-1 h-full gap-5 ">
                {
                    volunteering.map((vol) => {
                        return (
                            <div className="flex flex-col box-border  bg-vol-card border   border-prof shadow-lg">
                                <div className="relative w-full grow overflow-hidden  border-gray-400">
                                    <img src={vol.image} alt="" className=" object-cover h-full " />
                                </div>
                                <div className="h-1/6 text-center pt-3">
                                    <p className="font-syne font-bold text-lg text-vol-name">{vol.topic}</p>
                                    <p className="font-anonymous text-sm text-vol-place">{vol.place}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex justify-end py-2">
                {/* <u><a className="font-anonymous text-sm" href="#"> Click here to see more</a></u> */}
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<Volunteering />`}</p>
            </div>
        </section>
    )
}

export default Volunteering