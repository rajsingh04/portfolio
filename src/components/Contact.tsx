"use client";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className="scroll-mt-28 mb-20 sm:mb-40 w-[min(100%,38rem)] "
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:rajsingh18904@gmail.com" className="text-blue-500 ">
          rajsingh18904@gmail.com
        </a>{" "}
        or fill out the form below.
      </p>
      
      {message && (
        <p className={`mt-4 text-center ${message.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
      
      <form 
        className="mt-10 flex flex-col" 
        action={async (FormData) => {
          setIsLoading(true);
          setMessage("");
          try {
            const result = await sendEmail(FormData);
            if (result.success) {
              setMessage("Email sent successfully!");
              // Reset form
              (document.getElementById('contact-form') as HTMLFormElement)?.reset();
            } else {
              setMessage("Failed to send email. Please try again.");
            }
          } catch (error) {
            setMessage("An error occurred. Please try again.");
          }
          setIsLoading(false);
        }}
        id="contact-form"
      >
        <input
          required
          name="senderEmail"
          type="email"
          placeholder="Your email"
          className="h-14 rounded-lg px-4 borderBlack"
          maxLength={500}
        />
        <textarea
          placeholder="Your message"
          className="h-52 rounded-lg my-3 borderBlack p-4"
          name="message"
          id="message"
          maxLength={5000}
          required
        ></textarea>
        <button
          className="active:scale-105 hover:scale-110 group flex h-[3rem] w-[8rem] 
          items-center gap-2 justify-center rounded-full border bg-blue-500
           text-white transition hover:bg-blue-600 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Submit"}{" "}
          <FaPaperPlane
            className="group-hover:translate-x-1
          group-hover:-translate-y-1 text-xs opacity-70 transition-all"
          />
        </button>
      </form>
    </motion.section>
  );
}
