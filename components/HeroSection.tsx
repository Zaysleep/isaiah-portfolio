import Image from "next/image";

/*
   HeroSection
   -----------
   This is the first section visitors see when they land on the portfolio.

   Purpose:
   - Introduce Isaiah quickly.
   - Show personality without sounding too casual.
   - Explain the type of problems Isaiah likes solving.
   - Guide users naturally toward the Projects section.

   Design direction:
   - Warm editorial / scrapbook feel.
   - Large name for immediate recognition.
   - Human image card to make the portfolio feel personal.
   - Simple CTA that keeps users on the same page.
*/

export default function HeroSection() {
   return (
      <section id="home" className="mx-auto grid min-h-[calc(100vh-80px)] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
         {/* Left side: intro copy */}
         <div className="flex flex-col items-start gap-6">
            {/* Small warm accent to make the intro feel more personal */}
            <p className="rotate-[-2deg] rounded-full border border-[#E7DCCB] bg-white px-4 py-2 text-sm font-medium text-[#C2410C] shadow-sm">Hey there!</p>

            {/* Main identity block */}
            <div className="space-y-4">
               <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.04em] text-[#111827] md:text-7xl lg:text-8xl">Isaiah Brown</h1>

               <p className="text-xl font-semibold text-[#1E40AF] md:text-2xl">Software Developer & UX-Focused Builder</p>
            </div>

            {/* Main intro statement */}
            <p className="max-w-2xl text-lg leading-8 text-[#5B6475] md:text-xl">I build responsive web apps that take busy ideas, messy workflows, and “wait, this could be better” moments and turn them into clean, useful experiences.</p>

            {/* Thought-process statement */}
            <p className="max-w-2xl text-base leading-7 text-[#5B6475]">
               My approach is simple: understand the problem, reduce the clutter, and build something people can actually use. Clean code matters, but clean experiences are what make the work stick.
            </p>

            {/* Same-page scroll link to Projects */}
            <a href="#projects" className="mt-2 inline-flex min-h-11 items-center rounded-full bg-[#1E40AF] px-6 py-3 text-sm font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#1B3899] focus-visible:outline-[#1E40AF]">
               View Projects ↓
            </a>
         </div>

         {/* Right side: profile image / scrapbook card */}
         <div className="relative mx-auto w-full max-w-sm md:max-w-md">
            {/* Decorative tape accent above the photo card */}
            <div className="absolute -top-5 left-1/2 z-10 h-10 w-32 -translate-x-1/2 rotate-[-4deg] rounded-sm border border-[#E7DCCB] bg-[#FFF8EE]/90 shadow-sm" aria-hidden="true" />

            {/* Profile card */}
            <div className="relative rotate-[2deg] rounded-[2rem] border border-[#E7DCCB] bg-white p-4 shadow-xl">
               {/* 
                  Profile image:
                  The image file should live in:
                  public/images/profile.png

                  If your actual file name is different, update the src below.
                  Example:
                  src="/images/profile.jpg"
               */}
               <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#FFF8EE]">
                  <Image src="/images/profile.png" alt="Portrait of Isaiah Brown" fill priority sizes="(max-width: 768px) 100vw, 420px" className="object-cover object-center" />
               </div>

               {/* Small note under image */}
               <div className="mt-4 flex items-center justify-between gap-4">
                  <p className="max-w-[13rem] rotate-[-1deg] text-sm font-medium text-[#C2410C]">Building better tools for real people.</p>

                  {/* Small visual dot. Hidden from screen readers because the note already carries the meaning. */}
                  <div className="h-3 w-3 rounded-full bg-[#15803D]" aria-hidden="true" />
               </div>
            </div>

            {/* Decorative badge for the scrapbook feel */}
            <div className="absolute -bottom-6 -left-4 hidden rounded-full border border-[#E7DCCB] bg-[#FFF8EE] px-4 py-2 text-sm font-medium text-[#5B6475] shadow-sm sm:block" aria-hidden="true">
               UX + Code
            </div>
         </div>
      </section>
   );
}
