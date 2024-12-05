"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import projectConstants from "@/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/20 py-12">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">{projectConstants.name}</h3>
            <p className="text-muted-foreground">
              Crafting exceptional mobile experiences with React Native.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="/" className="hover:text-foreground transition-colors">Home</a>
              </li>
              <li>
                <a href="/projects" className="hover:text-foreground transition-colors">Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>{projectConstants.email}</li>
              <li>{projectConstants.phone}</li>
              <li>{projectConstants.address}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <Button
                onClick={() => window.open(projectConstants.github, "_blank")}
                variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button
                onClick={() => window.open(projectConstants.linkedin, "_blank")}
                variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
              </Button>

              <Button
                onClick={() => window.location.href = `mailto:${projectConstants.email}`}
                variant="ghost" size="icon">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {projectConstants.name} Developer. All rights reserved.
          </p>
         
        </div>
      </div>
    </footer>
  );
}