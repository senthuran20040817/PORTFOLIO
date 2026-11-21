import Home from './Home.jsx';
import AboutMe from './AboutMe.jsx';
import Volunteering from './Volunteering.jsx'
import Projects from './Projects.jsx'
import Certifications from './Certifications.jsx'
import Testimonials from './Testimonials.jsx'
import Education from './Education.jsx'
import ContactMe from './ContactMe.jsx'

import { useState } from 'react';

function MainBg() {
    const [page, setPage] = useState("home");
    
    const content = page==="home" ? <Home/> : page==="about" ? <AboutMe/> : page==="volunteering" ? <Volunteering/> : page==="projects" ? <Projects/> : page==="certifications" ? <Certifications/> : page==="testimonials" ? <Testimonials/> : page==="education" ? <Education/> :  page==="contact" ? <ContactMe/> : "" ;

    return (
        <section className="h-screen bg-linear-[124deg,#7EB397_0%,#D4EDEA_89%] flex flex-col px-5 box-border">
            <div className="flex justify-center py-4">
                <nav className="flex gap-10 font-anonymous text-md font-bold text-nav">
                    <p onClick={() => setPage("home")} className={`cursor-pointer hover:text-green-800 ${page==="home" && "text-green-900 underline"}`}>Home</p>
                    <p onClick={() => setPage("about")} className={`cursor-pointer hover:text-green-800 ${page==="about" && "text-green-800 underline"}`}>About Me</p>
                    <p onClick={() => setPage("volunteering")} className={`cursor-pointer hover:text-green-800 ${page==="volunteering" && "text-green-800 underline"}`}>Volunteering</p>
                    <p onClick={() => setPage("projects")} className={`cursor-pointer hover:text-green-800 ${page==="projects" && "text-green-800 underline"}`}>Projects</p>
                    <p onClick={() => setPage("certifications")} className={`cursor-pointer hover:text-green-800 ${page==="certifications" && "text-green-800 underline"}`}>Certifications</p>
                    <p onClick={() => setPage("testimonials")} className={`cursor-pointer hover:text-green-800 ${page==="testimonials" && "text-green-800 underline"}`}>Testimonials</p>
                    <p onClick={() => setPage("education")} className={`cursor-pointer hover:text-green-800 ${page==="education" && "text-green-800 underline"}`}>Education</p>
                    <p onClick={() => setPage("contact")} className={`cursor-pointer hover:text-green-800 ${page==="contact" && "text-green-800 underline"}`}>Contact Me</p>
                </nav>
            </div>
            {content}
            <div className="flex justify-between items-center text-sm py-1 text-bottom">
                <p className="font-syne ">© 2026 Senthuran. All Rights Reserved.</p>
                <div className="flex gap-8">
                    <i class="fa-brands fa-linkedin-in"></i>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-solid fa-at"></i>
                </div>
            </div>
        </section>
    )
}

export default MainBg