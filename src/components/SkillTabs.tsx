"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  skillCategories,
  skillsByCategory,
  type SkillCategory,
} from "@/data/skills";
import CodeWindow from "@/components/ui/CodeWindow";
import SkillIcon from "@/components/SkillIcon";

function categoryFilename(category: string) {
  return `stack/${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.ts`;
}

export default function SkillTabs() {
  const [active, setActive] = useState<SkillCategory>(skillCategories[0]);
  const activeSkills = skillsByCategory[active] ?? [];

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        {skillCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`rounded-lg border px-3 py-1.5 font-mono text-xs transition-all ${
              active === category
                ? "border-accent/50 bg-accent-soft text-accent"
                : "border-border bg-surface text-muted hover:border-accent/30 hover:text-foreground"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <CodeWindow filename={categoryFilename(active)}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {activeSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3 py-2.5 transition-all hover:border-accent/25 hover:bg-accent-soft/20"
                >
                  <SkillIcon name={skill.name} icon={skill.icon} size={22} />
                  <span className="font-mono text-xs text-syntax-string">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </CodeWindow>
    </div>
  );
}
