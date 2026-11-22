import LogoLoop from "../reactbit/LogoLoop"
import { techLogos, tools } from "../../constants.jsx"


function AboutMe() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-col px-3">
            <div className="grid grid-cols-2 h-full mt-10">
                <div className="flex flex-col gap-2">
                    <p className="font-bold font-Fraunces text-3xl text-name">In My Own Words</p>
                    <p className="w-full text-justify font-syne font-bold mt-5 text-gray-600">I'm Senthuran, a developer exploring Java, frontend technologies, and the creative possibilities of turning ideas into interactive digital experiences.</p>
                    <div className="grow font-anonymous font-bold text-skill">
                        <table className="border-separate border-spacing-y-6">
                            <tr className="align-top mt-5">
                                <td className="w-40">Front-end</td>
                                <td className="w-10">=&gt;</td>
                                <td>{tools[0].join(" | ")}</td>
                            </tr>
                            <tr className="align-top">
                                <td>Back-end</td>
                                <td>=&gt;</td>
                                <td>{tools[1].join(" | ")}</td>
                            </tr>
                            <tr className="align-top">
                                <td>Databases</td>
                                <td>=&gt;</td>
                                <td>{tools[2].join(" | ")}</td>
                            </tr>
                            <tr className="align-top">
                                <td>Tools & Testing</td>
                                <td>=&gt;</td>
                                <td>{tools[3].join(" | ")}</td>
                            </tr>
                            <tr className="align-top">
                                <td>Deployment</td>
                                <td>=&gt;</td>
                                <td>{tools[4].join(" | ")}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="bg-gray-300 mx-10 rounded-2xl overflow-hidden">
                    <img src="src\assets\profile-img.png" alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="h-1/8 mx-3 flex items-center">
                <LogoLoop
                    logos={techLogos}
                    layout="line"
                    bend={0.5}
                    magnify={0}
                    labels="none"
                    muted={0}
                    speed={50}
                />
            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<AboutMe />`}</p>
            </div>
        </section>
    )
}

export default AboutMe