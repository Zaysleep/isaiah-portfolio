/*
   ContactCard
   -----------
   This component renders one contact option in the Contact section.

   Used for:
   - Resume
   - GitHub
   - LinkedIn
   - Email

   Why this is reusable:
   - ContactSection only needs to pass label, description, href, and link behavior.
   - This keeps the card UI consistent across every contact option.
*/

type ContactCardProps = {
   // Main card title, such as "Resume" or "GitHub".
   label: string;

   // Short helper text that explains what the user will find there.
   description: string;

   // Link destination.
   href: string;

   /*
      Controls whether the link opens in a new tab.
      External links like GitHub, LinkedIn, and Resume should usually be true.
      Email can stay false because mailto links open the user's email app.
   */
   isExternal?: boolean;
};

export default function ContactCard({ label, description, href, isExternal = true }: ContactCardProps) {
   return (
      <a
         href={href}
         target={isExternal ? "_blank" : undefined}
         rel={isExternal ? "noreferrer" : undefined}
         aria-label={`${label}: ${description}`}
         className="group flex min-h-36 flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 focus-visible:outline-white"
      >
         {/* Card text */}
         <div>
            <h3 className="text-xl font-bold text-[#F8FAFC]">{label}</h3>

            <p className="mt-2 text-sm leading-6 text-[#CBD5E1]">{description}</p>
         </div>

         {/* 
            Action label:
            Changes slightly for Email so it feels more natural than "Open".
         */}
         <span className="mt-6 text-sm font-medium text-[#F8FAFC] transition group-hover:translate-x-1">{label === "Email" ? "Send a note →" : "Open →"}</span>
      </a>
   );
}
