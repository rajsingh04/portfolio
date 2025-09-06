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
      className="group bg-gray-100 max-w-[42rem] border border-black/5
        overflow-hidden relative mb-3 sm:mb-8 last:mb-0
        hover:bg-gray-200 transition rounded-lg mx-auto"
    >
      {/* Mobile Layout - Stacked */}
      <div className="block sm:hidden">
        <div className="relative">
          <Image
            quality={95}
            className="w-full h-48 object-cover rounded-t-lg"
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
          />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 text-sm">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-2 py-1 text-[0.6rem] uppercase 
                tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Desktop Layout - Side by side */}
      <div className="hidden sm:flex sm:h-[20rem]">
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:w-1/2 
          sm:pt-10 flex flex-col h-full group-even:order-2"
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
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
        
        <div className="sm:w-1/2 relative group-even:order-1">
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
            group-even:group-hover:rotate-2"
            src={imageUrl}
            alt={title}
            width={452}
            height={300}
          />
        </div>
      </div>
    </motion.section>
  );
}
