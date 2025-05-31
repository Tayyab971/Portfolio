"use client";

import React, { useContext } from "react";
import SectionHeading from "./section-heading";
import { skillsIcons } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "@/context/theme-context";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[43rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsIcons.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl  dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            viewport={{ once: true }}
            whileInView="animate"
            custom={index}
          >
            <Image
              className="cursor-pointer hover:scale-125 transition-eas duration-100"
              loading="lazy"
              width={45}
              height={45}
              src={`https://skillicons.dev/icons?i=${skill}&theme=${theme}`}
              alt={skill}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
