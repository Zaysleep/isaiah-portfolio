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

   // Optional architecture callout for projects with an important system boundary.
   architecturePrinciple?: {
      title: string;
      copy: string;
   };

   // Optional compact architecture flow rendered inside expanded project details.
   architectureFlow?: {
      title: string;
      description: string;
      steps: string[];
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
      id: "sidewalk",

      name: "Sidewalk",

      subtitle: "A Kin Product · Full-Stack City Guide",

      status: "Live",

      statusLabel: "Production-deployed editorial city guide built through Kin",

      description:
         "Sidewalk transforms a selected neighborhood, date, and a few activity preferences into a thoughtful two- or three-stop day. Its custom recommendation engine considers opening hours, distance, variety, previous results, and already selected places while keeping the experience calm and intentionally limited.",

      image: "/images/sidewalk-preview.png",

      techTags: ["Next.js", "React", "TypeScript", "CSS Modules", "Google Places API", "Vercel"],

      liveUrl: "https://sidewalk-beta.vercel.app/",

      liveActionLabel: "View Live App",

      githubUrl: "https://github.com/Zaysleep/sidewalk",

      githubActionLabel: "View GitHub",

      details: {
         overview:
            "Sidewalk is a full-stack editorial city guide built around one core rule: help someone choose one worthwhile experience—not overwhelm them with every available option.\n\nThe application guides users through a clear planning flow from metro region to municipality, neighborhood or area, planning date, time of day, activity preference, curated recommendations, and a saved Sidewalk day.\n\nInstead of exposing raw search results, Sidewalk uses live Google Places data as the foundation for a custom recommendation system. It filters, scores, normalizes, and selects options based on opening hours, distance, activity fit, geographic coherence, experience variety, previous recommendations, and stops already added to the day.\n\nUsers can choose a thoughtful morning, afternoon, and evening, but a complete day requires only two stops. The optional third stop keeps the experience useful without pressuring users to overplan.",

         mkSection: {
            title: "Plan One Worthwhile Day",

            copy: "Sidewalk began as a product-design question: how can a city guide help someone make one confident decision instead of presenting hundreds of interchangeable options?\n\nI designed the experience around a restrained planning flow and then built a custom recommendation layer over Google Places. Rather than displaying every available result, Sidewalk narrows the field to three curated recommendations at a time and explains why each option fits the selected neighborhood, planning date, time of day, activity direction, and existing plan.\n\nThe result is a production-deployed city guide that helps users build a thoughtful two- or three-stop day while preserving the calm, selective character of an editorial recommendation.",
         },

         capabilities: [
            {
               title: "Geography-first planning",
               description: "Guides users through metro region, municipality, neighborhood or area, planning date, time of day, and activity preference before presenting recommendations.",
            },
            {
               title: "Custom recommendation engine",
               description: "Uses hard eligibility filters, quality scoring, activity matching, session-seeded weighted selection, adaptive search stages, and period-specific reasoning instead of displaying raw provider results.",
            },
            {
               title: "Opening-hour awareness",
               description: "Uses current opening hours for the destination’s local current date and regular hours with clearly qualified language for future planning dates.",
            },
            {
               title: "Geographic coherence",
               description: "Considers distance from the selected neighborhood and previously committed stops so the day remains practical rather than scattered.",
            },
            {
               title: "Variety and duplicate protection",
               description: "Avoids duplicate places, repeated brands, chain-heavy results, category repetition, and address or location similarity across the day.",
            },
            {
               title: "Flexible two-stop completion",
               description: "Marks a day as saved after two selected stops while allowing an optional third stop without pressuring users to fill every time period.",
            },
            {
               title: "Session persistence",
               description: "Preserves selected geography, planning date, activity directions, recommendations, refresh state, selected stops, and the completed day in the active browser session.",
            },
            {
               title: "Production API safeguards",
               description: "Uses server-only provider credentials, strict input validation, request limits, provider and browser timeouts, safe logging, bounded caches, request deduplication, and cost-conscious staged fetching.",
            },
            {
               title: "Accessible interaction design",
               description: "Includes semantic landmarks, keyboard-accessible controls and tabs, screen-reader announcements, visible focus states, reduced-motion support, focus management, and resilient narrow-screen behavior.",
            },
         ],

         myRole: [
            "I designed and developed Sidewalk independently from product concept through production deployment as the solo product designer and full-stack software engineer.",
            "My work included product strategy, interaction design, responsive UI development, recommendation-system design, Google Places integration, server-side API architecture, browser-session persistence, accessibility, error recovery, performance safeguards, metadata, testing, GitHub source control, and Vercel deployment.",
            "The project required work across the complete product stack: geography modeling, provider normalization, recommendation logic, date and opening-hour handling, responsive interactions, state management, API reliability, production metadata, and deployment.",
         ],

         engineeringHighlights: [
            "Built a full-stack recommendation system over live Google Places data",
            "Designed a metro-to-neighborhood planning flow with date-aware recommendations",
            "Added opening-hour, distance, variety, duplicate, and committed-stop intelligence",
            "Created a flexible two-stop completion model with an optional third stop",
            "Implemented anonymous session persistence across browser refreshes",
            "Added production API validation, timeouts, caching, deduplication, and cost safeguards",
            "Completed responsive and keyboard-accessible interaction flows",
            "Deployed through GitHub and Vercel with a server-only API-key architecture",
         ],

         designPrinciples: [
            "Help someone choose one worthwhile experience—not every available option.",
            "Calm decisions over endless browsing.",
            "Explain why a recommendation is worth the user’s time.",
            "A useful day does not need to be overplanned.",
            "Live data should support curation, not replace product judgment.",
            "Accessibility and reliability are part of the product architecture.",
         ],

         portfolioSummary: [
            "Sidewalk demonstrates my ability to design and ship a production-minded full-stack product that combines live external data, custom recommendation logic, responsive interaction design, accessibility, state persistence, and server-side reliability safeguards.",
            "The project shows that I can move beyond interface implementation and own the complete product system—from the user problem and visual direction to API boundaries, provider normalization, algorithmic selection, error recovery, metadata, testing, and deployment.",
         ],

         currentStatus:
            "Sidewalk is live and undergoing active testing. The current production build supports geography-based planning, future dates, date-aware opening-hour guidance, custom place recommendations, two- or three-stop days, active-session persistence, responsive layouts, accessibility features, and production safeguards around the Google Places integration.",

         metadata: {
            status: "Live / Active Testing",

            stack: "Next.js · React · TypeScript · CSS Modules · Google Places API · Serverless Route Handlers · Session Storage · Vercel",

            role: "Solo Product Designer · Full-Stack Software Engineer · Recommendation Systems · API Integration · Accessibility · Testing · Deployment",
         },
      },
   },

   {
      id: "allevin",

      name: "ALLEVIN",

      subtitle: "A Kin Product · Schedule-Aware Personal Life Assistant",

      status: "Live / Active Testing",

      statusLabel: "Live schedule-aware personal life assistant currently in active testing",

      description:
         "A live personal life assistant that helps people understand their day, make changes conversationally, and get useful schedule-aware guidance without turning life into a productivity dashboard.",

      image: "/images/allevin-preview.png",

      techTags: ["Next.js 16", "React", "TypeScript", "OpenAI API", "PWA", "Web Push", "Upstash Redis", "Cloudflare Workers", "Vercel"],

      liveUrl: "https://allevin.vercel.app/",

      liveActionLabel: "View Live App",

      githubUrl: "https://github.com/Zaysleep/allevin",

      githubActionLabel: "View GitHub",

      details: {
         overview:
            "ALLEVIN is a one-page, schedule-aware personal life assistant built to help someone understand their day, adjust when life changes, and decide what deserves attention next. The core experience stays intentionally calm: Up Next, Calendar, Coming Up, and Talk to ALLEVIN.\n\nUsers establish their normal week, including commitments, routines, free-time interests, bedtime, travel time, and preferred assistant style. Routines can be defined relative to commitments instead of fixed to a clock—for example, a commute can happen 20 minutes before Work or a wind-down routine can begin after Work ends. When the underlying commitment changes, ALLEVIN can adapt the dependent parts of the day with it.\n\nUsers can also make day-specific changes conversationally, such as adding a meeting, scheduling an appointment, leaving work early, skipping a routine, or moving something for one day. ALLEVIN distinguishes recurring schedule, routines, one-off events, temporary changes, completions, skips, cancellations, and other day-specific state so the current day can change without corrupting the normal routine.\n\nThe product intentionally avoids streaks, gamification, mood tracking, project-management clutter, and overwhelming dashboards. The goal is useful guidance with as little friction as possible.",

         mkSection: {
            title: "Life + Schedule Intelligence",

            copy:
               "The current ALLEVIN architecture separates conversational interpretation from factual schedule truth. Natural language is useful for understanding what a person means, but dates, recurring commitments, relative routines, exceptions, completion state, and time calculations are resolved by deterministic application logic.\n\nThat separation lets ALLEVIN feel conversational without asking the language model to invent calendar state. The same life model then powers Up Next guidance, calendar readbacks, Coming Up, temporary schedule changes, and recommendations based on the time that is actually available.",
         },

         architecturePrinciple: {
            title: "Architecture Principle",
            copy: "The LLM interprets and phrases; deterministic ALLEVIN state, date, and schedule logic owns truth.",
         },

         architectureFlow: {
            title: "Server-Side Notification Flow",
            description:
               "ALLEVIN can deliver scheduled reminders even when the installed iPhone PWA is closed. Notification plans are stored server-side, claimed atomically when due, and delivered through Web Push with duplicate protection.",
            steps: [
               "iPhone PWA",
               "Web Push subscription",
               "ALLEVIN notification plan",
               "Upstash Redis",
               "Cloudflare Worker scheduler",
               "Vercel server endpoint",
               "Web Push / VAPID",
               "iPhone notification",
            ],
         },

         capabilities: [
            {
               title: "Natural-language schedule editing",
               description:
                  "Turns everyday phrases about meetings, appointments, early departures, and other changes into structured schedule updates while preserving deterministic date and time handling.",
            },
            {
               title: "Relative routine modeling",
               description:
                  "Supports routines that happen before or after commitments so dependent parts of the day can move when the underlying commitment changes.",
            },
            {
               title: "Schedule exceptions",
               description:
                  "Separates the normal recurring week from one-off events, temporary changes, skips, cancellations, completions, and other day-specific state.",
            },
            {
               title: "Context-aware Up Next",
               description:
                  "Uses the actual current day, remaining commitments, recent choices, available time, and user preferences to surface the most useful next guidance.",
            },
            {
               title: "Adaptive lifestyle recommendations",
               description:
                  "Suggests useful ways to spend available time without forcing every interest or routine into a rigid task list.",
            },
            {
               title: "Deterministic calendar readbacks",
               description:
                  "Keeps date-aware schedule responses grounded in application state instead of relying on the language model to decide factual calendar truth.",
            },
            {
               title: "Two-phase reminders",
               description:
                  "Plans a preparation reminder before an item based on deterministic importance and a second reminder when the item actually begins.",
            },
            {
               title: "Closed-app Web Push",
               description:
                  "Uses a service worker, VAPID, Redis-backed notification plans, a minute-level Cloudflare scheduler, and Vercel server routes to deliver reminders when the PWA is not open.",
            },
            {
               title: "Atomic notification claiming",
               description:
                  "Uses Redis claiming and duplicate protection so overlapping scheduler executions do not repeatedly send the same reminder.",
            },
            {
               title: "Mobile-first PWA experience",
               description:
                  "Includes first-run onboarding, installable PWA behavior, responsive refinement, and a calm one-page interface designed around everyday phone use.",
            },
         ],

         myRole: [
            "I designed and built ALLEVIN as a solo product engineer, owning the product direction, interaction model, frontend architecture, deterministic life and schedule engine, conversational layer, PWA behavior, notification infrastructure, testing, and deployment.",
            "A major engineering decision was separating language understanding from schedule truth. The model helps interpret what a user means and phrase useful responses, while deterministic TypeScript logic owns dates, recurrence, relative routines, exceptions, completion state, and the final schedule represented by the product.",
            "I also designed the server-side reminder system end to end, including notification planning, Redis-backed due state, atomic claiming, duplicate protection, a minute-level Cloudflare Worker scheduler, Vercel server routes, service-worker delivery, and Web Push/VAPID authentication.",
         ],

         engineeringHighlights: [
            "Built natural-language schedule editing with deterministic parsing before LLM fallback",
            "Designed recurring commitments and routines that can be positioned relative to other schedule items",
            "Implemented date-aware calendar readbacks and day-specific schedule exception handling",
            "Built context-aware Up Next guidance and adaptive lifestyle recommendations",
            "Created first-run onboarding and an installable mobile-first Progressive Web App experience",
            "Built server-side Web Push using service workers, VAPID, Upstash Redis, Cloudflare Workers, and Vercel server routes",
            "Implemented two-phase reminder planning with preparation and start-time notifications",
            "Added atomic Redis claiming and duplicate-notification protection for overlapping scheduler runs",
         ],

         designPrinciples: [
            "Understand the day before suggesting the next move.",
            "Conversation should change state, not create another inbox.",
            "Deterministic schedule logic owns truth.",
            "Adapt the day without rewriting the normal routine.",
            "Useful guidance should not require gamification.",
            "The assistant should help without becoming intrusive.",
         ],

         portfolioSummary: [
            "ALLEVIN demonstrates my ability to design and engineer a consumer product whose simple interface sits on top of deeper schedule, state, notification, and conversational systems.",
            "The current product combines human-centered UX, deterministic scheduling, natural-language interaction, local-first life state, Progressive Web App behavior, server-side notification infrastructure, and production deployment in a system built to help real people navigate everyday changes with less friction.",
         ],

         currentStatus:
            "ALLEVIN is live and undergoing active testing as a schedule-aware personal life assistant. Current work focuses on validating conversational schedule changes, adaptive daily guidance, reminder timing and reliability, mobile PWA behavior, and the balance between useful assistance and a calm, non-intrusive experience.",

         metadata: {
            status: "Live / Active Testing",

            stack:
               "Next.js 16 · React · TypeScript · OpenAI API · Deterministic schedule engine · PWA · Service Worker · Web Push · VAPID · Upstash Redis · Cloudflare Workers · Vercel · GitHub",

            role: "Product Strategy · UX · Frontend Engineering · Schedule Architecture · Notification Infrastructure · Testing · Deployment",
         },
      },
   },

   {
      id: "frontoffice",

      name: "FrontOffice",

      subtitle: "Built by Kin · Multi-Sport GM Social Platform",

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
