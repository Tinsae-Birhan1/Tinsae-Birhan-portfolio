"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, MapPin, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

const stack = ["NestJS", "Python", "ERPNext", "React", "TypeScript", "Docker"];

export default function HeroVisual() {
  const initials = siteConfig.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="grid grid-cols-2 gap-3">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="bento-card col-span-2 flex items-center gap-4 p-5"
      >
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-violet-500 text-xl font-bold text-background">
          {initials}
        </div>
        <div>
          <p className="text-lg font-semibold">{siteConfig.name}</p>
          <p className="text-sm text-accent">{siteConfig.title}</p>
          <p className="mt-1 flex items-center gap-1 text-xs text-muted">
            <MapPin size={12} />
            Remote ready
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
        className="bento-card p-4"
      >
        <Briefcase size={18} className="mb-2 text-accent" />
        <p className="text-2xl font-bold">US + Global</p>
        <p className="text-xs text-muted">Remote experience</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
        className="bento-card p-4"
      >
        <Sparkles size={18} className="mb-2 text-gold" />
        <p className="text-2xl font-bold">1×</p>
        <p className="text-xs text-muted">Hackathon win</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65 }}
        className="bento-card col-span-2 p-4"
      >
        <div className="mb-3 flex items-center gap-2">
          <Code2 size={16} className="text-accent" />
          <span className="text-xs font-medium uppercase tracking-wider text-muted">
            Core stack
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + i * 0.06 }}
              className="rounded-lg border border-border bg-background/80 px-2.5 py-1 text-xs font-medium"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
