"use client";

import { useState } from "react";

/*
   Header
   ------
   This component controls the top navigation for the one-page portfolio.

   Purpose:
   - Keep navigation simple: Home, Projects, Contact.
   - Use smooth same-page anchor links instead of separate pages.
   - Provide a desktop nav and a mobile hamburger menu.
   - Keep the portfolio easy to scan without overloading the header.
*/

/*
   Navigation links
   ----------------
   Each href points to a section ID on the same page.
   Example:
   href="#projects" scrolls to <section id="projects">.
*/
const navLinks = [
   { label: "Home", href: "#home" },
   { label: "Projects", href: "#projects" },
   { label: "Contact", href: "#contact" },
];

export default function Header() {
   /*
      Tracks whether the mobile menu is open.
      Desktop navigation is always visible at medium screens and above.
   */
   const [isMenuOpen, setIsMenuOpen] = useState(false);

   /*
      Closes the mobile menu after a user clicks a link.
      This keeps the mobile experience clean after navigation.
   */
   function closeMenu() {
      setIsMenuOpen(false);
   }

   return (
      <header className="sticky top-0 z-50 border-b border-[#E7DCCB]/80 bg-[#FAF7F0]/90 backdrop-blur-md">
         <nav className="mx-auto flex min-h-20 max-w-6xl items-center justify-between px-6" aria-label="Main navigation">
            {/* Logo / name link */}
            <a href="#home" onClick={closeMenu} className="rounded-full text-lg font-bold tracking-tight text-[#111827] transition hover:text-[#1E40AF]" aria-label="Go to home section">
               Isaiah Brown
            </a>

            {/* Desktop navigation */}
            <div className="hidden items-center gap-2 md:flex">
               {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="rounded-full px-4 py-2 text-sm font-medium text-[#5B6475] transition hover:bg-white hover:text-[#111827] focus-visible:outline-[#1E40AF]">
                     {link.label}
                  </a>
               ))}
            </div>

            {/* 
               Mobile hamburger button:
               Uses aria-expanded so assistive technology can understand
               whether the mobile menu is currently open or closed.
            */}
            <button
               type="button"
               className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#E7DCCB] bg-white text-[#111827] transition hover:bg-[#FFF8EE] focus-visible:outline-[#1E40AF] md:hidden"
               aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
               aria-expanded={isMenuOpen}
               aria-controls="mobile-menu"
               onClick={() => setIsMenuOpen((current) => !current)}
            >
               <span className="sr-only">{isMenuOpen ? "Close navigation menu" : "Open navigation menu"}</span>

               {/* Animated hamburger lines */}
               <span className="flex flex-col gap-1.5" aria-hidden="true">
                  <span className={`block h-0.5 w-5 rounded-full bg-[#111827] transition ${isMenuOpen ? "translate-y-2 rotate-45" : ""}`} />
                  <span className={`block h-0.5 w-5 rounded-full bg-[#111827] transition ${isMenuOpen ? "opacity-0" : ""}`} />
                  <span className={`block h-0.5 w-5 rounded-full bg-[#111827] transition ${isMenuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
               </span>
            </button>
         </nav>

         {/* Mobile menu */}
         <div id="mobile-menu" className={`border-t border-[#E7DCCB] bg-[#FAF7F0] px-6 py-4 md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="mx-auto flex max-w-6xl flex-col gap-2">
               {navLinks.map((link) => (
                  <a key={link.href} href={link.href} onClick={closeMenu} className="rounded-2xl bg-white px-4 py-3 text-base font-medium text-[#111827] shadow-sm transition hover:bg-[#FFF8EE] focus-visible:outline-[#1E40AF]">
                     {link.label}
                  </a>
               ))}
            </div>
         </div>
      </header>
   );
}
