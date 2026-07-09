// data/projects.ts
// Central project data for the portfolio.
//
// Keeping project content in one file makes it easier to update project
// statuses, descriptions, links, technology stacks, and expanded details
// without rewriting the project card component.

export type ProjectMetadata = {
   status: string;
   stack: string;
   role: string;
};

export type ProjectDetails = {
   overview: string;

   // Optional fields allow each project to tell its story differently.
   problem?: string;
   coreIdea?: string;

   // ALLEVIN uses a list while FrontOffice uses a short paragraph.
   developmentFocus?: string | string[];

   // FrontOffice-specific product feature list.
   whatIBuilt?: string[];

   // Current live/testing state.
   currentStatus?: string;

   // Compact project information shown at the bottom of expanded details.
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
   details: ProjectDetails;
};

export const projects: Project[] = [
   {
      id: "allevin",

      name: "ALLEVIN",

      subtitle: "AI-Assisted Adaptive Workspace",

      status: "Live / In Testing",

      statusLabel: "Live AI-assisted project workspace currently in testing",

      description: "An AI-assisted adaptive project workspace that keeps projects, materials, writing, schedules, and next steps connected in one calm interface.",

      image: "/images/allevin-preview.png",

      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],

      liveUrl: "https://allevin.vercel.app/",

      liveActionLabel: "View Live App",

      details: {
         overview: "ALLEVIN is an AI-assisted adaptive project workspace that helps users keep projects, materials, writing, schedules, and next steps connected in one calm interface.",

         problem:
            "Many productivity tools separate planning, writing, research materials, schedules, and next actions into different places. ALLEVIN explores how an adaptive single-page workspace can reduce that friction and help users stay focused without feeling overwhelmed.",

         coreIdea: "Unlike a standalone chatbot, ALLEVIN’s assistant layer works from the user’s active project context to support the work already in motion.",

         developmentFocus: [
            "AI-assisted workspace layer through AIDock",
            "Project creation and project-aware context",
            "Document and image materials support",
            "Focused Canvas writing area",
            "Calendar scheduling and project planning",
            "Context-aware summaries and next-step guidance",
            "Reference support for explaining how materials connect to the work",
            "Local persistence for saved workspace data",
            "Regression testing across workspace flows",
            "Responsive single-page interface",
            "Accessibility-conscious UX decisions",
            "GitHub and Vercel deployment",
         ],

         metadata: {
            status: "Live / In Testing",

            stack: "Next.js · React · TypeScript · Tailwind CSS · Vercel",

            role: "Product Design · UX · Frontend Engineering · AI Workflow Design",
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
