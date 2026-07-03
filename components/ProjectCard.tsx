"use client";

import Image from "next/image";
import type { Project } from "@/data/projects";

/*
   ProjectCard
   -----------
   This component displays one project card inside the Projects section.

   What it handles:
   - Project preview image
   - Project title, subtitle, status, and short description
   - Tech stack tags
   - Live app / concept link
   - Expandable project details

   Interaction notes:
   - Clicking the main card opens project details on the same page.
   - Clicking "View Live App" opens the external project link.
   - The live app button is intentionally outside the main card button so it does
     not accidentally trigger the detail expansion.
*/

type ProjectCardProps = {
   project: Project;
   index: number;
   isExpanded: boolean;
   onToggle: () => void;
};

export default function ProjectCard({ project, index, isExpanded, onToggle }: ProjectCardProps) {
   /*
      If liveUrl is still "#", we treat the button as unavailable.
      This is useful for projects that are still in development.
   */
   const isLiveUrlReady = project.liveUrl !== "#";

   /*
      Adds a subtle scrapbook rotation on desktop.
      This keeps the project board feeling personal without making it messy.
   */
   const rotationClass = index % 2 === 0 ? "md:-rotate-1" : "md:rotate-1";

   return (
      <article className={`group rounded-[2rem] border border-[#E7DCCB] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${rotationClass}`}>
         {/* 
            Main clickable card area.
            This expands or collapses the details panel.
         */}
         <button type="button" onClick={onToggle} aria-expanded={isExpanded} aria-controls={`${project.id}-details`} className="block w-full rounded-[1.5rem] text-left focus-visible:outline-[#1E40AF]">
            {/* Image wrapper with scrapbook-style border and tape accent */}
            <div className="relative overflow-hidden rounded-[1.5rem] border border-[#E7DCCB] bg-[#FFF8EE] p-4">
               {/* Decorative tape accent */}
               <div className="absolute left-6 top-0 z-10 h-7 w-20 -translate-y-1/2 rotate-[-3deg] rounded-sm border border-[#E7DCCB] bg-[#FAF7F0]/90" aria-hidden="true" />

               {/* 
                  Project image frame:
                  - `fill` lets the image fill the entire frame.
                  - `object-cover` prevents empty gaps.
                  - `object-[50%_50%]` centers the image.
                  - Adjust to `object-[50%_45%]` or `object-[50%_55%]`
                    if a logo or screenshot needs slight repositioning.
               */}
               <div className="relative h-44 overflow-hidden rounded-[1.25rem] border border-[#E7DCCB] bg-white sm:h-48 md:h-52 lg:h-56">
                  <Image src={project.image} alt={`${project.name} project preview`} fill priority={index === 0} sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[50%_50%] transition duration-300 group-hover:scale-[1.02]" />
               </div>
            </div>

            {/* Project summary */}
            <div className="mt-6 space-y-3">
               {/* Subtitle and status labels */}
               <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full border border-[#E7DCCB] bg-[#FFF8EE] px-3 py-1 text-xs font-medium text-[#5B6475]">{project.subtitle}</span>

                  <span className="rounded-full border border-[#E7DCCB] bg-white px-3 py-1 text-xs font-medium text-[#15803D]" aria-label={project.statusLabel}>
                     {project.status}
                  </span>
               </div>

               <h3 className="text-3xl font-bold tracking-[-0.03em] text-[#111827]">{project.name}</h3>

               <p className="text-base leading-7 text-[#5B6475]">{project.description}</p>
            </div>
         </button>

         {/* Technology tags */}
         <div className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
            {project.techTags.map((tag) => (
               <span key={tag} className="rounded-full bg-[#FAF7F0] px-3 py-1 text-xs font-medium text-[#5B6475]">
                  {tag}
               </span>
            ))}
         </div>

         {/* Project actions */}
         <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {/* 
               Primary action:
               Uses Burnt Orange to feel warm, energetic, and more portfolio-friendly.
               If the project link is not ready yet, the button appears disabled.
            */}
            <a
               href={isLiveUrlReady ? project.liveUrl : undefined}
               target={isLiveUrlReady ? "_blank" : undefined}
               rel={isLiveUrlReady ? "noreferrer" : undefined}
               aria-disabled={!isLiveUrlReady}
               className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition ${
                  isLiveUrlReady ? "bg-[#C2410C] text-white hover:bg-[#9A3412]" : "pointer-events-none cursor-not-allowed bg-[#E7DCCB] text-[#5B6475]"
               }`}
            >
               {project.liveActionLabel}
            </a>

            {/* Secondary action: expands project details on the same page */}
            <button
               type="button"
               onClick={onToggle}
               aria-expanded={isExpanded}
               aria-controls={`${project.id}-details`}
               className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#E7DCCB] bg-white px-5 py-3 text-sm font-medium text-[#111827] transition hover:bg-[#FFF8EE] focus-visible:outline-[#1E40AF]"
            >
               {isExpanded ? "Hide Details" : "View Details"}
            </button>
         </div>

         {/* Expandable details panel */}
         <div id={`${project.id}-details`} className={`overflow-hidden transition-all ${isExpanded ? "mt-6 max-h-[1600px] opacity-100" : "max-h-0 opacity-0"}`}>
            <div className="rounded-[1.5rem] border border-[#E7DCCB] bg-[#FAF7F0] p-5">
               <div className="space-y-5">
                  {/* Overview */}
                  <div>
                     <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2410C]">Overview</h4>

                     <p className="mt-2 text-base leading-7 text-[#5B6475]">{project.details.overview}</p>
                  </div>

                  {/* Optional core idea */}
                  {project.details.coreIdea && (
                     <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2410C]">Core idea</h4>

                        <p className="mt-2 rounded-2xl bg-white p-4 text-base font-semibold text-[#111827]">“{project.details.coreIdea}”</p>
                     </div>
                  )}

                  {/* Optional problem statement */}
                  {project.details.problem && (
                     <div>
                        <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2410C]">Problem</h4>

                        <p className="mt-2 text-base leading-7 text-[#5B6475]">{project.details.problem}</p>
                     </div>
                  )}

                  {/* Development focus */}
                  <div>
                     <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-[#C2410C]">Development focus</h4>

                     <ul className="mt-3 grid gap-2">
                        {project.details.developmentFocus.map((item) => (
                           <li key={item} className="rounded-2xl border border-[#E7DCCB] bg-white px-4 py-3 text-sm text-[#5B6475]">
                              {item}
                           </li>
                        ))}
                     </ul>
                  </div>

                  {/* Quick project metadata */}
                  <div className="grid gap-4 sm:grid-cols-2">
                     <div className="rounded-2xl bg-white p-4">
                        <h4 className="text-sm font-bold text-[#111827]">Tech stack</h4>

                        <p className="mt-2 text-sm leading-6 text-[#5B6475]">{project.details.techStack}</p>
                     </div>

                     <div className="rounded-2xl bg-white p-4">
                        <h4 className="text-sm font-bold text-[#111827]">Status</h4>

                        <p className="mt-2 text-sm leading-6 text-[#5B6475]">{project.details.status}</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </article>
   );
}
