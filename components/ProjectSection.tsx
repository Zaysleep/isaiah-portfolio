"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

/*
   ProjectSection
   --------------
   This section introduces Isaiah's featured projects.

   Purpose:
   - Show the two main portfolio projects: ALLEVIN and FrontOffice.
   - Keep the site as a single-page experience.
   - Give visitors a quick understanding of what each build is about.
   - Let users expand each project for more detail without navigating away.

   Design direction:
   - Scrapbook-style project board.
   - Warm cream background with a subtle grid pattern.
   - Slightly rotated cards for a more personal, creative feel.
   - Clean spacing so the section still feels professional.
*/

export default function ProjectSection() {
   /*
      Tracks which project card is currently expanded.
      Only one card opens at a time so the page stays clean and easy to scan.
   */
   const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);

   /*
      Opens the selected project.
      If the user clicks the same project again, it closes.
   */
   function handleToggle(projectId: string) {
      setExpandedProjectId((currentProjectId) => (currentProjectId === projectId ? null : projectId));
   }

   return (
      <section id="projects" className="bg-[#FFF8EE] px-6 py-20 md:py-28">
         <div className="mx-auto max-w-6xl">
            {/* Section intro */}
            <div className="mb-12 flex flex-col gap-4">
               {/* Small label to match the editorial scrapbook style */}
               <p className="w-fit rotate-[-2deg] rounded-full border border-[#E7DCCB] bg-white px-4 py-2 text-sm font-medium text-[#C2410C] shadow-sm">Project Board</p>

               <div className="max-w-3xl">
                  <h2 className="text-4xl font-bold tracking-[-0.04em] text-[#111827] md:text-6xl">Featured projects</h2>

                  <p className="mt-4 text-lg leading-8 text-[#5B6475]">
                     These are the builds where ideas move from “what if?” to working product. ALLEVIN focuses on calmer project workflows with AI-assisted context, while FrontOffice turns sports debates into a social GM experience. Different problems,
                     same goal: make the interface feel useful, focused, and worth coming back to.
                  </p>
               </div>
            </div>

            {/* 
               Scrapbook board:
               The grid background gives the section a project-planning feel,
               like ideas are being laid out on a creative workspace.
            */}
            <div
               className="rounded-[2.5rem] border border-[#E7DCCB] bg-[#FFF8EE] p-4 shadow-sm md:p-8"
               style={{
                  backgroundImage: "linear-gradient(#E7DCCB 1px, transparent 1px), linear-gradient(90deg, #E7DCCB 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
               }}
            >
               {/* Project cards */}
               <div className="grid gap-8 lg:grid-cols-2">
                  {projects.map((project, index) => (
                     <ProjectCard key={project.id} project={project} index={index} isExpanded={expandedProjectId === project.id} onToggle={() => handleToggle(project.id)} />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
