import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Internship",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UIUX Design",
    icon: backend,
  },
  {
    title: "Digital Marketing",
    icon: mobile,
  },
  
  {
    title: "Social Media Manager",
    icon: creator,
  },

];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Mern Stack - Developer",
    company_name: "Zidio Development",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2024 - September 2024",
    points: [
      "Collaborated in a team to develop and deploy web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Gained hands-on experience in API integration and deploying applications to Cloud environments.",
      "Created a dynamic resume creation tool with user authentication and customizable download features.",
      "Developed a digital book inventory management system for Tracking, Updating, and Organizing records efficiently.",
    ],
  },
  {
    title: "Student Intern",
    company_name: " Indian Space Research Organisation (ISRO)",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Aug 2023",
    points: [
      " Windows Server Management: Gained hands-on experience in managing Windows Servers and performing updates securely.",
      "Network Infrastructure: Acquired knowledge about Network Architecture and Deployment in data center environments",
      "Project Deployment: Learned strategies for Deploying and Managing projects in data-sensitive environments.",
      "Python in Data Centers: Applied Python for Automation and Secure data transfer processes.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "E-commerce",
    description:
      "An intuitive e-commerce platform offering seamless shopping experiences with diverse products, secure transactions, and fast delivery.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://storied-twilight-9b6368.netlify.app/",
  },
  {
    name: "Business Website",
    description:
      "A professional business website showcasing services, expertise, and solutions, designed to enhance client engagement and drive growth.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://bytefiedm.netlify.app/",
  },
  {
    name: "More project",
    description:
      "Explore more of my projects and code contributions on my GitHub account. Stay updated with my latest work and collaborative endeavors.",
    tags: [
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "repo",
        color: "green-text-gradient",
      },
      {
        name: "project",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Muthuyuvaraj",
  },
];

export { services, technologies, experiences, testimonials, projects };
