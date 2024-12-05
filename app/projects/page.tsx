"use client";

import { FadeIn } from "@/components/animations/FadeIn";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectFilters from "@/components/projects/ProjectFilters";
import { useState } from "react";
import Footer from "@/components/layout/Footer";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  return (
    <main className="min-h-screen bg-black">
      <div className="container px-4 mx-auto py-20">
        <FadeIn>
          <h1 className="text-4xl font-bold mb-8 text-center">All Projects</h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
            Explore my complete portfolio of mobile applications, showcasing expertise
            in React Native development and cross-platform solutions.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </FadeIn>

        <FadeIn delay={0.4}>
          <ProjectGrid filter={activeFilter} />
        </FadeIn>
      </div>
      <Footer />
    </main>
  );
}