"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/site";
import CodeSectionHeader from "@/components/ui/CodeSectionHeader";

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="container-max">
        <CodeSectionHeader
          file="experience/git-log.txt"
          title="Where I&apos;ve made impact"
          subtitle="4.5+ years across startups, remote agencies, and enterprise projects."
        />

        <div className="relative">
          <div className="timeline-line absolute left-[7px] top-2 hidden h-[calc(100%-2rem)] w-px md:block" />

          <div className="space-y-6">
            {experience.map((job, index) => (
              <motion.div
                key={`${job.company}-${job.period}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative md:pl-10"
              >
                <div className="absolute left-0 top-6 hidden h-3.5 w-3.5 rounded-full border-2 border-accent bg-background md:block" />

                <div className="card">
                  <p className="mb-2 font-mono text-[10px] text-syntax-comment">
                    commit{" "}
                    <span className="text-syntax-variable">
                      {job.company.toLowerCase().replace(/\s/g, "-").slice(0, 8)}
                    </span>{" "}
                    | {job.period}
                  </p>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="text-gradient font-mono text-sm">{job.company}</p>
                      <p className="mt-1 font-mono text-xs text-muted">{job.location}</p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {job.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex gap-2 font-mono text-xs leading-relaxed text-muted"
                      >
                        <span className="text-accent">+</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
