"use client";

import { motion } from "framer-motion";
import { siteConfig, certificates } from "@/data/site";
import CodeSectionHeader from "@/components/ui/CodeSectionHeader";
import CodeWindow from "@/components/ui/CodeWindow";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-max">
        <CodeSectionHeader
          file="about/README.md"
          title="An engineer who understands business, not just code"
        />

        <div className="grid items-start gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <p className="mb-4 leading-relaxed text-muted">{siteConfig.bio}</p>
            <p className="leading-relaxed text-muted">
              {siteConfig.aboutContinued}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <CodeWindow filename="highlights.json">
              <ul className="space-y-2.5 font-mono text-xs">
                {siteConfig.aboutHighlights.map((item) => (
                  <li key={item} className="flex gap-2 text-muted">
                    <span className="text-accent">+</span>
                    <span className="text-syntax-string">&quot;{item}&quot;</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 border-t border-border pt-4">
                {certificates.map((cert) => (
                  <p key={cert.title} className="mb-1 font-mono text-[11px] text-muted">
                    <span className="text-gold">★</span> {cert.title}
                  </p>
                ))}
              </div>
            </CodeWindow>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
