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
                  These projects make up the growing Kin Software LLC product portfolio. They range from software and intelligent systems to engineering tools and physical products, but share the same approach: understand the problem, reduce unnecessary complexity,
                  and build technology that earns its place in someone’s life.
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
                  // When the project count is odd, center the final card on large screens
                  // so the board stays visually balanced as the Kin portfolio grows.
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
