"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import projectConstants from "@/constants";
import { motion } from "framer-motion";
import { AppleIcon, ExternalLink, Github, PlayIcon } from "lucide-react";
import Image from "next/image";


export default function Projects() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectConstants.featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="overflow-hidden group cursor-pointer h-full">
                <div className="relative overflow-hidden">
                  <Image
                    width={500}
                    height={500}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project?.links?.play && <Button
                        onClick={() => window.open(project?.links?.play, "_blank")}
                        variant="outline" size="sm">
                        <PlayIcon className="mr-2 h-4 w-4" />
                        Play Store
                      </Button>}
                      {project?.links?.apple && <Button
                        onClick={() => window.open(project?.links?.apple, "_blank")}
                        variant="outline" size="sm">
                        <AppleIcon className="mr-2 h-4 w-4" />
                        App Store
                      </Button>}
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="h-120">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}