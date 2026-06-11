"use client";

import { Download } from "lucide-react";
import { siteConfig } from "@/data/site";

type DownloadResumeProps = {
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export default function DownloadResume({
  variant = "secondary",
  className = "",
}: DownloadResumeProps) {
  const styles = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-outline !rounded-full",
  };

  return (
    <a
      href={siteConfig.resumePath}
      download={siteConfig.resumeFileName}
      className={`${styles[variant]} ${className}`}
    >
      <Download size={16} />
      Resume
    </a>
  );
}
