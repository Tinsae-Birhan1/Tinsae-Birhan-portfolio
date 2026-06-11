"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-mono text-sm font-semibold text-background shadow-lg shadow-accent/30 transition-transform hover:scale-105 md:hidden"
    >
      contact()
      <ArrowRight size={16} />
    </a>
  );
}
