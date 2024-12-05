"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { TextGradient } from "@/components/animations/TextGradient";
import Link from "next/link";
import projectConstants from "@/constants";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-black/95">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="container px-4 mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* <div className="items-center justify-center   rounded-full ">
            <img src={projectConstants.avatar} className="w-24 h-24  rounded-full" alt="Avatar" />
            </div> */}

          <h1 className="lg:text-7xl md:text-5xl text-2xl font-bold my-6">
            <TextGradient>{projectConstants.name} Developer</TextGradient>
          </h1>
          <motion.h2
            className="text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {projectConstants.title}
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-lg mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
           {projectConstants.description}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link href="/projects">
              <Button className="px-8">View All Projects</Button>
            </Link>
            <div className="flex gap-4">
              <Button 
                onClick={() => window.open(projectConstants.github, "_blank")}
              variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                onClick={() => window.open(projectConstants.linkedin, "_blank")}
              variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                onClick={() => window.location.href = `mailto:${projectConstants.email}`}
              variant="outline" size="icon" className="hover:scale-110 transition-transform">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-muted-foreground"
        >
          ↓ Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}