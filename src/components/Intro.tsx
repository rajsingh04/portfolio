"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] scroll-mt-28" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.5,
            }}
          >
            <Image
              src="/1754223147225.jpg"
              alt="portfolio image"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-50 w-50 rounded-full object-cover 
            border-[0.35rem] border-blue-400 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className=" mb-10 mt-4 px-4 text-2xl 
       !leading-[1.5] sm:text-2xl"
      >
        <span className="font-bold">Hello, I&apos;m Raj. </span>Passionate and
        results-driven Computer Science student with strong foundational
        knowledge in <span className="font-bold">full-stack web</span> and{" "}
        <span className="font-bold">mobile development</span>.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
          duration: 0.5,
        }}
      >
        <Link
          href="#contact"
          className="group bg-blue-500 text-white px-7 py-3 gap-2 
          rounded-full flex items-center  outline-none
          hover:scale-110 hover:bg-blue-600 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/resume.pdf"
          className="group bg-[#f3f4f6] px-7 py-3 flex
          items-center gap-2 rounded-full outline-none hover:scale-110
           hover:bg-blue-1000 active:scale-105 transition 
           cursor-pointer border border-black/10"
          download
        >
          {" "}
          Download Resume{" "}
          <HiDownload className="opacity-80 group-hover:translate-y-1 transition" />
        </a>
        <a
          className="bg-[#f3f4f6] p-4 text-gray-700 
        flex items-center gap-2 rounded-full outline-none hover:scale-[1.15]
           hover:bg-blue-1000 active:scale-105 transition 
           cursor-pointer border border-black/10"
          href="https://www.linkedin.com/in/raj-singh-08150a271/"
          target="_main"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-[#f3f4f6] p-4 text-gray-700 
        flex items-center gap-2 rounded-full text-[1.35rem] outline-none hover:scale-[1.15]
           hover:bg-blue-1000 active:scale-105 transition 
           cursor-pointer border border-black/10"
          href="https://github.com/rajsingh04"
          target="_main"
        >
          {" "}
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
