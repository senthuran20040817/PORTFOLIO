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