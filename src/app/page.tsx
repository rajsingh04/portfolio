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
      <Project />

      {/* Placeholder sections for navigation */}
      <section
        id="skills"
        className="mb-28 max-w-[45rem] text-center scroll-mt-28"
      >
        <h2 className="text-3xl font-medium capitalize mb-8">My Skills</h2>
        <p>Skills section coming soon...</p>
      </section>

      <section
        id="experience"
        className="mb-28 max-w-[45rem] text-center scroll-mt-28"
      >
        <h2 className="text-3xl font-medium capitalize mb-8">Experience</h2>
        <p>Experience section coming soon...</p>
      </section>

      <section
        id="contact"
        className="mb-28 max-w-[45rem] text-center scroll-mt-28"
      >
        <h2 className="text-3xl font-medium capitalize mb-8">Contact</h2>
        <p>Contact section coming soon...</p>
      </section>
    </main>
  );
}
