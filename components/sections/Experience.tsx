"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Tech Innovators Inc",
    position: "Senior React Native Developer",
    period: "2021 - Present",
    description: "Led the development of multiple successful mobile applications, mentored junior developers, and implemented best practices for React Native development.",
    achievements: [
      "Reduced app load time by 40% through performance optimizations",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Led team of 5 developers across 3 major projects"
    ]
  },
  {
    company: "Mobile Solutions Co",
    position: "React Native Developer",
    period: "2019 - 2021",
    description: "Developed and maintained cross-platform mobile applications for various clients in fintech and e-commerce sectors.",
    achievements: [
      "Built and launched 4 successful mobile applications",
      "Integrated complex payment systems and real-time features",
      "Improved app store ratings from 3.8 to 4.6"
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
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
                        {exp.position}
                      </CardTitle>
                      <p className="text-muted-foreground group-hover:text-primary/80 transition-colors">
                        {exp.company}
                      </p>
                    </div>
                    <Badge variant="secondary" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 group-hover:text-foreground/90 transition-colors">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li 
                        key={i} 
                        className="text-muted-foreground group-hover:text-foreground/70 transition-colors"
                      >
                        {achievement}
                      </li>
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