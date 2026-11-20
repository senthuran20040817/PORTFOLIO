function Testimonials() {
    return(
        <section className="relative bg-white grow rounded-md flex flex-col px-3">
            <div className="flex flex-col gap-2 mt-10 mb-5 ">
                <p className="font-bold font-Fraunces text-3xl">Seen Through Their Eyes</p>
            </div>
            <div className="flex justify-between py-4 box-border mt-5"> 
                <div className=" w-full flex justify-center items-center">
                    <div className="p-3  w-full h-60 bg-gray-400 m-1 rounded-xl flex flex-col">
                        <p className="grow flex items-center text-justify font-syne font-bold text-sm overflow-hidden">"Senthuran is a dedicated and curious learner who consistently shows enthusiasm for technology and software development. His willingness to explore new ideas, learn independently, and take on challenges reflects his passion for continuous growth."</p>
                        <div className="pt-3 flex items-center gap-2">
                            <div className="bg-amber-200 h-10 w-10 rounded-4xl" >
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p className="font-anonymous text-md font-bold">Senthuran</p>
                                <p className="font-anonymous text-sm ">Head of Acadamics, iCET</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="p-3 w-full h-70 bg-gray-400 m-1 rounded-xl flex flex-col">
                        <p className="grow flex items-center text-justify font-syne font-bold text-md overflow-hidden">"Senthuran is a dedicated and curious learner who consistently shows enthusiasm for technology and software development. His willingness to explore new ideas, learn independently, and take on challenges reflects his passion for continuous growth."</p>
                        <div className="pt-3 flex items-center gap-2">
                            <div className="bg-amber-200 h-12 w-12 rounded-4xl" >
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p className="font-anonymous text-lg font-bold">Senthuran</p>
                                <p className="font-anonymous text-md ">Head of Acadamics, iCET</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center items-center">
                    <div className="p-3 w-full h-60 bg-gray-400 m-1 rounded-xl flex flex-col">
                        <p className="grow flex items-center text-justify font-syne font-bold text-sm overflow-hidden">"Senthuran is a dedicated and curious learner who consistently shows enthusiasm for technology and software development. His willingness to explore new ideas, learn independently, and take on challenges reflects his passion for continuous growth."</p>
                        <div className="pt-3 flex items-center gap-2">
                            <div className="bg-amber-200 h-10 w-10 rounded-4xl" >
                                <img src="" alt="" />
                            </div>
                            <div>
                                <p className="font-anonymous text-md font-bold">Senthuran</p>
                                <p className="font-anonymous text-sm ">Head of Acadamics, iCET</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-10 flex items-start justify-center">
                <div ></div>
                <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-2xl bg-gray-400"></div>
                    <div className="w-5 h-2 rounded-2xl bg-gray-900"></div>
                    <div className="w-2 h-2 rounded-2xl bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-2xl bg-gray-400"></div>
                    <div className="w-2 h-2 rounded-2xl bg-gray-400"></div>
                </div>
                <div></div>

            </div>
            <div className=" absolute top-2">
                <p className="font-anonymous">{`<Testimonials />`}</p>
            </div>
        </section>
    )
}

export default Testimonials