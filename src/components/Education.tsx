"use client";

import { motion } from "framer-motion";
import { competitiveProgramming, education } from "@/data/site";
import CodeSectionHeader from "@/components/ui/CodeSectionHeader";

export default function Education() {
  return (
    <section id="education" className="section-padding border-t border-border">
      <div className="container-max">
        <CodeSectionHeader
          file="education/degrees.ts"
          title="Education & competitive programming"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.div
              key={`${item.school}-${item.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card"
            >
              <p className="mb-2 font-mono text-[10px] text-syntax-comment">
                export const {item.type === "degree" ? `degree_${index + 1}` : `program_${index + 1}`}
              </p>
              {item.type === "program" && (
                <span className="mb-2 inline-block rounded-md border border-border bg-surface-elevated px-2 py-0.5 font-mono text-[10px] text-muted">
                  training program
                </span>
              )}
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-1 font-mono text-sm text-accent">{item.school}</p>
              <p className="mt-1 font-mono text-xs text-muted">{item.period}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: education.length * 0.1 }}
            className="card md:col-span-2"
          >
            <p className="mb-2 font-mono text-[10px] text-syntax-comment">
              export const competitiveProgramming
            </p>
            <h3 className="text-lg font-semibold">{competitiveProgramming.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {competitiveProgramming.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
