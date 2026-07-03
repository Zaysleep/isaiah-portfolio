import ContactCard from "@/components/ContactCard";

/*
   ContactSection
   --------------
   This is the final major section of the portfolio.

   Purpose:
   - Give visitors a clear way to continue after reviewing the projects.
   - Keep professional links grouped in one place.
   - Avoid repeating Resume, GitHub, LinkedIn, and Email in the hero section.
   - End the page with a clean, confident call to connect.

   Design direction:
   - Dark navy background creates a strong ending section.
   - Contact cards keep each action clear and easy to scan.
   - Links are simple, direct, and portfolio-friendly.
*/

const contactLinks = [
   {
      label: "Resume",
      description: "View the quick version of my experience, skills, and project work.",
      href: "/resume.pdf",
      isExternal: true,
   },
   {
      label: "GitHub",
      description: "Explore the code behind my projects and see what I’m building.",
      href: "https://github.com/zaysleep",
      isExternal: true,
   },
   {
      label: "LinkedIn",
      description: "Connect with me professionally and follow my next steps.",
      href: "https://www.linkedin.com/in/isaiah-brown-832b413bb/",
      isExternal: true,
   },
   {
      label: "Email",
      description: "Reach out directly for opportunities, feedback, or collaboration.",
      href: "mailto:zaydidntwakeup@gmail.com",
      isExternal: false,
   },
];

export default function ContactSection() {
   return (
      <section id="contact" className="bg-[#0B1020] px-6 py-20 md:py-28">
         <div className="mx-auto max-w-6xl">
            {/* Section intro */}
            <div className="mb-12 max-w-3xl">
               {/* Small label to match the scrapbook-style section markers */}
               <p className="w-fit rotate-[-2deg] rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-[#F8FAFC]">contact</p>

               <h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-[#F8FAFC] md:text-6xl">Let’s connect</h2>

               <p className="mt-4 text-lg leading-8 text-[#CBD5E1]">If the projects caught your eye, this is the next stop — resume, code, professional links, and a direct way to reach me.</p>
            </div>

            {/* Contact cards */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
               {contactLinks.map((link) => (
                  <ContactCard key={link.label} label={link.label} description={link.description} href={link.href} isExternal={link.isExternal} />
               ))}
            </div>
         </div>
      </section>
   );
}
