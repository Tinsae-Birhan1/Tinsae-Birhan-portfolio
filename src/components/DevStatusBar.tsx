"use client";

import { useEffect, useState } from "react";

export default function DevStatusBar() {
  const [section, setSection] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "experience", "projects", "contact"];
    const update = () => {
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 hidden border-t border-border bg-surface/95 font-mono text-[10px] text-muted backdrop-blur-md md:flex">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-1.5 md:px-10">
        <div className="flex items-center gap-4">
          <span className="text-accent">⎇ main</span>
          <span>{section}.tsx</span>
        </div>
        <div className="flex items-center gap-4">
          <span>TypeScript</span>
          <span>UTF-8</span>
          <span className="text-accent">● available</span>
        </div>
      </div>
    </div>
  );
}
