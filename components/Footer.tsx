/*
   Footer
   ------
   This is the final element on the page after the Contact section.

   Purpose:
   - Close the portfolio cleanly.
   - Show ownership of the site.
   - Mention the build/deployment stack in a subtle way.
   - Give users an easy way to jump back to the top.
*/

export default function Footer() {
   // Keeps the copyright year current automatically.
   const currentYear = new Date().getFullYear();

   return (
      <footer className="border-t border-white/10 bg-[#0B1020] px-6 py-8">
         <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-[#CBD5E1] md:flex-row md:items-center md:justify-between">
            {/* Small build credit */}
            <p>© {currentYear} Isaiah Brown. Designed, built, and deployed with Next.js, GitHub, and Vercel.</p>

            {/* Same-page link back to the hero section */}
            <a href="#home" className="w-fit rounded-full px-3 py-2 font-medium text-[#F8FAFC] transition hover:bg-white/10 focus-visible:outline-white">
               Back to top ↑
            </a>
         </div>
      </footer>
   );
}
