"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import CodeWindow from "@/components/ui/CodeWindow";

const stack = ["NestJS", "Python", "ERPNext", "React", "TypeScript"];

export default function HeroCodePanel() {
  return (
    <CodeWindow filename="~/src/developer.ts">
      <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed md:text-xs">
        <code>
          <span className="text-syntax-keyword">const</span>{" "}
          <span className="text-syntax-variable">developer</span>{" "}
          <span className="text-syntax-keyword">=</span> {"{\n"}
          {"  "}
          <span className="text-syntax-property">name</span>:{" "}
          <span className="text-syntax-string">&quot;{siteConfig.name}&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-syntax-property">role</span>:{" "}
          <span className="text-syntax-string">&quot;{siteConfig.title}&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-syntax-property">status</span>:{" "}
          <span className="text-syntax-string">&quot;open_to_work&quot;</span>,
          {"\n"}
          {"  "}
          <span className="text-syntax-property">stack</span>: [
          {stack.map((t, i) => (
            <span key={t}>
              <span className="text-syntax-string">&quot;{t}&quot;</span>
              {i < stack.length - 1 ? ", " : ""}
            </span>
          ))}
          ],{"\n"}
          {"  "}
          <span className="text-syntax-function">contact</span>
          <span className="text-foreground">() {"=>"}</span>{" "}
          <span className="text-syntax-string">&quot;Let&apos;s build!&quot;</span>
          {"\n"}
          {"};"}
        </code>
      </pre>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-4 flex items-center gap-2 border-t border-border pt-3 font-mono text-[10px]"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
        <span className="text-accent">TypeScript</span>
        <span className="text-muted">·</span>
        <span className="text-muted">compiling...</span>
        <span className="ml-auto text-syntax-comment">Ln 12, Col 1</span>
      </motion.div>
    </CodeWindow>
  );
}
