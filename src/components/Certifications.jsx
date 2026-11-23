import { certificates } from "../../constants.jsx"

function Certifications() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3 h-full overflow-hidden">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl text-name">Milestones That Shape My Journey.</p>
            </div>
            <div className="flex flex-col lg:grid lg:grid-cols-2 md: lg:grid-rows-2  h-full gap-5  overflow-y-auto scrollbar-none pb-2">
                {
                    certificates.map((certificate) => {
                        return (
                            <div className="bg-cert-bg sm:w-full flex gap-2 border sm:flex-row flex-col  border-cert-border shadow-md">
                                <div className="relative sm:w-2/5 border-b sm:border-r border-cert-border">
                                    <img src={certificate.image} alt="" className="object-cover h-full grayscale" />
                                    <div className="absolute inset-0 bg-cert-shadow mix-blend-multiply"></div>
                                </div>
                                <div className="grow sm:w-3/5 flex flex-col justify-between p-2 ">
                                    <div className="h-1/4">
                                        <p className="font-syne font-bold text-lg text-cert-topic" >{certificate.topic}</p>
                                        <p className="font-anonymous font-bold text-cert-org">{certificate.by} - {certificate.when}</p>
                                        <p className="grow text-justify mt-2 flex items-center font-syne font-bold text-xs text-cert-desc">{certificate.desc}</p>
                                    </div>
                                    <u className="text-end font-anonymous font-bold text-sm text-cert-know"><a href="#">know more</a></u>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="justify-end py-2 sm:flex hidden">
                <u><a className="font-anonymous text-sm text-see-more" href="#"> Click here to see more</a></u>
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<Certifications />`}</p>
            </div>
        </section>
    )
}

export default Certifications