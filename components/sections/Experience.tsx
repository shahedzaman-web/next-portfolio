"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import projectConstants from "@/constants";

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {projectConstants.experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="group cursor-pointer border-2 border-transparent hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {exp?.position}
                      </CardTitle>
                      <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                        {exp?.company}
                      </p>
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {exp?.date}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 group-hover:text-foreground/90 transition-colors">{exp.description}</p>
                  <ul className="gap-3 flex flex-row items-center">
                    {exp?.tags?.map((tag, i) => (
                      <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors" key={i}>
                        {tag}
                      </Badge>

                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}