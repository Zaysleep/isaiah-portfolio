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
      id: "kin",

      name: "Kin",

      subtitle: "Independent Software Studio",

      status: "Live",

      statusLabel: "Independent software studio and home of my digital products",

      description: "Kin is my independent software studio where I design and build thoughtful digital products focused on clarity, usability, and long-term craftsmanship.",

      image: "/images/kin-preview.png",

      techTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Git", "GitHub", "Vercel"],

      liveUrl: "https://kin-gold.vercel.app/",

      liveActionLabel: "View Website",

      githubUrl: "https://github.com/Zaysleep/Kin",

      githubActionLabel: "View GitHub",

      details: {
         overview:
            "Kin is my independent software studio and the shared home for the products I design, build, and maintain.\n\nI created Kin to give my work a clear identity beyond a collection of unrelated projects. Each product can serve a different purpose while still sharing the same values: thoughtful design, understandable experiences, focused functionality, and careful long-term development.\n\nKin currently brings together products such as ALLEVIN and FrontOffice while providing room for future tools, experiments, and original digital experiences.\n\nThe studio website introduces the broader direction of the ecosystem and gives each product a place within one connected body of work.",

         mkSection: {
            title: "Building a Connected Product Studio",

            copy: "Kin represents the next stage of my work as an independent product builder.\n\nInstead of presenting every application as a separate experiment, Kin creates a clear studio identity around the products I design and maintain. The goal is to build a small, thoughtful ecosystem where each product has its own purpose while sharing a consistent approach to usability, visual clarity, accessibility, and craftsmanship.\n\nThe current Kin website serves as the public home of the studio and introduces the products being developed under it.",
         },

         capabilities: [
            {
               title: "Studio identity",
               description: "Creates a shared identity for the products I design, build, publish, and maintain independently.",
            },
            {
               title: "Product ecosystem",
               description: "Connects separate products under one studio while allowing each application to maintain its own purpose, audience, and visual character.",
            },
            {
               title: "Editorial website",
               description: "Uses a calm, magazine-inspired presentation to introduce the studio, communicate its values, and showcase its products.",
            },
            {
               title: "Product storytelling",
               description: "Presents each product through clear descriptions, visual previews, and focused explanations rather than overwhelming visitors with feature lists.",
            },
            {
               title: "Responsive design",
               description: "Maintains a clear and usable experience across desktop, tablet, and mobile screen sizes.",
            },
            {
               title: "Accessible interface",
               description: "Uses semantic structure, keyboard-friendly interactions, readable typography, visible focus states, and WCAG-conscious contrast.",
            },
            {
               title: "Reusable architecture",
               description: "Uses reusable React components and centralized product content so the studio can grow without requiring a complete redesign.",
            },
            {
               title: "Independent deployment",
               description: "Built, versioned, and deployed through Next.js, TypeScript, GitHub, and Vercel using the same workflow as the products within the studio.",
            },
         ],

         myRole: [
            "I created Kin as the independent studio behind my software products, owning the studio strategy, identity, website design, frontend development, content structure, accessibility decisions, and deployment.",
            "The project required me to think beyond a single application and define how multiple products should relate to one another while still keeping their own identities.",
            "I designed Kin to communicate a clear point of view: software should feel focused, understandable, and carefully made rather than crowded with unnecessary features.",
         ],

         engineeringHighlights: [
            "Built the studio website with Next.js, React, TypeScript, and Tailwind CSS",
            "Created a responsive single-page experience for desktop, tablet, and mobile",
            "Designed reusable components for studio stories and product features",
            "Organized product content so future Kin products can be added consistently",
            "Maintained semantic HTML and keyboard-accessible navigation",
            "Used WCAG-conscious contrast, readable typography, and visible interaction states",
            "Connected the studio website to separately deployed products",
            "Managed source control and deployment through GitHub and Vercel",
            "Created a visual identity that can support future products without requiring a complete redesign",
         ],

         designPrinciples: [
            "Thoughtful products over feature overload.",
            "Clarity before complexity.",
            "Every product should have a clear purpose.",
            "Consistency should not erase personality.",
            "Accessibility is part of product quality.",
            "Build carefully enough to maintain it.",
         ],

         portfolioSummary: [
            "Kin demonstrates my ability to think beyond an individual feature or application and build a broader product identity around a growing body of work.",
            "The project combines product strategy, brand direction, interface design, responsive frontend development, accessibility, reusable architecture, and deployment into a public home for the products I build independently.",
         ],

         currentStatus: "Kin is live as the public home of my independent software studio. The current website introduces the studio and its initial products, with future updates planned as the Kin ecosystem grows.",

         metadata: {
            status: "Live",

            stack: "Next.js · React · TypeScript · Tailwind CSS · Git · GitHub · Vercel",

            role: "Studio Strategy · Product Direction · Brand Design · UX · Frontend Engineering · Accessibility · Deployment",
         },
      },
   },

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

      subtitle: "Multi-Sport GM Social Platform",

      status: "Live / Active Testing",

      statusLabel: "Live full-stack multi-user sports social platform currently undergoing active user testing",

      description: "A live full-stack sports social platform where fans follow teams, make calls, debate in War Rooms, and keep receipts on their predictions and opinions.",

      image: "/images/frontoffice-preview.png",

      techTags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Postgres", "Auth", "Realtime Data", "GitHub", "Vercel"],

      liveUrl: "https://front-office-lilac.vercel.app",

      liveActionLabel: "View Live App",

      githubUrl: "https://github.com/Zaysleep/FrontOffice",

      githubActionLabel: "View GitHub",

      details: {
         overview:
            "FrontOffice is a live full-stack sports social platform built around the idea: “Be the GM. Make the call. Keep the receipts.”\n\nThe product gives sports fans a place to follow their teams, post takes, debate moves, vote on opinions, comment in shared discussions, save posts, build public profiles, follow other users, and preserve predictions through a Receipts system.\n\nUnlike a basic sports news app or open-ended social feed, FrontOffice is built around structured sports conversation. Users are not just posting into the void — they are making calls, reacting to team situations, joining War Room discussions, and creating a track record of what they believed before the outcome was known.\n\nThe current version includes backend persistence, authentication, user profiles, social interactions, notifications, moderation flows, and tested receipt behavior. The next major product layer is live sports data integration so the platform can surface team news, standings, injuries, schedules, transactions, and event-driven prompts.",

         mkSection: {
            title: "Full-Stack MVP — Social Platform + Receipts System",

            copy: "FrontOffice has moved beyond concept design into a functional full-stack MVP.\n\nThe current build supports real user accounts, authenticated sessions, persistent user-generated content, public profiles, follows, voting, comments, bookmarks, notifications, blocking, reporting, and a Receipts system that preserves predictions and links them back to the original discussion.\n\nThis phase focused on proving that the core platform loop works: a user can join the app, choose teams, participate in discussions, make a call, save or receive activity, and build a history around their sports opinions.\n\nThe product is now ready for the next major layer: live sports data that gives users more reasons to return, react, debate, and create receipts around real events.",
         },

         capabilities: [
            {
               title: "Account system",
               description: "Supports account creation, email verification, authentication, onboarding, protected routes, and user-specific app experiences.",
            },
            {
               title: "Personalized team setup",
               description: "Allows users to select teams and shape their sports identity around the leagues and teams they follow.",
            },
            {
               title: "Public user profiles",
               description: "Includes editable usernames, profile images, bios, team identity, user activity, and public-facing profile pages.",
            },
            {
               title: "War Room social feed",
               description: "Gives users a shared space to post takes, debate moves, vote, comment, reply, bookmark, and share sports opinions.",
            },
            {
               title: "Receipts system",
               description: "Preserves user predictions and opinions so they can be revisited later and connected back to the original discussion.",
            },
            {
               title: "Following system",
               description: "Supports follower and following relationships so users can build a sports-centered social graph.",
            },
            {
               title: "Notifications",
               description: "Includes in-app notifications, browser push notification support, and user-controlled notification preferences.",
            },
            {
               title: "Moderation and safety",
               description: "Includes reporting, blocking, interaction limits, moderation protections, and rate-limit logic for healthier community behavior.",
            },
            {
               title: "Responsive interface",
               description: "Designed and tested across mobile, tablet, and desktop layouts so the platform feels usable on real devices.",
            },
            {
               title: "Sports data architecture",
               description: "Prepared information architecture for NBA, NFL, MLB, Premier League, and MLS data including teams, leagues, updates, and future event-driven prompts.",
            },
            {
               title: "Supabase backend",
               description: "Uses Supabase authentication, Postgres database persistence, Row Level Security, and realtime-ready social data structures.",
            },
            {
               title: "Deployment workflow",
               description: "Built, tested, deployed, and updated through Next.js, TypeScript, React, Tailwind CSS, Supabase, GitHub, and Vercel.",
            },
         ],

         myRole: [
            "I designed and built FrontOffice as a solo product engineer, owning the product strategy, UX direction, frontend architecture, backend integration, database-backed social features, testing, and deployment.",
            "The project required designing more than screens. I had to think through user identity, team selection, profile behavior, social relationships, content persistence, notification delivery, moderation, blocking, and how receipts should preserve sports opinions over time.",
            "I also tested the app with real users across different devices, using feedback to improve onboarding, mobile usability, interaction clarity, notification behavior, and the overall social experience.",
         ],

         engineeringHighlights: [
            "Built a full-stack social platform with Next.js, React, TypeScript, Tailwind CSS, Supabase, and Vercel",
            "Implemented authentication, email verification, protected routes, onboarding, and persistent user sessions",
            "Designed relational data models for profiles, posts, comments, replies, votes, bookmarks, follows, notifications, and receipts",
            "Added Row Level Security policies for user-owned data and safer backend access patterns",
            "Built a Receipt system that preserves predictions and connects them back to original discussions",
            "Implemented public profiles with editable usernames, bios, profile images, and team identity",
            "Added following and follower relationships to support a sports-centered social graph",
            "Built in-app notifications, browser push notification support, and notification preferences",
            "Added reporting, blocking, moderation, and rate-limit protection for safer community interaction",
            "Designed responsive layouts across mobile, tablet, and desktop breakpoints",
            "Prepared sports data architecture for NBA, NFL, MLB, Premier League, and MLS integration",
            "Tested user flows across onboarding, posting, comments, voting, bookmarks, follows, receipts, notifications, and profile management",
         ],

         designPrinciples: [
            "Give fans a role, not just a feed.",
            "Every take should have context.",
            "Receipts make opinions matter over time.",
            "The app should give users something to react to.",
            "Social features need safety and boundaries.",
            "Mobile has to feel first-class.",
         ],

         portfolioSummary: [
            "FrontOffice demonstrates my ability to design and build a live full-stack consumer software product with authentication, database persistence, social interactions, notifications, moderation, responsive UI, and real-user testing.",
            "The project shows product thinking beyond the interface: user identity, social loops, community behavior, data relationships, safety patterns, and the next step of connecting live sports data to drive personalized engagement.",
         ],

         currentStatus:
            "FrontOffice is currently live and undergoing active user testing. The backend social platform and Receipts system are implemented and tested. The next major phase is integrating live sports data so users can react to real team news, injuries, schedules, standings, transactions, transfers, and event-driven prompts.",

         metadata: {
            status: "Live / Active Testing",

            stack: "Next.js · React · TypeScript · Tailwind CSS · Supabase · Postgres · Auth · Realtime Data · GitHub · Vercel",

            role: "Product Strategy · UX · Frontend Engineering · Backend Integration · Social Platform Architecture · Testing · Deployment",
         },
      },
   },
];
