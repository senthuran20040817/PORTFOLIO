// import Home from './Home.jsx';
// import AboutMe from './AboutMe.jsx';
// import Volunteering from './Volunteering.jsx'
// import Projects from './Projects.jsx'
// import Certifications from './Certifications.jsx'
// import Testimonials from './Testimonials.jsx'
// import Education from './Education.jsx'
import ContactMe from './ContactMe.jsx'

function MainBg() {
    return (
        <section className="h-screen bg-linear-[124deg,#7EB397_0%,#D4EDEA_89%] flex flex-col px-5 box-border">
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
            <ContactMe/>
            <div className="flex justify-between items-center text-sm py-1 rounded-md ">
                <p>© 2026 Senthuran. All Rights Reserved.</p>
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