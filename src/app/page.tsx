import { About } from "@/components/About";
import Intro from "@/components/Intro";
import Project from "@/components/Project";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Project />
    </main>
  );
}
