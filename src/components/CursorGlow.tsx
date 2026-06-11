"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const glowX = useSpring(cursorX, springConfig);
  const glowY = useSpring(cursorY, springConfig);
  const dotX = useSpring(cursorX, { damping: 30, stiffness: 400, mass: 0.2 });
  const dotY = useSpring(cursorY, { damping: 30, stiffness: 400, mass: 0.2 });

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (prefersReducedMotion || isTouchDevice) return;

    setEnabled(true);

    const handleMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, [cursorX, cursorY]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden transition-opacity duration-300 md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: glowX, top: glowY }}
      >
        <div className="h-48 w-48 rounded-full bg-accent/5 blur-3xl" />
      </motion.div>

      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: dotX, top: dotY }}
      >
        <div className="relative h-5 w-5">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-accent/60" />
          <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-accent/60" />
        </div>
      </motion.div>
    </div>
  );
}
