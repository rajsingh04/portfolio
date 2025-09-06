"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { skillsData } from "@/lib/data";
import { motion } from "framer-motion";

const fadInAnimation = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.5 },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="mt-28 mb-28 max-w-[53rem] scroll-mt-28
    text-center sm:mb-40"
    >
      <SectionHeading> My Skills </SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadInAnimation}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#f3f4f6] border border-black/[0.1] rounded-xl px-5 py-3"
            key={skill}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
