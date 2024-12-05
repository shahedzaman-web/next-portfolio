"use client";

import { Button } from "@/components/ui/button";

const filters = [
  { id: "all", label: "All Projects" },
  { id: "fitness", label: "Fitness" },
  { id: "ecommerce", label: "E-commerce" },
  { id: "social", label: "Social Media" }
];

export default function ProjectFilters({ 
  activeFilter, 
  onFilterChange 
}: { 
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-4 justify-center mb-8">
      {filters.map((filter) => (
        <Button
          key={filter.id}
          variant={activeFilter === filter.id ? "default" : "outline"}
          onClick={() => onFilterChange(filter.id)}
          className="transition-all"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}