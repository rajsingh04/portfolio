import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectComponent from "./ProjectComponent";
export default function Project() {
  return (
    <section id="projects" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Projects</SectionHeading>
      <div className="max-w-[42rem] px-4 mx-auto">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectComponent {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
