function Home() {
    return (
        <section className="relative bg-white grow rounded-md flex justify-center items-center">
            <div className="flex flex-col text-center">
                <p className="font-Fraunces font-extrabold text-4xl  sm:text-8xl text-name">SENTHURAN</p>
                <p className="font-anonymous text-sm md:text-xl text-prof font-bold">ASPIRING FULL-STACK DEVELOPER</p>
            </div>
            <div className=" absolute left-3 top-2">
                <p className="font-anonymous text-tag font-bold">{`<Home />`}</p>
            </div>
        </section>
    )
}

export default Home