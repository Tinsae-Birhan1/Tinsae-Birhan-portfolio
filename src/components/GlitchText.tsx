"use client";

import { useState } from "react";

type GlitchTextProps = {
  text: string;
  className?: string;
};

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setGlitching(true)}
      onMouseLeave={() => setGlitching(false)}
    >
      <span className={`gradient-text ${glitching ? "glitch-active" : ""}`}>
        {text}
      </span>
      {glitching && (
        <>
          <span
            className="glitch-layer absolute inset-0 gradient-text"
            aria-hidden
            style={{ clipPath: "inset(20% 0 30% 0)", left: "2px" }}
          >
            {text}
          </span>
          <span
            className="glitch-layer absolute inset-0 text-syntax-string"
            aria-hidden
            style={{ clipPath: "inset(60% 0 5% 0)", left: "-2px" }}
          >
            {text}
          </span>
        </>
      )}
    </span>
  );
}
