import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/*
   page.tsx
   --------
   This is the main page for the portfolio.

   Portfolio structure:
   1. Header
   2. Hero / Home section
   3. Projects section
   4. Contact section
   5. Footer

   This portfolio is intentionally built as a one-page experience.
   Navigation links scroll to sections instead of opening separate pages.
*/

export default function Home() {
   return (
      <>
         {/* Sticky top navigation */}
         <Header />

         {/* Main portfolio content */}
         <main className="min-h-screen bg-[#FAF7F0] text-[#111827]">
            {/* Intro section */}
            <HeroSection />

            {/* Featured project board */}
            <ProjectSection />

            {/* Resume, GitHub, LinkedIn, and email */}
            <ContactSection />
         </main>

         {/* Closing footer */}
         <Footer />
      </>
   );
}
