// import { volunteeringImages } from "../../constants.jsx"

function Education() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3 h-full ">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl">Learning Is Part of My Story.</p>
            </div>
            <div className="grow flex flex-col gap-1 justify-between mb-4">
                <div className="flex-1 flex py-4 pl50  box-border gap-10">
                    <div className="aspect-square box-border flex justify-center items-center bg-gray-800 text-white rounded-md">
                        <p className="font-anton text-7xl font-extrabold">01</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-syne font-bold text-2xl">Diploma in Software Engineering</p>
                        <p className="font-anonymous font-bold text-md">Institute of Computer Engineering Technology (iCET)</p>
                        <p className="font-anonymous font-bold text-sm"> 2026 - 2027</p>
                    </div>
                </div>
                <div className="flex-1 flex py-4 pl0 box-border gap-10">
                    <div className="aspect-square box-border flex justify-center items-center bg-gray-800 text-white rounded-md">
                        <p className="font-anton text-7xl font-extrabold">02</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-syne font-bold text-2xl">A2 - Pre-intermediate level</p>
                        <p className="font-anonymous font-bold text-md">British Council of Srilanka</p>
                        <p className="font-anonymous font-bold text-sm"> 2026 - 2027</p>
                    </div>
                </div>
                <div className="flex-1 flex py-4 pl box-border  gap-10">
                    <div className="aspect-square box-border flex justify-center items-center bg-gray-800 text-white rounded-md">
                        <p className="font-anton text-7xl font-extrabold">03</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-syne font-bold text-2xl">GCE A/L Physical Science Stream</p>
                        <p className="font-anonymous font-bold text-md">D.S.Senanayaka College, Colombo 7</p>
                        <p className="font-anonymous font-bold text-sm"> 2014 - 2025</p>
                    </div>
                </div>
            </div>
            
            <div className=" absolute top-2">
                <p className="font-anonymous">{`<Education />`}</p>
            </div>
        </section>
    )
}

export default Education