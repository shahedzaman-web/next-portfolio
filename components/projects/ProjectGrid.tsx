"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Health & Fitness App",
    description: "A comprehensive fitness tracking application with real-time workout monitoring and social features.",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&q=80",
    tags: ["React Native", "Redux", "Firebase", "Maps"],
    category: "fitness",
    links: {
      github: "https://github.com/username/fitness-app",
      live: "https://apps.apple.com/app/fitness"
    }
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured mobile shopping experience with AR product visualization.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tags: ["React Native", "TypeScript", "Stripe", "AR Kit"],
    category: "ecommerce",
    links: {
      github: "https://github.com/username/shop-app",
      live: "https://play.google.com/store/apps/shop"
    }
  },
  {
    title: "Social Media App",
    description: "Real-time social networking platform with video streaming capabilities.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["React Native", "WebRTC", "Socket.io", "AWS"],
    category: "social",
    links: {
      github: "https://github.com/username/social-app",
      live: "https://apps.apple.com/app/social"
    }
  }
];

export default function ProjectGrid({ filter = "all" }) {
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {filteredProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, i) => (
                  <Badge key={i} variant="secondary">{tag}</Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}