import { LuGraduationCap } from "react-icons/lu";
import { CgWorkAlt } from "react-icons/cg";
import React from "react";
import { title } from "process";
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

export const projectsData = [
  {
    title: "WanderLust",
    description:
      "An Airbnb-style application designed for booking hotels across various regions worldwide, developed using the Model-View-Controller (MVC) architecture to ensure scalability.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind"],
    imageUrl: "/wanderlust-project.png",
  },
  {
    title: "Tomato",
    description:
      "Developed a full-stack food delivery web application using React, featuring a seamless Stripe payment gateway integration for secure transactions.",
    tags: ["React", "Nodejs", "Tailwind", "context"],
    imageUrl: "/tomato-project.png",
  },
  {
    title: "Techy",
    description:
      "Implemented instant messaging using WebSockets with Socket.IO for seamless, bidirectional communication between users.",
    tags: ["Flutter", "Express", "Nodejs", "MongoDB", "WebSockets"],
    imageUrl: "/techy-project.png",
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

export const experiencesData = [
  {
    title: "Product Developer Intern",
    location: "Work from home",
    description:
      "Focusing on enhancing technical skills, contributing to application development, and gaining industry-level experience in building impactful products.",
    date: "Sept 2025 - Present",
    icon: React.createElement(CgWorkAlt),
  },
  {
    title: "Bachelor of Technology in CSE",
    location: "Sangam University, Bhilwara",
    description:
      "Focus on software development, data structures & algorithms, and modern web technologies. Gaining a strong foundation in both theoretical concepts and practical applications.",
    date: "Aug 2023 - Present",
    icon: React.createElement(LuGraduationCap),
  },
] as const;
