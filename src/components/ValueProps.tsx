"use client";

import { motion } from "framer-motion";
import { Cpu, Globe, Layers, Rocket, Shield, Wallet } from "lucide-react";
import { valueProps } from "@/data/site";
import CodeSectionHeader from "@/components/ui/CodeSectionHeader";

const icons = {
  rocket: Rocket,
  layers: Layers,
  cpu: Cpu,
  globe: Globe,
  wallet: Wallet,
  shield: Shield,
};

export default function ValueProps() {
  return (
    <section className="section-padding">
      <div className="container-max">
        <CodeSectionHeader
          file="why_contact_me.ts"
          title="What you get when you bring me on your team"
        />

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((prop, i) => {
            const Icon = icons[prop.icon as keyof typeof icons];
            return (
              <motion.div
                key={prop.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                whileHover={{ y: -6 }}
                className="card group"
              >
                <p className="mb-3 font-mono text-[10px] text-syntax-comment">
                  export const {prop.icon}
                </p>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-border bg-background/80">
                  <Icon size={22} className="text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{prop.title}</h3>
                <p className="text-sm leading-relaxed text-muted">
                  {prop.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
