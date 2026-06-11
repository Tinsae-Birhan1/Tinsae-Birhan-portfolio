"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

type AnimatedCounterProps = {
  value: string;
  className?: string;
};

type ParsedValue = {
  hasNumber: boolean;
  numeric: number;
  suffix: string;
  isDecimal: boolean;
};

function parseValue(value: string): ParsedValue {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { hasNumber: false, numeric: 0, suffix: "", isDecimal: false };
  }

  const numeric = parseFloat(match[1]);
  return {
    hasNumber: !Number.isNaN(numeric),
    numeric,
    suffix: match[2],
    isDecimal: match[1].includes("."),
  };
}

function formatCount(parsed: ParsedValue, amount: number) {
  const display = parsed.isDecimal ? amount.toFixed(1) : String(Math.round(amount));
  return `${display}${parsed.suffix}`;
}

export default function AnimatedCounter({ value, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const parsed = useMemo(() => parseValue(value), [value]);
  const [display, setDisplay] = useState(() =>
    parsed.hasNumber ? formatCount(parsed, 0) : value,
  );

  useEffect(() => {
    if (!isInView || !parsed.hasNumber) return;

    const controls = animate(0, parsed.numeric, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (amount) => {
        setDisplay(formatCount(parsed, amount));
      },
    });

    return () => controls.stop();
  }, [isInView, parsed]);

  if (!parsed.hasNumber) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
