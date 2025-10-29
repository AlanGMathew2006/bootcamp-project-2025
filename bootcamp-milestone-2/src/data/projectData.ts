export interface Project {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  slug: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    date: "Fall 2025",
    description:
      "A responsive personal portfolio website built with Next.js and TypeScript, showcasing my projects and blog posts.",
    image: "/images/portfolio/project2-screenshot.png",
    imageAlt:
      "Portfolio website homepage screenshot showing professional profile",
    technologies: ["Next.js", "TypeScript", "CSS Modules", "React"],
    githubUrl: "https://github.com/AlanGMathew2006/AlanGMathew.github.io",
    liveUrl: "https://alangmathew2006.github.io",
    slug: "portfolio-website",
  },
  {
    title: "Brilliant Consulting App",
    date: "Summer 2025",
    description:
      "A scheduling and management application for a small tech consulting business, featuring client management and appointment booking.",
    image: "/images/portfolio/project-screenshot.png",
    imageAlt: "Brilliant Consulting app interface",
    technologies: [
      "Express.js",
      "JavaScript",
      "Node.js",
      "CSS",
      "MongoDB",
      "Nodemailer.js",
      "API Integration",
    ],
    githubUrl: "https://github.com/AlanGMathew2006/Brilliant-Consulting-Website",
    slug: "brilliant-consulting-app",
  },
];

export default projects;
