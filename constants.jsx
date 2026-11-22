import { SiReact, SiTailwindcss, SiHtml5, SiCss, SiJavascript, SiBootstrap, SiPython, SiIntellijidea, SiMysql, SiGithubpages, SiNetlify } from 'react-icons/si';
import { FaGit, FaGithub, FaJava } from "react-icons/fa"
import { DiNetbeans } from 'react-icons/di';
import { CgVercel } from 'react-icons/cg';

export const techLogos = [
  { node: <SiHtml5 />, title: "HTML5", href: "https://html.spec.whatwg.org/", hoverColor: "#38bdf8" },
  { node: <SiCss />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", hoverColor: "#38bdf8" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", hoverColor: "#38bdf8" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com", hoverColor: "#38bdf8" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com/", hoverColor: "#61dafb" },
  { node: <SiReact />, title: "React", href: "https://react.dev", hoverColor: "#61dafb" },
  { node: <FaJava />, title: "Java", href: "https://www.java.com/", hoverColor: "#61dafb" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org/", hoverColor: "#61dafb" },
  { node: <DiNetbeans />, title: "Apache NetBeans", href: "https://netbeans.apache.org/", hoverColor: "#61dafb" },
  { node: <SiIntellijidea />, title: "IntelliJ IDEA", href: "https://www.jetbrains.com/idea/", hoverColor: "#61dafb" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/", hoverColor: "#61dafb" },
  { node: <FaGit />, title: "Git", href: "https://git-scm.com/", hoverColor: "#61dafb" },
  { node: <FaGithub />, title: "GitHub", href: "https://github.com/", hoverColor: "#61dafb" },
  { node: <CgVercel />, title: "Vercel", href: "https://vercel.com/", hoverColor: "#61dafb" },
  { node: <SiGithubpages />, title: "GitHub Pages", href: "https://pages.github.com/", hoverColor: "#61dafb" },
  { node: <SiNetlify />, title: "Netlify", href: "https://www.netlify.com/", hoverColor: "#61dafb" },
];

export const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];

export const tools = [
  ["HTML5", "CSS3", "JavaScript", "TailwindCSS", "Bootstrap", "React"],
  ["Java", "Python", "netBeans", "intelliJ"],
  ["MySQL"],
  ["git", "GitHub"],
  ["Vercel", "GitHub Pages", "Netlify"]
]

export const volunteering = [
  {
    topic: "Leadership Program",
    place: "Ran Kakulu lama samajaya - Dodangoda",
    image: "src/assets/vol-1.jpeg"
  }
]

export const projects = [
  {
    topic: "Weather Application",
    desc: "A responsive Weather Application that provides real-time weather information for different locations. It displays essential weather details such as temperature, humidity, wind speed, and weather conditions through a clean and user-friendly interface. The application helps users stay informed about current weather conditions and plan their activities accordingly.",
    skills: ["Tailwind CSS", "Responsive Web Design", "JavaScript", "JSON", "API","HTML5"],
    demo: "https://weather-app-xi-cyan-75.vercel.app/",
    repo: "https://github.com/senthuran20040817/WEATHER-APP"
  },
  {
    topic: "Personal Chatbot",
    desc: "An interactive Personal Chatbot designed to provide instant responses to user queries through a conversational interface. It assists users by answering questions, offering useful information, and creating a smooth, user-friendly communication experience. The project demonstrates the integration of AI-powered conversational features into a modern web application.",
    skills: ["Google Gemini", "Responsive Web Design", "JavaScript", "CSS3", "API","HTML5"],
    demo: "https://personal-chatbot-with-gemini.vercel.app/",
    repo: "https://github.com/senthuran20040817/PERSONAL-CHATBOT-WITH-GEMINI"
  },
  {
    topic: "Number Guessing Game",
    desc: "An interactive guessing game where players challenge themselves to find a randomly generated number within limited attempts.",
    skills: ["JavaScript", "CSS3", "HTML5"],
    demo: "https://senthuran20040817.github.io/NUMBER-GUESSING-GAME/",
    repo: "https://github.com/senthuran20040817/NUMBER-GUESSING-GAME"
  },
  {
    topic: "Strive Coaching",
    desc: "Strive Coaching is an educational platform designed to connect students with quality tuition and learning opportunities. It provides a structured and user-friendly environment where students can explore academic courses, access educational information, and discover suitable tutoring services to support their academic growth and success.",
    skills: ["CSS3", "HTML5"],
    demo: "https://strive-coaching.vercel.app/",
    repo: "https://github.com/senthuran20040817/STRIVE-COACHING"
  }
]

export const certificates = [
  {
    topic : "DevOps & CloudOps Workshop", 
    by : "iCET",
    when : "2026",
    desc : "An insightful workshop introducing DevOps practices, cloud computing, software deployment, and automation, providing practical exposure to modern development workflows and cloud technologies.",
    image : "src/assets/cert-1.jpg"
  },
  {
    topic : "Agentic AI Workshop", 
    by : "iCET",
    when : "2026",
    desc : "An insightful workshop exploring Agentic AI concepts, autonomous AI agents, intelligent automation, and AI-driven workflows, providing exposure to modern AI development techniques.",
    image : "src/assets/cert-2.jpg"
  },
  {
    topic : "Python for Beginners", 
    by : "University of Moratuwa",
    when : "2026",
    desc : "An introductory Python programming course offered by the University of Moratuwa, covering programming fundamentals, basic syntax, data types, control structures, and problem-solving techniques.",
    image : "src/assets/cert-3.jpg"
  },
  {
    topic : "Learn JavaScript", 
    by : "Scrimba",
    when : "2026",
    desc : "A foundational course covering JavaScript programming, core concepts, functions, DOM manipulation, and interactive web development techniques.",
    image : "src/assets/cert-4.jpg"
  }
]

export const education = [
  {
    no: "01",
    name: "Diploma in Software Engineering",
    by: "Institute of Computer Engineering Technology (iCET)",
    time: "2026-2027"
  },
  {
    no: "02",
    name: "A2 - Pre-intermediate level",
    by: "British Council of Srilanka",
    time: "2026-2027"
  },
  {
    no: "03",
    name: "GCE A/L Physical Science Stream",
    by: "D.S.Senanayaka College, Colombo 7",
    time: "2014-2025"
  }
]