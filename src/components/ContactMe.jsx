function ContactMe() {
    return (
        <section className="relative bg-white grow rounded-md flex lg:flex-row flex-col px-3 h-full overflow-y-auto scrollbar-none box-border pb-2">

            <div className="lg:flex-1 md:flex-0 flex-1">
                <div className="flex flex-col gap-2 mt-10 mb-5 ">
                    <p className="font-bold font-Fraunces text-3xl text-name">Get in Touch.</p>
                </div>
                <div className="flex flex-col gap-8">
                    <p className="font-syne font-bold text-gray-600">I enjoy connecting with people, sharing ideas, and exploring new opportunities. Have something in mind? Let's talk!</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2">
                            <div className="h-15 w-15 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center" >
                                <i class="fa-solid fa-at text-3xl text-icon"></i>
                            </div>
                            <div>
                                <p className="font-anonymous text-sm text-contact-tag">Email</p>
                                <p className="font-syne font-bold text-sm text-contact-value">senthuran20040817@gmail.com</p>

                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="h-15 w-15 bg-gray-100 border border-gray-300 rounded-md flex items-center justify-center" >
                                <i class="fa-solid fa-location-arrow text-3xl text-icon"></i>
                            </div>
                            <div>
                                <p className="font-anonymous text-sm text-contact-tag">Address</p>
                                <p className="font-syne font-bold text-sm text-contact-value">Panadura, Kalutara</p>

                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <p className="font-syne font-bold text-gray-600">let's keep in touch with, <a className="text-green-600 cursor-pointer"><u>linked in</u></a> and <a className="text-green-600 cursor-pointer"><u>GitHub</u></a> .</p>
                        
                    </div>
                </div>
            </div>
            <div className="lg:grow lg:flex-1 box-border md:mt-10 lg:mt-0">
                <div className="lg:px-20 lg:py-7 h-full">
                    <div className="bg-contact-box-bg h-full rounded-md p-4  flex flex-col">
                        <p className="font-syne font-bold text-xl text-contact-box">Send Message</p>
                        <div className="mt-3">
                            <p className="font-anonymous text-contact-box">Your Name</p>
                            <input type="text" className="h-10 w-full bg-contact-box px-2 rounded-sm font-Fraunces" />
                        </div>
                        <div className="mt-3">
                            <p className="font-anonymous text-contact-box">Email</p>
                            <input type="text" className="h-10 w-full bg-contact-box px-2 rounded-sm font-Fraunces" />
                        </div>
                        <div className="mt-3">
                            <p className="font-anonymous text-contact-box">Message</p>
                            <textarea type="area" className="resize-none h-40 w-full bg-contact-box p-2 rounded-sm font-Fraunces" />
                        </div>
                        <div className="mt-3 lg:grow flex items-end ">
                            <button className="bg-contact-box cursor-pointer font-anonymous text-contact-box-bg font-bold flex items-center justify-center py-1 w-full mt-2 rounded-sm">send</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" absolute top-2">
                <p className="font-anonymous text-tag font-bold">{`<ContactMe />`}</p>
            </div>
        </section>
    )
}

export default ContactMe