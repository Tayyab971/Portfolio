import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import infaque from "@/public/infaque.png";
import riskwell from "@/public/riskwell.png";
import egility from "@/public/egility.png";
import mernAuth from "@/public/mern-auth.png";
import meal from "@/public/mealmuse.png";
import artmetrica from "@/public/artmetrica.png";
import mealmuse from "@/public/mealmuse.png";

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
    description:
      "Profile Matching for recruiters and agencies.Uses Humantics API and receptivity API to match profiles.",
    tags: ["React", "SERVERLESS", "Firebase", "Tailwind", "Framer"],
    imageUrl: egility,
    link: "https://egility-production.web.app/",
  },
  {
    title: "Meal Muse",
    description: "Simple Recipe applicaiton",
    tags: ["Vue", "Nuxt", "Firebase", "Tailwind",],
    imageUrl: meal,
    link: "https://meal-muse-seven.vercel.app/",
  },
  {
    title: "Mern Authentication",
    description: "Mern Comlpete Authetication System. It has JWT, Email Verification, Password Reset, and more.",
    tags: ["React", "Node", "Express", "Tailwind", "MongoDB"],
    imageUrl: mernAuth,
    link: "https://mern-auth-lyart-one.vercel.app",
    title: "Art Metrica",
    description:
      "Artmetrica is a platform for artists to showcase their work.It inlcudes 6 different services Google forms, xero, quickbooks,meta, google analytics, mailchimp.",
    tags: ["React", "SERVERLESS", "Firebase", "Tailwind", "Framer", "SQL"],
    imageUrl: artmetrica,
    link: "https://artmetrica.ca/",
  },
  {
    title: "Meal Muse",
    description:
      "This Recipe App is a sleek and user-friendly application built with Vue.js to showcase modern frontend development skills. Originally designed for a client project, it demonstrates dynamic rendering of recipe data, smooth navigation, and responsive design.",
    tags: ["Vue", "Nuxt", "Tailwind"],
    imageUrl: mealmuse,
    link: "https://meal-muse-r189vqzr8-tayyab971s-projects.vercel.app/",
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

export const skillsIcons = [
  "html",
  "css",
  "sass",
  "js",
  "ts",
  "react",
  "nuxtjs",
  "nextjs",
  "firebase",
  "npm",
  "redux",
  "tailwind",
  "materialui",
  "githubactions",
  "ai",
  "nodejs",
  "express",
  "d3",
  "postman",
  "threejs",
  "workers",
  "supabase",
  "mongodb",
  "prisma",
] as const;
