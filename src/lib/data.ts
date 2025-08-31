export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Product Developer Intern",
    location: "Work from home",
    description: "Test description",
  },
] as const;

export const projectsData = [
  {
    title: "WanderLust",
    description:
      "An Airbnb-style application designed for booking hotels across various regions worldwide, developed using the Model-View-Controller (MVC) architecture to ensure scalability, maintainability, and a clear separation of concerns",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: "",
  },
  {
    title: "Tomato",
    description:
      "Developed a full-stack food delivery web application using React, featuring a seamless Stripe payment gateway integration for secure transactions",
    tags: ["React", "Nodejs", "Tailwind", "context"],
    imageUrl: "",
  },
  {
    title: "Techy",
    description:
      "Implemented instant messaging using WebSockets with Socket.IO for seamless, bidirectional communication between users",
    tags: ["Flutter", "Express", "Nodejs", "MongoDB", "WebSockets"],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Python",
  "Django",
] as const;
