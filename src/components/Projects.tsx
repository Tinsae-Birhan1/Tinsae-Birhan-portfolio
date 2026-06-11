"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/site";
import CodeSectionHeader from "@/components/ui/CodeSectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-max">
        <CodeSectionHeader
          file="projects/index.ts"
          title="Projects that moved the needle"
          subtitle="Real products built for real businesses"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card card-shine group flex flex-col overflow-hidden !p-0"
            >
              <div className="flex items-center gap-2 border-b border-border bg-surface-elevated/50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-1 font-mono text-[10px] text-muted">
                  {project.title.toLowerCase().replace(/ /g, "_")}/index.tsx
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <div className="mb-3 flex items-start justify-between">
                  <span className="font-mono text-[10px] text-accent">
                    {project.company}
                  </span>
                  <span className="font-mono text-2xl font-bold text-border group-hover:text-accent/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mb-2 font-mono text-base font-semibold text-syntax-function">
                  export const {project.title.replace(/ /g, "")}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                  <span className="font-mono text-xs text-syntax-comment">
                    {"// "}
                  </span>
                  {project.description}
                </p>

                <div className="mb-4 rounded-lg border border-accent/15 bg-accent-soft/50 p-3">
                  <p className="font-mono text-[10px] text-accent">
                    {"// impact"}
                  </p>
                  <p className="mt-1 text-sm">{project.impact}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
