import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Bachelor of Computer Science",
    location: "University of Management and Technology Lahore, Pakistan",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Front-End Developer",
    location: "Infaque",
    description:
      "I worked as a front-end developer for 2 years. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - pressent",
  },
  {
    title: "Full-Stack Developer",
    location: "Lahore, Pakistan",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, Firebase and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Infaque - Donor Engagement Platform",
    description:
      "I worked as a full-stack developer on this startup prdoduct for 2 years.It's a donor engagement platform that empowers philanthropic nonprofits to do a lot more with a lot less!",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "SQL", "Firebase", "Serverless"],
    imageUrl: corpcommentImg,
    link: ""
  },
  {
    title: "Riskwell - Broker Engagement Platform",
    description:
      "Riskwell is a dynamic Broker Engagement Platform designed to optimize compliance tracking and broker performance within the financial industry. Through innovative technology, it offers real-time updates on broker compliance status, fosters professional development through educational resources, and ensures data integrity. Riskwell streamlines operations, empowering brokers to navigate regulatory complexities with ease while driving growth and compliance excellence",
    tags: ["React", "Javascript", "Firebase", "Tailwind", "Redux, Shadcn-UI"],
    imageUrl: rmtdevImg,
    link: ""
  },
  {
    title: "Egility",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
    link: ""
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
  "Prisma",
  "MongoDB",
  "Firebase",
  "Redux",
  "Express",
  "Framer Motion",
  "Three js"
] as const;
