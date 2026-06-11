"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";

type SkillIconProps = {
  name: string;
  icon?: string;
  size?: number;
};

export default function SkillIcon({ name, icon, size = 20 }: SkillIconProps) {
  const [failed, setFailed] = useState(false);

  if (!icon || failed) {
    return (
      <span
        className="flex shrink-0 items-center justify-center rounded-md border border-border bg-surface-elevated text-muted"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <Code2 size={Math.round(size * 0.55)} />
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://cdn.simpleicons.org/${icon}`}
      alt={`${name} logo`}
      width={size}
      height={size}
      className="shrink-0 rounded-sm"
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
