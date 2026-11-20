function ContactMe() {
    return (
        <section className="relative bg-white grow rounded-md flex flex-row px-3 h-full ">

            <div className="flex-1">
                <div className="flex flex-col gap-2 mt-10 mb-5 ">
                    <p className="font-bold font-Fraunces text-3xl">Get in Touch.</p>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="font-syne font-bold">I enjoy connecting with people, sharing ideas, and exploring new opportunities. Have something in mind? Let's talk!</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <div className="h-15 w-15 bg-gray-300 rounded-md flex items-center justify-center" >
                                <i class="fa-solid fa-at text-3xl"></i>
                            </div>
                            <div>
                                <p className="font-anonymous text-sm">Email</p>
                                <p className="font-syne font-bold text-sm">senthuran20040817@gmail.com</p>

                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-15 w-15 bg-gray-300 rounded-md flex items-center justify-center" >
                                <i class="fa-solid fa-location-arrow  text-3xl"></i>
                            </div>
                            <div>
                                <p className="font-anonymous text-sm">Address</p>
                                <p className="font-syne font-bold text-sm">Panadura, Kalutara</p>

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="font-syne font-bold">let's keep in touch with, <a className="text-blue-600 cursor-pointer"><u>linked in</u></a> and <a className="text-blue-600 cursor-pointer"><u>GitHub</u></a> .</p>
                        
                    </div>
                </div>
            </div>
            <div className="flex-1 box-border">
                <div className="px-20 py-7 h-full">
                    <div className="bg-gray-700 h-full rounded-md p-4  flex flex-col">
                        <p className="font-syne font-bold text-xl text-white">Send Message</p>
                        <div className="mt-3">
                            <p className="font-anonymous text-white">Your Name</p>
                            <input type="text" className="h-10 w-full bg-gray-300 px-2 rounded-sm font-Fraunces" />
                        </div>
                        <div className="mt-3">
                            <p className="font-anonymous text-white">Email</p>
                            <input type="text" className="h-10 w-full bg-gray-300 px-2 rounded-sm font-Fraunces" />
                        </div>
                        <div className="mt-3">
                            <p className="font-anonymous text-white">Message</p>
                            <textarea type="area" className="resize-none h-40 w-full bg-gray-300 p-2 rounded-sm font-Fraunces" />
                        </div>
                        <div className="grow flex items-end">
                            <button className="bg-white cursor-pointer text-black flex items-center justify-center py-1 w-full mt-2 rounded-sm">send</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" absolute top-2">
                <p className="font-anonymous">{`<ContactMe />`}</p>
            </div>
        </section>
    )
}

export default ContactMe