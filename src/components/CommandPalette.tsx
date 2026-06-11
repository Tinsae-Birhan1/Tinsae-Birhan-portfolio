"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { navLinks, siteConfig } from "@/data/site";

const extraCommands = [
  { label: "Download Resume", href: siteConfig.resumePath, download: true },
  { label: "GitHub Profile", href: siteConfig.social.github, external: true },
  { label: "LinkedIn", href: siteConfig.social.linkedin, external: true },
  { label: "Send Email", href: `mailto:${siteConfig.email}` },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);

  const items = [
    ...navLinks.map((l) => ({
      label: `Go to ${l.label}`,
      href: l.href,
      hint: l.label.toLowerCase() + ".ts",
    })),
    ...extraCommands.map((c) => ({
      label: c.label,
      href: c.href,
      hint: "action",
      download: "download" in c,
      external: "external" in c,
    })),
  ].filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setSelected(0);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
        setQuery("");
        setSelected(0);
      }
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [close]);

  useEffect(() => {
    if (!open) return;
    const handleNav = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelected((s) => Math.min(s + 1, items.length - 1));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelected((s) => Math.max(s - 1, 0));
      }
      if (e.key === "Enter" && items[selected]) {
        e.preventDefault();
        const item = items[selected];
        if ("download" in item && item.download) {
          const a = document.createElement("a");
          a.href = item.href;
          a.download = siteConfig.resumeFileName;
          a.click();
        } else if ("external" in item && item.external) {
          window.open(item.href, "_blank");
        } else if (item.href.startsWith("#")) {
          document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = item.href;
        }
        close();
      }
    };
    window.addEventListener("keydown", handleNav);
    return () => window.removeEventListener("keydown", handleNav);
  }, [open, items, selected, close]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-10 right-6 z-40 hidden items-center gap-2 rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs text-muted transition-all hover:border-accent hover:text-accent md:flex"
      >
        <Search size={12} />
        <span>⌘K</span>
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
              onClick={close}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.15 }}
              className="fixed left-1/2 top-[20%] z-[9999] w-[90vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-lg border border-border bg-surface shadow-2xl"
            >
              <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                <Search size={16} className="text-muted" />
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelected(0);
                  }}
                  placeholder="Type a command or search..."
                  className="flex-1 bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted"
                />
                <kbd className="rounded border border-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
                  esc
                </kbd>
              </div>
              <ul className="max-h-64 overflow-y-auto py-2">
                {items.length === 0 ? (
                  <li className="px-4 py-3 font-mono text-sm text-muted">
                    No results found
                  </li>
                ) : (
                  items.map((item, i) => (
                    <li key={item.label}>
                      <button
                        onClick={() => {
                          if ("download" in item && item.download) {
                            const a = document.createElement("a");
                            a.href = item.href;
                            a.download = siteConfig.resumeFileName;
                            a.click();
                          } else if ("external" in item && item.external) {
                            window.open(item.href, "_blank");
                          } else if (item.href.startsWith("#")) {
                            document
                              .querySelector(item.href)
                              ?.scrollIntoView({ behavior: "smooth" });
                          } else {
                            window.location.href = item.href;
                          }
                          close();
                        }}
                        className={`flex w-full items-center justify-between px-4 py-2.5 font-mono text-sm transition-colors ${
                          i === selected
                            ? "bg-accent/10 text-accent"
                            : "text-foreground hover:bg-surface-hover"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-2 text-xs text-muted">
                          {item.hint}
                          <ArrowRight size={12} />
                        </span>
                      </button>
                    </li>
                  ))
                )}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
