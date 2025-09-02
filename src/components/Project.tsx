import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import ProjectComponent from "./ProjectComponent";
export default function Project() {
  return (
    <section>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <ProjectComponent {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
