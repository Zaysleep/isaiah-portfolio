/*
   projects.ts
   -----------
   This file stores the content for the portfolio project cards.

   Why this file exists:
   - Keeps project content separate from the UI components.
   - Makes it easier to update descriptions, links, images, and tech tags later.
   - Lets ProjectSection and ProjectCard stay reusable instead of hardcoding
     ALLEVIN and FrontOffice directly inside the components.

   How it connects:
   - ProjectSection imports the `projects` array.
   - ProjectCard receives each project as a prop.
   - The card uses this data to render the title, image, status, tags,
     live link, and expanded details.
*/

/*
   Project type
   ------------
   This defines the shape of each project object.

   TypeScript uses this to help catch mistakes early.
   Example:
   - If a project is missing `name`, TypeScript will warn us.
   - If `techTags` is not an array of strings, TypeScript will warn us.
*/
export type Project = {
   /*
      Unique project ID.
      Used for React keys and for connecting each card to its expandable
      details panel with aria-controls.
   */
   id: string;

   // Main project name shown on the card.
   name: string;

   // Short label that explains the type of project.
   subtitle: string;

   // Visible project status shown on the card.
   status: string;

   /*
      Accessibility label for the status.
      This gives screen readers a clearer version of the status meaning.
   */
   statusLabel: string;

   // Short card description.
   description: string;

   /*
      Image path from the public folder.
      Example:
      public/images/allevin-preview.png
      becomes:
      /images/allevin-preview.png
   */
   image: string;

   // Small technology badges shown on each project card.
   techTags: string[];

   /*
      External project link.
      Use "#" as a placeholder when a project is not deployed yet.
   */
   liveUrl: string;

   // Button text for the primary action.
   liveActionLabel: string;

   /*
      Expanded project details.
      These appear when the user clicks "View Details" or the card body.
   */
   details: {
      // Quick explanation of what the project is.
      overview: string;

      // Optional problem statement. Not every project has to use this.
      problem?: string;

      // Optional core idea or slogan.
      coreIdea?: string;

      // Bullets explaining what the build focuses on.
      developmentFocus: string[];

      // Tech stack summary shown inside the details panel.
      techStack: string;

      // Detailed status shown inside the details panel.
      status: string;
   };
};

/*
   Featured projects
   -----------------
   These are the two main portfolio projects shown on the page.

   Current portfolio focus:
   1. ALLEVIN — AI-assisted adaptive project workspace
   2. FrontOffice — sports GM and social hub concept

   To add another project later:
   - Copy one project object.
   - Give it a new id, name, image, and details.
   - The UI will automatically render it in the project board.
*/
export const projects: Project[] = [
   {
      id: "allevin",
      name: "ALLEVIN",
      subtitle: "AI-Assisted Adaptive Workspace",
      status: "Live / In Testing",
      statusLabel: "Live AI-assisted project workspace currently in testing",

      /*
         Short description shown directly on the card.
         This gives visitors the quick version before they open the details.
      */
      description: "An AI-assisted adaptive project workspace that keeps projects, materials, writing, schedules, and next steps connected in one calm interface.",

      image: "/images/allevin-preview.png",

      /*
         These tags are intentionally short.
         They quickly show the stack without turning the card into a résumé.
      */
      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel"],

      liveUrl: "https://allevin.vercel.app/",
      liveActionLabel: "View Live App",

      details: {
         /*
            Overview:
            This explains what ALLEVIN is in plain language.
            It frames the project as more than a task board or chatbot.
         */
         overview: "ALLEVIN is an AI-assisted adaptive project workspace that helps users keep their projects, materials, writing, schedule, and next steps connected in one calm interface.",

         /*
            Problem:
            This explains why the project exists.
            The focus is on reducing scattered tools, clutter, and context switching.
         */
         problem:
            "Many productivity tools separate planning, writing, research materials, schedules, and next actions into different places. ALLEVIN explores how an adaptive single-page workspace can reduce that friction and help users stay focused without feeling overwhelmed.",

         /*
            Core idea:
            This highlights the AI angle clearly.
            The point is that ALLEVIN is not just a chatbot sitting next to a page;
            the assistant layer works from the user's active project context.
         */
         coreIdea: "Unlike a standalone chatbot, ALLEVIN’s assistant layer works from the user’s active project context to support the work already in motion.",

         /*
            Development focus:
            These bullets explain the thought process behind the build:
            - what problems the project is solving
            - what UX choices matter
            - what technical areas were practiced
         */
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

         techStack: "Next.js, TypeScript, React, Tailwind CSS, Vercel",
         status: "Live / In Testing",
      },
   },
   {
      id: "frontoffice",
      name: "FrontOffice",
      subtitle: "Multi-Sport GM Social Hub",
      status: "In Development",
      statusLabel: "Project currently in development",

      /*
         Short description shown directly on the card.
         This keeps the concept understandable before users open the full details.
      */
      description: "A multi-sport GM platform where fans manage teams, make moves, post hot takes, debate in War Rooms, and keep receipts on their calls.",

      image: "/images/frontoffice-preview.png",

      techTags: ["Next.js", "TypeScript", "Tailwind CSS", "React", "API-Ready"],

      /*
         FrontOffice is still in development.
         Keeping "#" here makes the card button appear disabled until the
         project has a deployed Vercel link.
      */
      liveUrl: "#",
      liveActionLabel: "View Concept",

      details: {
         /*
            Overview:
            This explains the product idea in a way that is easy for both
            sports fans and hiring reviewers to understand.
         */
         overview: "FrontOffice is a responsive multi-sport GM/social hub where fans can feel like they are managing their favorite teams across football, soccer, NBA, and baseball.",

         /*
            Core idea:
            This is the product slogan and the main emotional hook.
         */
         coreIdea: "Be the GM. Make the call. Keep the receipts.",

         /*
            Problem:
            This explains the behavior FrontOffice is built around:
            fans already debate sports decisions everywhere, but those takes
            usually disappear into group chats and timelines.
         */
         problem: "Sports fans already debate trades, lineups, contracts, signings, player movement, and hot takes across group chats and social platforms. FrontOffice gives those conversations structure, memory, and a social GM-style experience.",

         /*
            Development focus:
            These bullets show how the concept becomes a real product system.
         */
         developmentFocus: [
            "Team Manager Switcher",
            "Multi-sport responsive UI",
            "Move Desk for trades, transfers, free agency, and roster decisions",
            "Hot Takes",
            "War Room discussions",
            "Receipts Vault",
            "Comment and reaction system",
            "API-ready architecture for live news, stats, standings, injuries, transactions, transfers, and performance trends",
         ],

         techStack: "Next.js, TypeScript, React, Tailwind CSS, Vercel",
         status: "In Development",
      },
   },
];
