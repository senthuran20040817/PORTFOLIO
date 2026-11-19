function Home() {
    return (
        <section className="relative bg-white grow rounded-md flex justify-center items-center">
            <div className="flex flex-col text-center">
                <p className="font-Fraunces font-extrabold text-9xl">SENTHURAN</p>
                <p className="font-anonymous text-xl" >Aspiring Full-Stack Developer</p>
            </div>
            <div className=" absolute left-3 top-2">
                <p className="font-anonymous">{`<Home />`}</p>
            </div>
        </section>
    )
}

export default Home