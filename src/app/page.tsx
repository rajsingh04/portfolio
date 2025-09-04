import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import { SectionDivider } from "@/components/SectionDivider";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Project />
      <Skills />
      <Experience />
    </main>
  );
}
