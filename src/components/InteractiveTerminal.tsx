"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import {
  experience,
  navLinks,
  projects,
  siteConfig,
  skills,
} from "@/data/site";

type TerminalLine = {
  type: "input" | "output" | "error" | "success";
  text: string;
};

const ASCII_ART = `
 ████████╗██╗███╗   ██╗███████╗
 ╚══██╔══╝██║████╗  ██║██╔════╝
    ██║   ██║██╔██╗ ██║███████╗
    ██║   ██║██║╚██╗██║╚════██║
    ██║   ██║██║ ╚████║███████║
    ╚═╝   ╚═╝╚═╝  ╚═══╝╚══════╝`;

function runCommand(input: string): TerminalLine[] {
  const cmd = input.trim().toLowerCase();
  const [command, ...args] = cmd.split(" ");

  switch (command) {
    case "":
      return [];
    case "help":
      return [
        {
          type: "output",
          text: "Available commands:",
        },
        { type: "output", text: "  help          : show this menu" },
        { type: "output", text: "  whoami        : identity info" },
        { type: "output", text: "  neofetch      : system overview" },
        { type: "output", text: "  ls            : list sections" },
        { type: "output", text: "  cd <section>  : navigate (e.g. cd projects)" },
        { type: "output", text: "  skills        : tech stack" },
        { type: "output", text: "  projects      : featured work" },
        { type: "output", text: "  experience    : work history" },
        { type: "output", text: "  contact       : reach out" },
        { type: "output", text: "  clear         : clear terminal" },
        { type: "output", text: "  sudo contact me  : ???" },
      ];
    case "whoami":
      return [
        { type: "success", text: siteConfig.name },
        { type: "output", text: siteConfig.title },
        { type: "output", text: siteConfig.location },
      ];
    case "neofetch":
      return [
        { type: "output", text: ASCII_ART },
        { type: "output", text: `OS: Portfolio Linux x86_64` },
        { type: "output", text: `Host: ${siteConfig.name}` },
        { type: "output", text: `Role: ${siteConfig.title}` },
        { type: "output", text: `Location: ${siteConfig.location}` },
        { type: "output", text: `Email: ${siteConfig.email}` },
        { type: "output", text: `Stack: ${skills.slice(0, 6).map((s) => s.name).join(", ")}...` },
        { type: "success", text: "Status: open_to_work ✓" },
      ];
    case "ls":
      return navLinks.map((link) => ({
        type: "output" as const,
        text: `  ${link.label.toLowerCase()}.ts`,
      }));
    case "cd": {
      const target = args[0];
      if (!target) {
        return [{ type: "error", text: "cd: missing operand" }];
      }
      const section = navLinks.find(
        (l) =>
          l.href.slice(1) === target ||
          l.label.toLowerCase() === target
      );
      if (!section) {
        return [{ type: "error", text: `cd: ${target}: No such section` }];
      }
      setTimeout(() => {
        document.querySelector(section.href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return [{ type: "success", text: `→ navigated to ${section.href}` }];
    }
    case "skills":
      return [
        { type: "output", text: "import {" },
        ...skills.map((s) => ({
          type: "output" as const,
          text: `  ${s.name}, // ${s.category}`,
        })),
        { type: "output", text: "} from './stack';" },
      ];
    case "projects":
      return projects.map((p) => ({
        type: "output" as const,
        text: `  ● ${p.title} [${p.tags.join(", ")}]`,
      }));
    case "experience":
      return experience.map((e) => ({
        type: "output" as const,
        text: `  ${e.period}  ${e.role} @ ${e.company}`,
      }));
    case "contact":
      return [
        { type: "output", text: `email:   ${siteConfig.email}` },
        { type: "output", text: `phone:   ${siteConfig.phone}` },
        { type: "output", text: `github:  ${siteConfig.social.github}` },
        { type: "output", text: `linkedin: ${siteConfig.social.linkedin}` },
      ];
    case "clear":
      return [];
    case "sudo":
      if (args.join(" ") === "contact me") {
        return [
          { type: "success", text: "Access granted. 🚀" },
          { type: "output", text: "Initiating collaboration protocol..." },
          { type: "output", text: `Redirecting to mailto:${siteConfig.email}` },
        ];
      }
      return [{ type: "error", text: "sudo: command not found" }];
    default:
      return [
        {
          type: "error",
          text: `${command}: command not found. Type 'help' for commands.`,
        },
      ];
  }
}

export default function InteractiveTerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    { type: "output", text: "Welcome to tinsae@portfolio. Type 'help' to begin." },
    { type: "output", text: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === "clear") {
      setLines([]);
      setInput("");
      setHistory((h) => [...h, trimmed]);
      return;
    }

    const output = runCommand(trimmed);
    setLines((prev) => [
      ...prev,
      { type: "input", text: `$ ${trimmed}` },
      ...output,
      { type: "output", text: "" },
    ]);
    setHistory((h) => [...h, trimmed]);
    setHistoryIndex(-1);
    setInput("");

    if (trimmed.toLowerCase() === "sudo contact me") {
      setTimeout(() => {
        window.location.href = `mailto:${siteConfig.email}?subject=Let's work together!`;
      }, 1500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex =
        historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    }
  };

  const lineColor = (type: TerminalLine["type"]) => {
    switch (type) {
      case "input":
        return "text-foreground";
      case "error":
        return "text-syntax-keyword";
      case "success":
        return "text-accent";
      default:
        return "text-muted";
    }
  };

  return (
    <div
      className="flex h-[320px] flex-col font-mono text-xs md:h-[380px] md:text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="flex-1 overflow-y-auto pr-2">
        {lines.map((line, i) => (
          <p
            key={i}
            className={`whitespace-pre-wrap leading-relaxed ${lineColor(line.type)}`}
          >
            {line.text}
          </p>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleSubmit} className="mt-2 flex items-center gap-2 border-t border-border pt-3">
        <span className="shrink-0 text-accent">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-foreground outline-none placeholder:text-syntax-comment"
          placeholder="type 'help'..."
          spellCheck={false}
          autoComplete="off"
        />
        <span className="h-4 w-2 shrink-0 animate-pulse bg-accent" />
      </form>
    </div>
  );
}
