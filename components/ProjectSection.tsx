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
              text-[#C2410C]
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
                  These are the builds where ideas move from &ldquo;what if?&rdquo; to working product. ALLEVIN focuses on calmer project workflows with AI-assisted context, while FrontOffice turns sports debates into a social GM experience. Different
                  problems, same goal: make the interface feel useful, focused, and worth coming back to.
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
               {projects.map((project, index) => (
                  <ProjectCard key={project.id} project={project} index={index} />
               ))}
            </div>
         </div>
      </section>
   );
}
