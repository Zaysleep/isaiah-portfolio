/*
   Footer
   ------
   This is the final element on the page after the Contact section.

   Purpose:
   - Close the portfolio cleanly.
   - Show ownership of the site.
   - Connect the portfolio to Kin Software LLC.
   - Mention the build/deployment stack in a subtle way.
   - Give users an easy way to jump back to the top.

   Design direction:
   - Uses the same soft ink navy as the Contact section.
   - This removes the visual break between Contact and Footer.
   - Secondary text stays muted while maintaining readable contrast.
*/

export default function Footer() {
   // Keeps the copyright year current automatically.
   const currentYear = new Date().getFullYear();

   return (
      <footer className="border-t border-white/10 bg-[#172033] px-6 py-8">
         <div className="mx-auto flex max-w-6xl flex-col gap-5 text-sm text-[#CBD5E1] md:flex-row md:items-end md:justify-between">
            {/* Ownership and development information */}
            <div className="space-y-2">
               <p>© {currentYear} Isaiah Brown. Designed, built, and deployed with Next.js, GitHub, and Vercel.</p>

               {/* Kin Software LLC connection */}
               <p className="text-[#94A3B8]">
                  Portfolio and projects developed under{" "}
                  <a href="https://kin-gold.vercel.app/" target="_blank" rel="noreferrer" className="font-medium text-[#F8FAFC] transition hover:text-white hover:underline focus-visible:outline-white">
                     Kin Software LLC
                  </a>
                  .
               </p>
            </div>

            {/* Same-page navigation back to the hero */}
            <a href="#home" className="w-fit font-medium text-[#F8FAFC] transition hover:text-white hover:underline focus-visible:outline-white">
               Back to top ↑
            </a>
         </div>
      </footer>
   );
}
