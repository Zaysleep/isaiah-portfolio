"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
   project: Project;
   index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
   // Controls the existing same-page project detail expansion.
   const [isExpanded, setIsExpanded] = useState(false);

   const detailsId = `${project.id}-details`;

   // Keeps the subtle scrapbook-board feeling by slightly rotating cards
   // in opposite directions on larger screens.
   const rotationClass = index % 2 === 0 ? "lg:-rotate-[0.5deg]" : "lg:rotate-[0.5deg]";

   return (
      <article
         className={`
        relative overflow-hidden rounded-3xl border border-[#E7DCCB]
        bg-white shadow-[0_18px_60px_rgba(17,24,39,0.10)]
        transition duration-300
        hover:-translate-y-1
        hover:shadow-[0_24px_70px_rgba(17,24,39,0.14)]
        motion-reduce:transform-none
        motion-reduce:transition-none
        ${rotationClass}
      `}
      >
         {/* Decorative scrapbook tape detail */}
         <div
            aria-hidden="true"
            className="
          absolute left-1/2 top-0 z-10
          h-7 w-24
          -translate-x-1/2 -translate-y-2
          rotate-[-2deg]
          bg-[#E7DCCB]/80
          shadow-sm
        "
         />

         {/* Project image */}
         <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#FFF8EE]">
            <Image
               src={project.image}
               alt={`${project.name} project preview`}
               fill
               sizes="
            (max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            600px
          "
               className="
            object-cover
            transition duration-500
            hover:scale-[1.02]
            motion-reduce:transform-none
            motion-reduce:transition-none
          "
               priority={index === 0}
            />
         </div>

         {/* Main project card content */}
         <div className="p-6 sm:p-8">
            {/* Status */}
            <div className="mb-4">
               <span
                  className="
              inline-flex min-h-8 items-center
              rounded-full
              border border-[#15803D]/20
              bg-[#15803D]/10
              px-3 py-1
              text-sm font-medium
              text-[#166534]
            "
                  aria-label={project.statusLabel}
               >
                  {project.status}
               </span>
            </div>

            {/* Project heading */}
            <div className="space-y-2">
               <h3 className="text-3xl font-bold tracking-tight text-[#111827]">{project.name}</h3>

               <p className="text-lg font-semibold text-[#1E40AF]">{project.subtitle}</p>
            </div>

            {/* Short description */}
            <p className="mt-5 text-base leading-7 text-[#5B6475]">{project.description}</p>

            {/* Technology tags */}
            <div className="mt-6 flex flex-wrap gap-2" aria-label={`${project.name} technology stack`}>
               {project.techTags.map((tag) => (
                  <span
                     key={tag}
                     className="
                rounded-full
                border border-[#E7DCCB]
                bg-[#FAF7F0]
                px-3 py-1.5
                text-sm font-medium
                text-[#374151]
              "
                  >
                     {tag}
                  </span>
               ))}
            </div>

            {/* Card actions */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
               {/* Live application link */}
               <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
              inline-flex min-h-11 items-center justify-center
              rounded-full
              bg-[#E76F51]
              px-5 py-3
              text-sm font-semibold
              text-white
              transition
              hover:bg-[#D85F43]
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#E76F51]/30
            "
               >
                  {project.liveActionLabel}
               </a>

               {/* Same-page expanded details button */}
               <button
                  type="button"
                  onClick={() => setIsExpanded((current) => !current)}
                  aria-expanded={isExpanded}
                  aria-controls={detailsId}
                  className="
              inline-flex min-h-11 items-center justify-center
              rounded-full
              border border-[#1E40AF]
              bg-white
              px-5 py-3
              text-sm font-semibold
              text-[#1E40AF]
              transition
              hover:bg-[#EFF6FF]
              focus:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#1E40AF]/20
            "
               >
                  {isExpanded ? "Hide Details" : "View Details"}
               </button>
            </div>
         </div>

         {/* Expanded project details */}
         {isExpanded && (
            <div
               id={detailsId}
               className="
            border-t border-[#E7DCCB]
            bg-[#FFFDF8]
            px-6 py-8
            sm:px-8 sm:py-10
          "
            >
               <div className="space-y-9">
                  {/* Overview */}
                  <section aria-labelledby={`${project.id}-overview`}>
                     <h4
                        id={`${project.id}-overview`}
                        className="
                  text-xl font-semibold
                  tracking-tight
                  text-[#111827]
                "
                     >
                        Overview
                     </h4>

                     <p className="mt-3 text-base leading-7 text-[#5B6475]">{project.details.overview}</p>
                  </section>

                  {/* Optional problem section */}
                  {project.details.problem && (
                     <section aria-labelledby={`${project.id}-problem`}>
                        <h4
                           id={`${project.id}-problem`}
                           className="
                    text-xl font-semibold
                    tracking-tight
                    text-[#111827]
                  "
                        >
                           Problem
                        </h4>

                        <p className="mt-3 text-base leading-7 text-[#5B6475]">{project.details.problem}</p>
                     </section>
                  )}

                  {/* Optional core idea section */}
                  {project.details.coreIdea && (
                     <section aria-labelledby={`${project.id}-core-idea`}>
                        <h4
                           id={`${project.id}-core-idea`}
                           className="
                    text-xl font-semibold
                    tracking-tight
                    text-[#111827]
                  "
                        >
                           Core Idea
                        </h4>

                        <p className="mt-3 text-base leading-7 text-[#5B6475]">{project.details.coreIdea}</p>
                     </section>
                  )}

                  {/* FrontOffice feature summary */}
                  {project.details.whatIBuilt && project.details.whatIBuilt.length > 0 && (
                     <section aria-labelledby={`${project.id}-what-i-built`}>
                        <h4
                           id={`${project.id}-what-i-built`}
                           className="
                      text-xl font-semibold
                      tracking-tight
                      text-[#111827]
                    "
                        >
                           What I Built
                        </h4>

                        <ul className="mt-4 grid gap-3 md:grid-cols-2">
                           {project.details.whatIBuilt.map((item) => (
                              <li
                                 key={item}
                                 className="
                          flex items-start gap-3
                          rounded-2xl
                          border border-[#E7DCCB]
                          bg-white
                          p-4
                          text-base
                          leading-6
                          text-[#5B6475]
                        "
                              >
                                 <span
                                    aria-hidden="true"
                                    className="
                            mt-2
                            h-2 w-2
                            shrink-0
                            rounded-full
                            bg-[#E76F51]
                          "
                                 />

                                 <span>{item}</span>
                              </li>
                           ))}
                        </ul>
                     </section>
                  )}

                  {/* Development focus */}
                  {project.details.developmentFocus && (
                     <section aria-labelledby={`${project.id}-development-focus`}>
                        <h4
                           id={`${project.id}-development-focus`}
                           className="
                    text-xl font-semibold
                    tracking-tight
                    text-[#111827]
                  "
                        >
                           Development Focus
                        </h4>

                        {/* FrontOffice uses a paragraph */}
                        {typeof project.details.developmentFocus === "string" ? (
                           <p className="mt-3 text-base leading-7 text-[#5B6475]">{project.details.developmentFocus}</p>
                        ) : (
                           // ALLEVIN continues to use its existing feature list.
                           <ul className="mt-4 grid gap-3 md:grid-cols-2">
                              {project.details.developmentFocus.map((item) => (
                                 <li
                                    key={item}
                                    className="
                          flex items-start gap-3
                          rounded-2xl
                          border border-[#E7DCCB]
                          bg-white
                          p-4
                          text-base
                          leading-6
                          text-[#5B6475]
                        "
                                 >
                                    <span
                                       aria-hidden="true"
                                       className="
                            mt-2
                            h-2 w-2
                            shrink-0
                            rounded-full
                            bg-[#1E40AF]
                          "
                                    />

                                    <span>{item}</span>
                                 </li>
                              ))}
                           </ul>
                        )}
                     </section>
                  )}

                  {/* Current testing state */}
                  {project.details.currentStatus && (
                     <section aria-labelledby={`${project.id}-current-status`}>
                        <h4
                           id={`${project.id}-current-status`}
                           className="
                    text-xl font-semibold
                    tracking-tight
                    text-[#111827]
                  "
                        >
                           Current Status
                        </h4>

                        <p className="mt-3 text-base leading-7 text-[#5B6475]">{project.details.currentStatus}</p>
                     </section>
                  )}

                  {/* Compact project metadata */}
                  {project.details.metadata && (
                     <section
                        aria-label={`${project.name} project information`}
                        className="
                  rounded-2xl
                  border border-[#E7DCCB]
                  bg-[#FAF7F0]
                  p-5
                "
                     >
                        <dl className="space-y-4">
                           <div
                              className="
                      grid gap-1
                      sm:grid-cols-[90px_1fr]
                      sm:gap-4
                    "
                           >
                              <dt className="font-semibold text-[#111827]">Status:</dt>

                              <dd className="text-[#5B6475]">{project.details.metadata.status}</dd>
                           </div>

                           <div
                              className="
                      grid gap-1
                      sm:grid-cols-[90px_1fr]
                      sm:gap-4
                    "
                           >
                              <dt className="font-semibold text-[#111827]">Stack:</dt>

                              <dd className="text-[#5B6475]">{project.details.metadata.stack}</dd>
                           </div>

                           <div
                              className="
                      grid gap-1
                      sm:grid-cols-[90px_1fr]
                      sm:gap-4
                    "
                           >
                              <dt className="font-semibold text-[#111827]">Role:</dt>

                              <dd className="text-[#5B6475]">{project.details.metadata.role}</dd>
                           </div>
                        </dl>
                     </section>
                  )}
               </div>
            </div>
         )}
      </article>
   );
}
