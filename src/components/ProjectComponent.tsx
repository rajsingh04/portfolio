"use client";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React from "react";

type ProjectProps = (typeof projectsData)[number];
export default function ProjectComponent({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.5 1"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.section
      ref={ref}
      style={{ scale: scale, opacity: opacity }}
      className=" group bg-gray-100 max-w-[42rem] border border-black/5
    overflow-hidden sm:pr-8 relative sm:h-[20rem] mb-3 sm:mb-8 last:mb-0
    even:pl-18 hover:bg-gray-200 transition rounded-lg"
    >
      <div
        className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2
       sm:max-w-1/2 sm:pt-10 flex flex-col h-full group-even:ml-[18rem]"
      >
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto ">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase 
            tracking-wider text-white rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <Image
        quality={95}
        className="absolute top-8 -right-40 w-[28.25rem] 
        rounded-t-lg shadow-2xl
         group-even:-right-[initial] group-even:-left-40
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2 
        transition
        group-even:group-hover:translate-x-3
        group-even:group-hover:-translate-y-3
        group-even:group-hover:rotate-2 "
        src={imageUrl}
        alt={title}
        width={100}
        height={100}
      />
    </motion.section>
  );
}
