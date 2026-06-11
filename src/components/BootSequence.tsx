"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootLines = [
  { text: "BIOS v2.6.1 : portfolio.init()", delay: 0 },
  { text: "Loading kernel modules...", delay: 200 },
  { text: "  [OK] next.js", delay: 400 },
  { text: "  [OK] typescript", delay: 550 },
  { text: "  [OK] framer-motion", delay: 700 },
  { text: "  [OK] developer.ts", delay: 850 },
  { text: "Mounting filesystem...", delay: 1000 },
  { text: "  ~/portfolio/ : 7 modules loaded", delay: 1200 },
  { text: "Starting dev server on :3000", delay: 1400 },
  { text: "✓ Ready : welcome, visitor.", delay: 1700, accent: true },
];

export default function BootSequence() {
  const [show, setShow] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const booted = sessionStorage.getItem("portfolio-booted");
    if (booted) return;
    setShow(true);
    sessionStorage.setItem("portfolio-booted", "1");
  }, []);

  useEffect(() => {
    if (!show || visibleCount >= bootLines.length) {
      if (show && visibleCount >= bootLines.length) {
        const timer = setTimeout(() => setDone(true), 600);
        return () => clearTimeout(timer);
      }
      return;
    }

    const next = bootLines[visibleCount];
    const prevDelay = visibleCount > 0 ? bootLines[visibleCount - 1].delay : 0;
    const wait = next.delay - prevDelay;

    const timer = setTimeout(() => setVisibleCount((c) => c + 1), wait);
    return () => clearTimeout(timer);
  }, [show, visibleCount]);

  return (
    <AnimatePresence>
      {show && !done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-background"
        >
          <div className="w-full max-w-lg px-8">
            <p className="mb-6 font-mono text-xs text-accent">
              portfolio@dev ~ boot sequence
            </p>
            <div className="space-y-1.5 font-mono text-sm">
              {bootLines.slice(0, visibleCount).map((line, i) => (
                <motion.p
                  key={line.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={line.accent ? "text-accent" : "text-muted"}
                >
                  {line.text}
                </motion.p>
              ))}
              {visibleCount < bootLines.length && (
                <span className="inline-block h-4 w-2 animate-pulse bg-accent" />
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
