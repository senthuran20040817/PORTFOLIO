function MainBg() {
    return (
        <div className="h-screen bg-linear-[124deg,#7EB397_0%,#D4EDEA_89%] flex flex-col px-5">
            <nav className="">
                <div className="flex justify-center py-4">
                    <ul className="flex gap-10  font-anonymous text-md">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Me</a></li>
                        <li><a href="#">Volunteering</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Certifications</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Education</a></li>
                        <li><a href="#">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
            <div className="relative bg-white grow rounded-md flex justify-center items-center">
                <div className="flex flex-col text-center">
                    <p className="font-Fraunces font-extrabold text-9xl">SENTHURAN</p>
                    <p className="font-anonymous text-xl" >Aspiring Full-Stack Developer</p>
                </div>
                <div className=" absolute left-4 top-4">
                    <p className="font-anonymous">{`<Home />`}</p>
                </div>
            </div>
            <div className="flex justify-between text-sm py-1 rounded-md">
                <p>© 2026 Senthuran. All Rights Reserved.</p>
                <div className="flex gap-10">
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    )
}

export default MainBg