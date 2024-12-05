"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import projectConstants from "@/constants";
import { motion } from "framer-motion";
import { AppleIcon, PlayIcon } from "lucide-react";
import Image from "next/image";


export default function ProjectGrid() {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {projectConstants.projectList.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="overflow-hidden h-full flex flex-col">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="w-full h-48 object-cover "
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
                <Button
                  onClick={() => window.open(project?.links?.play, "_blank")}
                  variant="outline" size="sm">
                  <PlayIcon className="mr-2 h-4 w-4" />
                  Play Store
                </Button>
                <Button
                  onClick={() => window.open(project?.links?.apple, "_blank")}
                  variant="outline" size="sm">
                  <AppleIcon className="mr-2 h-4 w-4" />
                  App Store
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}