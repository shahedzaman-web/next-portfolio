"use client";

import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import { FadeIn } from "@/components/animations/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />
      <FadeIn>
        <Projects />
      </FadeIn>
      <FadeIn delay={0.2}>
        <Experience />
      </FadeIn>
      <FadeIn delay={0.4}>
        <Skills />
      </FadeIn>
      <FadeIn delay={0.6}>
        <Contact />
      </FadeIn>
      <Footer />
    </main>
  );
}