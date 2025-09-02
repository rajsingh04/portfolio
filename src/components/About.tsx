"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        I am Raj Singh, a <span className="font-medium">Computer Science</span>{" "}
        student with a strong interest in{" "}
        <span className="font-medium">software engineering</span>,{" "}
        <span className="font-medium">web development</span>, and{" "}
        <span className="font-medium">data structures & algorithms</span>. I am
        passionate about designing efficient solutions, building scalable
        applications, and continuously improving my technical skills. My goal is
        to become a software engineer at a top technology company, where I can
        work on challenging problems, contribute to{" "}
        <span className="font-medium">innovative projects</span>, and grow both
        technically and professionally.Beyond academics, I love to{" "}
        <span className="font-medium">explore new technologies</span>, stay
        updated with industry trends, and apply them to real-world projects.
      </p>
    </motion.section>
  );
};
