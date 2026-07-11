// components/ProjectSection.tsx

import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectSection() {
   return (
      <section
         id="projects"
         className="
        scroll-mt-24
        bg-[#FFF8EE]
        px-5 py-20
        sm:px-8
        lg:px-12
        lg:py-28
      "
      >
         <div className="mx-auto max-w-7xl">
            {/* Section introduction */}
            <div className="mx-auto max-w-3xl text-center">
               <p
                  className="
              text-sm font-semibold uppercase
              tracking-[0.2em]
              text-[#E76F51]
            "
               >
                  Projects
               </p>

               <h2
                  className="
              mt-3
              text-4xl font-bold
              tracking-tight
              text-[#111827]
              sm:text-5xl
            "
               >
                  Things I&apos;ve been building.
               </h2>

               <p
                  className="
              mt-5
              text-lg leading-8
              text-[#5B6475]
            "
               >
                  These projects explore different sides of the work I enjoy: thoughtful AI-assisted workflows, full-stack social products, and the design systems that bring those ideas together. Different problems, same goal: build experiences that feel
                  useful, focused, and worth coming back to.
               </p>
            </div>

            {/* Project board */}
            <div
               className="
            mt-14
            grid gap-10
            lg:grid-cols-2
            lg:items-start
          "
            >
               {projects.map((project, index) => {
                  // With three projects, the final card is centered beneath
                  // the first two on large screens.
                  const isCenteredFinalCard = projects.length % 2 !== 0 && index === projects.length - 1;

                  return (
                     <div
                        key={project.id}
                        className={
                           isCenteredFinalCard
                              ? `
                        lg:col-span-2
                        lg:mx-auto
                        lg:w-full
                        lg:max-w-2xl
                      `
                              : ""
                        }
                     >
                        <ProjectCard project={project} index={index} />
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
