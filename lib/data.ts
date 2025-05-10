import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import infaque from "@/public/infaque.png";
import riskwell from "@/public/riskwell.png";
import egility from "@/public/egility.png";
import artmetrica from "@/public/artmetrica.png";

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
      "After graduating. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2017-2021",
  },
  {
    title: "Front-End Developer",
    location: "Rising Technologies",
    description: "I worked as a front-end developer for 6 months.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Front-End Developer (Part Time)",
    location: "Tronsit Solutions",
    description:
      "I worked as a front-end developer for 6 months. I also upskilled to the full stack in parallel",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Infaque",
    description:
      "I'm working as full-stack developer  at Infaque. My stack includes React, Next.js, TypeScript, Tailwind, Prisma, Firebase and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Infaque - Donor Engagement Platform",
    description:
      "I worked as a full-stack developer on this startup prdoduct for 2 years.It's a donor engagement platform that empowers philanthropic nonprofits to do a lot more with a lot less!",
    tags: ["React", "Tailwind", "Firebase", "Serverless"],
    imageUrl: infaque,
    link: "https://infaque-demo-canada-16a12.web.app/admin-dashboard",
  },
  {
    title: "Riskwell - Broker Engagement Platform",
    description:
      "Revolutionizing Broker Performance & Compliance. Real-time updates, education, and data integrity. Streamlining operations for growth and excellence.",
    tags: ["React", "Firebase", "Tailwind", "Redux", "Shadcn-UI"],
    imageUrl: riskwell,
    link: "https://app.riskwell.com/",
  },
  {
    title: "Egility",
    description: "Profile Matching for recruiters and agencies.",
    tags: ["React", "SERVERLESS", "Firebase", "Tailwind", "Framer"],
    imageUrl: egility,
    link: "https://egility-production.web.app/",
  },
  {
    title: "Art Metrica",
    description:
      "Artmetrica is a platform for artists to showcase their work.It inlcudes 6 different services Google forms, xero, quickbooks,meta, google analytics, mailchimp.",
    tags: ["React", "SERVERLESS", "Firebase", "Tailwind", "Framer", "SQL"],
    imageUrl: artmetrica,
    link: "https://artmetrica.ca/",
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
  "Three js",
  "Shadcn Ui",
  "Next UI",
] as const;
