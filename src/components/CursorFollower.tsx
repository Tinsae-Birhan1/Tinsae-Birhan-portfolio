"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [clickPulse, setClickPulse] = useState(0);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotSpring = { stiffness: 500, damping: 28, mass: 0.2 };
  const ringSpring = { stiffness: 150, damping: 20, mass: 0.6 };
  const glowSpring = { stiffness: 80, damping: 18, mass: 1.2 };

  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);
  const glowX = useSpring(mouseX, glowSpring);
  const glowY = useSpring(mouseY, glowSpring);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    if (prefersReduced || isTouch) return;

    setEnabled(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest("a, button, input, textarea, label, [role='button']")
      );
    };

    const handleDown = () => {
      setClicking(true);
      setClickPulse((p) => p + 1);
    };
    const handleUp = () => setClicking(false);
    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);
    document.body.addEventListener("mouseleave", handleLeave);
    document.body.addEventListener("mouseenter", handleEnter);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
      document.body.removeEventListener("mouseleave", handleLeave);
      document.body.removeEventListener("mouseenter", handleEnter);
    };
  }, [handleMove]);

  if (!enabled) return null;

  const ringSize = hovering ? 48 : 32;
  const dotSize = clicking ? 4 : hovering ? 6 : 5;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      {/* Soft trailing glow */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: glowX, top: glowY }}
      >
        <div
          className={`rounded-full blur-3xl transition-all duration-500 ${
            hovering ? "h-32 w-32 bg-violet-500/15" : "h-24 w-24 bg-accent/10"
          }`}
        />
      </motion.div>

      {/* Rotating dashed ring — lags behind cursor */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: ringX, top: ringY }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        <motion.div
          animate={{ width: ringSize, height: ringSize }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className={`rounded-full border border-dashed transition-colors duration-300 ${
            hovering
              ? "border-accent/70"
              : "border-accent/30"
          }`}
        />
      </motion.div>

      {/* Second ring — counter-rotate, slower lag feel via separate spring */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: ringX, top: ringY }}
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        <motion.div
          animate={{
            width: hovering ? 56 : 40,
            height: hovering ? 56 : 40,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
          className="rounded-full border border-violet-400/20"
        />
      </motion.div>

      {/* Crosshair lines */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: dotX, top: dotY }}
      >
        <motion.div
          animate={{
            width: hovering ? 20 : 14,
            opacity: hovering ? 0.8 : 0.4,
          }}
          className="absolute left-1/2 top-1/2 h-px -translate-x-1/2 -translate-y-1/2 bg-accent/60"
        />
        <motion.div
          animate={{
            height: hovering ? 20 : 14,
            opacity: hovering ? 0.8 : 0.4,
          }}
          className="absolute left-1/2 top-1/2 w-px -translate-x-1/2 -translate-y-1/2 bg-accent/60"
        />
      </motion.div>

      {/* Core dot — snappy, follows closely */}
      <motion.div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: dotX, top: dotY }}
      >
        <motion.div
          animate={{
            width: dotSize,
            height: dotSize,
            scale: clicking ? 0.6 : 1,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
          className={`rounded-full shadow-[0_0_12px_rgba(34,211,238,0.8)] ${
            hovering ? "bg-violet-400" : "bg-accent"
          }`}
        />
      </motion.div>

      {/* Click ripple */}
      {clickPulse > 0 && (
        <motion.div
          key={clickPulse}
          className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-accent"
          style={{ left: dotX, top: dotY }}
          initial={{ width: 8, height: 8, opacity: 0.9 }}
          animate={{ width: 64, height: 64, opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        />
      )}
    </div>
  );
}
