// import { volunteeringImages } from "../../constants.jsx"

function Education() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3 h-full gap-5">
            <div className="flex flex-col mt-10 mb-5">
                <p className="font-bold font-Fraunces text-3xl text-name">Learning Is Part of My Story.</p>
            </div>
            <div className="grow flex flex-col gap-5">
                <div className=" flex gap-4 rounded-xl ">
                    <div className="w-30 h-30 rounded-xl flex justify-center items-center bg-edu-box text-white ">
                        <p className="font-anton text-7xl font-extrabold">01</p>
                    </div>
                    <div className="rounded-xl">
                        <p className="font-syne font-bold text-2xl text-edu-topic ">Diploma in Software Engineering</p>
                        <p className="font-anonymous font-bold text-md text-edu-place">Institute of Computer Engineering Technology (iCET)</p>
                        <p className="font-anonymous font-bold text-sm text-edu-time"> 2026 - 2027</p>
                    </div>
                </div>
                <div className=" flex gap-4 rounded-xl ">
                    <div className="w-30 h-30 rounded-xl flex justify-center items-center bg-edu-box text-white ">
                        <p className="font-anton text-7xl font-extrabold">02</p>
                    </div>
                    <div className="rounded-xl">
                        <p className="font-syne font-bold text-2xl text-edu-topic ">A2 - Pre-intermediate level</p>
                        <p className="font-anonymous font-bold text-md text-edu-place">British Council of Srilanka</p>
                        <p className="font-anonymous font-bold text-sm text-edu-time">2026 - 2027</p>
                    </div>
                </div>
                <div className=" flex gap-4 rounded-xl ">
                    <div className="w-30 h-30 rounded-xl flex justify-center items-center bg-edu-box text-white ">
                        <p className="font-anton text-7xl font-extrabold">03</p>
                    </div>
                    <div className="rounded-xl">
                        <p className="font-syne font-bold text-2xl text-edu-topic ">GCE A/L Physical Science Stream</p>
                        <p className="font-anonymous font-bold text-md text-edu-place">D.S.Senanayaka College, Colombo 7</p>
                        <p className="font-anonymous font-bold text-sm text-edu-time"> 2014 - 2025</p>
                    </div>
                </div>
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<Education />`}</p>
            </div>
        </section>
    )
}

export default Education