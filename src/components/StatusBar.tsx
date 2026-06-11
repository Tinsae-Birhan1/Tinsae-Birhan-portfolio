"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { GitBranch, Bell, Check } from "lucide-react";

export default function StatusBar() {
  const [time, setTime] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );

      for (const link of [...navLinks].reverse()) {
        const el = document.getElementById(link.href.slice(1));
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(link.href.slice(1));
          break;
        }
      }
    };

    update();
    const interval = setInterval(update, 1000);
    window.addEventListener("scroll", update);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-6 items-center justify-between border-t border-border bg-accent-dim px-3 font-mono text-[11px] text-white">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1">
          <GitBranch size={10} />
          main*
        </span>
        <span className="hidden items-center gap-1 sm:flex">
          <Check size={10} />
          {activeSection}.ts
        </span>
        <span className="hidden md:inline">Prettier</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">TypeScript</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span>Ln 1, Col 1</span>
        <span className="flex items-center gap-1">
          <Bell size={10} />
          {time}
        </span>
      </div>
    </div>
  );
}
