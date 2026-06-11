"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string | null;
  index: number;
};

export default function ProjectCard({
  title,
  description,
  tags,
  github,
  live,
  index,
}: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group rounded-lg border border-border bg-surface transition-shadow hover:border-accent/40 hover:shadow-[0_0_30px_rgba(63,185,80,0.12)]"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-xs text-muted">
          {title.toLowerCase().replace(/ /g, "_")}/index.tsx
        </span>
      </div>

      <div className="p-5">
        <h3 className="mb-2 font-mono text-base font-semibold text-syntax-function">
          export const {title.replace(/ /g, "")}
        </h3>
        <p className="mb-4 font-mono text-xs leading-relaxed text-muted">
          <span className="text-syntax-comment">{"// "}</span>
          {description}
        </p>

        <div className="mb-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 border-t border-border pt-3">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            <Github size={14} />
            git clone
          </a>
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-accent"
            >
              <ExternalLink size={14} />
              npm start
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
