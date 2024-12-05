"use client";

import { AdmissionAssistCover } from "@/assets/ImagePath";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import projectConstants from "@/constants";
import { motion } from "framer-motion";
import { AppleIcon, PlayIcon } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 2,
    title: "Admissions Assist",
    description: "Admissions Assist is a comprehensive mobile application that simplifies the college admissions process. It provides students with resources and tools to research colleges, track application deadlines, and submit applications.",
    image: AdmissionAssistCover,  // Replace with the actual image link
    links: {
      apple: "https://apps.apple.com/us/app/admissions-assist/id6478013507",
      play: "https://play.google.com/store/apps/details?id=com.admissionsassist",
    },
    link: "https://play.google.com/store/apps/details?id=com.admissionsassist",
    github: "https://github.com/developer/admissions-assist", // Hypothetical link
    live: "https://play.google.com/store/apps/details?id=com.admissionsassist",
    tags: ["Android", "Education", "Admissions", "College", "Tracking"]
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