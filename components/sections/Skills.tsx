"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import projectConstants from "@/constants";

const skills = {
  "Mobile Development": [
    "React Native",
    "iOS Development",
    "Android Development",
    "Expo",
    "React Navigation"
  ],
  "Programming Languages": [
    "JavaScript",
    "TypeScript",
    "Swift",
    "Java"
  ],
  "State Management": [
    "Redux",
    "MobX",
    "Context API",
    "Recoil"
  ],
  "Tools & Others": [
    "Git",
    "Jest",
    "CI/CD",
    "Firebase",
    "AWS"
  ]
};

export default function Skills() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectConstants.skills.map(( items,key) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="group cursor-pointer hover:bg-black/40 transition-colors">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary transition-colors">
                    {items?.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.tags.map((skill, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Badge 
                          variant="secondary"
                          className="transition-all hover:bg-primary hover:text-primary-foreground"
                        >
                          {skill}
                        </Badge>
                      </motion.div>
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