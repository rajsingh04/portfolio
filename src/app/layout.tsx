import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Raj Singh Tanwar | Personal Portfolio",
  icons: "@/src/app/favicon.ico",
  description:
    "Raj Singh | B.Tech CSE student | Passionate about coding, DSA, and web development | Building projects & aiming for a top software engineering role.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-50 overflow-x-hidden w-full text-gray-950 relative h-[5000px] pt-28 sm:pt-36`}
        suppressHydrationWarning
      >
        <div
          className="bg-[#fbe2e3] absolute -z-10 top-[-6rem] right-[-11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[31.25rem] 
        rounded-full blur-[10rem] -z-10 sm:w-[50rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <Header />
        {children}
      </body>
    </html>
  );
}
