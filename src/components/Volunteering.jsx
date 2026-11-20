// import { volunteeringImages } from "../../constants.jsx"

function Volunteering() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl">A Purpose Beyond Myself</p>
            </div>
            <div className="flex justify-between h-full gap-5">
                <div className="w-full bg-gray-400 rounded-lg"></div>
                <div className="w-full bg-gray-400 rounded-lg"></div>
                <div className="w-full bg-gray-400 rounded-lg"></div>
                <div className="w-full bg-gray-400 rounded-lg"></div>
            </div>
            <div className="flex justify-end py-2">
                <u><a className="font-anonymous text-sm" href="#"> Click here to see more</a></u>
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous">{`<Volunteering />`}</p>
            </div>
        </section>
    )
}

export default Volunteering