// data/projects.ts
// Central project data for the portfolio.
//
// Keeping project content in one file makes it easier to update project
// statuses, descriptions, links, technology stacks, and expanded details.

export type ProjectMetadata = {
   status: string;
   stack: string;
   role: string;
};

export type ProjectFeature = {
   title: string;
   description: string;
};

export type ProjectDetails = {
   overview: string;

   // Optional project storytelling fields.
   problem?: string;
   coreIdea?: string;

   // Some projects use a list while others use a paragraph.
   developmentFocus?: string | string[];

   // Optional feature list.
   whatIBuilt?: string[];

   // Optional mature product/project sections.
   mkSection?: {
      title: string;
      copy: string;
   };

   capabilities?: ProjectFeature[];

   myRole?: string[];

   engineeringHighlights?: string[];

   designPrinciples?: string[];

   portfolioSummary?: string[];

   // Optional current project state.
   currentStatus?: string;

   // Compact metadata shown at the bottom of expanded details.
   metadata?: ProjectMetadata;
};

export type Project = {
   id: string;
   name: string;
   subtitle: string;
   status: string;
   statusLabel: string;
   description: string;
   image: string;
   techTags: string[];

   liveUrl: string;
   liveActionLabel: string;

   // Optional source-code link.
   githubUrl?: string;
   githubActionLabel?: string;

   details: ProjectDetails;
};

export const projects: Project[] = [
   {
      id: "allevin",

      name: "ALLEVIN",

      subtitle: "Adaptive Project Intelligence Workspace",

      status: "Live / Active Testing",

      statusLabel: "Live project intelligence workspace currently in active testing",

      description: "A live project intelligence workspace that turns ideas, materials, decisions, milestones, and schedules into clear, context-aware guidance.",

      image: "/images/allevin-preview.png",

      techTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Local browser storage", "OpenAI integration", "Framer Motion", "Git", "GitHub", "Vercel"],

      liveUrl: "https://allevin.vercel.app/",

      liveActionLabel: "View Live App",

      // Replace this with your public ALLEVIN GitHub repo link if it is different.
      githubUrl: "https://github.com/Zaysleep/allevin",

      githubActionLabel: "View GitHub",

      details: {
         overview:
            "ALLEVIN is an adaptive project workspace designed to help people move complex work forward without losing the reasoning behind it.\n\nInstead of treating every project like a checklist, ALLEVIN builds an understanding of the active project: its goal, current situation, confirmed decisions, open questions, constraints, risks, materials, milestones, and schedule.\n\nAIDock then works from that context like a senior project lead—assessing progress, identifying the most important unresolved decision, explaining why it matters, recommending a concrete next action, and maintaining continuity across follow-up questions.\n\nMK VIII focused on building the Project Intelligence Engine that connects project structure, memory, materials, milestone state, calendar context, and conversational guidance into one coordinated system.",

         mkSection: {
            title: "MK VIII — Project Intelligence Engine",

            copy: "MK VIII moved ALLEVIN beyond basic project organization and into project-aware reasoning.\n\nThe system can now interpret long, unstructured project descriptions, organize the information into a usable project guide, track milestone progress, preserve important decisions, use uploaded materials as evidence, and adapt its guidance as the project changes.\n\nThe goal was not to make ALLEVIN more autonomous. The goal was to make it more dependable, context-aware, and useful as a project lead.",
         },

         capabilities: [
            {
               title: "Project-aware intake",
               description: "Transforms an unstructured project ramble into a clear goal, success criteria, current situation, decisions, open questions, constraints, notes, milestones, and recommended starting point.",
            },
            {
               title: "Project Intelligence Engine",
               description: "Builds a structured understanding of the active project and uses its current stage, dependencies, evidence, risks, decisions, and schedule to guide the work.",
            },
            {
               title: "Senior project-lead guidance",
               description:
                  "AIDock can assess a project, identify the most important unresolved decision, recommend a specific next action, explain why it matters, challenge its own recommendation, and maintain the same line of reasoning across follow-up questions.",
            },
            {
               title: "Milestone lifecycle",
               description: "Tracks active and completed milestones, preserves milestone evidence, and changes its guidance when a project moves from planning into execution or completion.",
            },
            {
               title: "Persistent project decisions",
               description: "Retains budget limits, scope decisions, deferred options, operating rules, risks, and other durable project choices so they remain available later.",
            },
            {
               title: "Materials as evidence",
               description: "Documents, images, notes, assessments, and references can support decisions, resolve open questions, influence milestone completion, and improve AIDock’s recommendations.",
            },
            {
               title: "Calendar intelligence",
               description: "Connects scheduled work to project context, distinguishes upcoming activity from expired events, and uses relevant calendar information when recommending what should happen next.",
            },
            {
               title: "Completed-project reasoning",
               description: "Recognizes when a milestone sequence is complete and shifts from roadmap guidance into retrospective assessment, remaining-risk analysis, validation, and evidence-based reopening conditions.",
            },
            {
               title: "Cross-project isolation",
               description: "Keeps project decisions, materials, milestones, calendar context, and conversations associated with the correct selected project.",
            },
         ],

         myRole: [
            "I designed and built ALLEVIN as a solo product engineer, owning the product strategy, interaction design, frontend architecture, local-first data model, project memory system, reasoning pipelines, calendar integration, testing, and deployment.",
            "MK VIII required more than adding AI responses. I designed the underlying project model that separates facts, decisions, constraints, risks, evidence, milestones, and actions so the system can reason from project state rather than rely on generic prompts.",
            "I also built and tested project flows across software, research, creative work, personal planning, physical workspaces, community programs, events, and completed projects to identify where the reasoning architecture generalized—and where it still relied too heavily on templates.",
         ],

         engineeringHighlights: [
            "Designed a canonical project context model across Projects, Canvas, Calendar, Materials, Memory, and AIDock",
            "Built generalized project-intake and milestone-generation pipelines",
            "Added persistent milestone, decision, risk, budget, and completion state",
            "Connected uploaded materials to project reasoning and milestone evidence",
            "Developed intent-specific AIDock response composition",
            "Added conversational continuity for recommendations, challenges, comparisons, and follow-ups",
            "Implemented time-aware calendar readbacks that ignore expired events",
            "Built regression fixtures across multiple unrelated project types",
            "Preserved a local-first architecture with user-controlled actions",
            "Deployed and tested through Next.js, TypeScript, React, Tailwind CSS, GitHub, and Vercel",
         ],

         designPrinciples: [
            "Useful first. Conversational second.",
            "Think technically. Speak naturally.",
            "Materials are evidence, not decoration.",
            "A follow-up continues the previous thought.",
            "Completion changes the guidance.",
            "The user stays in control.",
         ],

         portfolioSummary: [
            "ALLEVIN demonstrates my ability to lead an ambiguous product from concept through interaction design, system architecture, implementation, regression testing, and live deployment.",
            "The project combines full-stack product engineering, human-centered UX, local-first data design, AI-assisted reasoning, state management, and cross-feature architecture in a system designed to help real people make progress on complex work.",
         ],

         currentStatus:
            "ALLEVIN is live and undergoing active testing after the completion of MK VIII. The current focus is validating the Project Intelligence Engine across real project types, refining AIDock’s project-lead guidance, and improving how milestones, materials, decisions, and calendar context work together.",

         metadata: {
            status: "Live / Active Testing",

            stack: "Next.js · React · TypeScript · Tailwind CSS · Local browser storage · OpenAI integration · Framer Motion · Git · GitHub · Vercel",

            role: "Product Strategy · UX · Frontend Engineering · Project Intelligence Architecture · Testing · Deployment",
         },
      },
   },

   {
      id: "frontoffice",

      name: "FrontOffice",

      subtitle: "Multi-Sport GM Social Hub",

      status: "Live / Active Testing",

      statusLabel: "Live multi-user sports social platform currently undergoing active user testing",

      description: "A live multi-sport social platform where fans follow their teams, make calls, debate in the War Room, and keep receipts on their predictions and opinions.",

      image: "/images/frontoffice-preview.png",

      techTags: ["Next.js", "TypeScript", "React", "Supabase", "Tailwind CSS", "Vercel"],

      liveUrl: "https://front-office-lilac.vercel.app",

      liveActionLabel: "View Live App",

      details: {
         overview:
            "FrontOffice is a live multi-sport social platform built around the idea: “Be the GM. Make the call. Keep the receipts.” Users can create accounts, follow teams and other users, post sports takes, debate in shared War Room discussions, vote, comment, save posts, build a history of receipts, manage profiles, and receive activity notifications.",

         whatIBuilt: [
            "Full account creation, email verification, authentication, and onboarding flow",
            "Multi-team selection and personalized sports experience",
            "Public user profiles with editable usernames, profile images, bios, and team identity",
            "Shared War Room social feed with posts, voting, comments, replies, bookmarks, and sharing",
            "Receipt system that preserves user predictions and connects them back to the original discussion",
            "Following system with follower and following relationships",
            "In-app notifications and browser push notifications",
            "User-controlled notification preferences",
            "Reporting, blocking, moderation, and rate-limit protection",
            "Responsive mobile, tablet, and desktop layouts",
            "Live sports information architecture supporting NBA, NFL, MLB, Premier League, and MLS",
            "Supabase authentication, database persistence, Row Level Security, and realtime social data",
            "Next.js, React, TypeScript, Tailwind CSS, Supabase, GitHub, and Vercel deployment",
         ],

         developmentFocus:
            "FrontOffice became my largest public-facing software project and gave me experience designing both the interface and the underlying product system. The work included authentication, relational social data, responsive UI design, notification delivery, user preferences, moderation, sports data architecture, production debugging, deployment, and testing with real users across different devices.",

         currentStatus:
            "FrontOffice is currently live and undergoing active user testing. I am collecting feedback from real users, fixing onboarding and mobile issues, improving notification delivery, refining the social experience, and preparing the application for continued public use.",

         metadata: {
            status: "Live / Active Testing",

            stack: "Next.js · React · TypeScript · Tailwind CSS · Supabase · Vercel",

            role: "Product Design · UX · Frontend Engineering · Backend Integration",
         },
      },
   },
];
