"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem]">
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
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
        }}
        className=" mb-10 mt-4 px-4 text-2xl 
       !leading-[1.5] sm:text-3xl"
      >
        <span className="font-bold">Hello, I'm Raj. </span>Passionate and
        results-driven Computer Science student with strong foundational
        knowledge in <span className="font-bold">full-stack web</span> and{" "}
        <span className="font-bold">mobile development</span>.
      </motion.p>
      <div>
        <Link
          href="#contact"
          className="bg-blue-900 text-white px-7 py-3 gap-2 rounded-full flex items-center"
        >
          Contact me here <BsArrowRight />
        </Link>
      </div>
    </section>
  );
}
