"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/site";

const codeLines = [
  { indent: 0, parts: [{ type: "keyword", text: "const" }, { type: "plain", text: " " }, { type: "variable", text: "developer" }, { type: "plain", text: " " }, { type: "keyword", text: "=" }, { type: "plain", text: " {" }] },
  { indent: 1, parts: [{ type: "property", text: "name" }, { type: "plain", text: ": " }, { type: "string", text: `"${siteConfig.name}"` }, { type: "plain", text: "," }] },
  { indent: 1, parts: [{ type: "property", text: "role" }, { type: "plain", text: ": " }, { type: "string", text: `"${siteConfig.title}"` }, { type: "plain", text: "," }] },
  { indent: 1, parts: [{ type: "property", text: "location" }, { type: "plain", text: ": " }, { type: "string", text: `"${siteConfig.location}"` }, { type: "plain", text: "," }] },
  { indent: 1, parts: [{ type: "property", text: "status" }, { type: "plain", text: ": " }, { type: "string", text: '"open_to_work"' }, { type: "plain", text: "," }] },
  { indent: 1, parts: [{ type: "property", text: "stack" }, { type: "plain", text: ": [" }, { type: "string", text: '"TypeScript"' }, { type: "plain", text: ", " }, { type: "string", text: '"Python"' }, { type: "plain", text: ", " }, { type: "string", text: '"NestJS"' }, { type: "plain", text: "]," }] },
  { indent: 1, parts: [{ type: "function", text: "build" }, { type: "plain", text: "() {" }] },
  { indent: 2, parts: [{ type: "keyword", text: "return" }, { type: "plain", text: " " }, { type: "string", text: `"${siteConfig.tagline}"` }, { type: "plain", text: ";" }] },
  { indent: 1, parts: [{ type: "plain", text: "}," }] },
  { indent: 0, parts: [{ type: "plain", text: "};" }] },
];

const colorMap: Record<string, string> = {
  keyword: "text-syntax-keyword",
  string: "text-syntax-string",
  property: "text-syntax-property",
  function: "text-syntax-function",
  variable: "text-syntax-variable",
  plain: "text-foreground",
};

export default function TypewriterCode() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 180);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  useEffect(() => {
    const blink = setInterval(() => setShowCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <pre className="overflow-x-auto font-mono text-xs leading-relaxed md:text-sm">
      {codeLines.slice(0, visibleLines).map((line, i) => (
        <div key={i} className="flex">
          <span className="mr-4 w-6 shrink-0 select-none text-right text-syntax-line">
            {i + 1}
          </span>
          <span style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
            {line.parts.map((part, j) => (
              <span key={j} className={colorMap[part.type]}>
                {part.text}
              </span>
            ))}
          </span>
        </div>
      ))}
      {visibleLines < codeLines.length && (
        <div className="flex">
          <span className="mr-4 w-6 shrink-0 text-right text-syntax-line">
            {visibleLines + 1}
          </span>
          <span
            className={`inline-block h-4 w-2 bg-syntax-keyword ${showCursor ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      )}
      {visibleLines >= codeLines.length && (
        <div className="flex">
          <span className="mr-4 w-6 shrink-0 text-right text-syntax-line">
            {codeLines.length + 1}
          </span>
          <span
            className={`inline-block h-4 w-2 bg-syntax-keyword ${showCursor ? "opacity-100" : "opacity-0"}`}
          />
        </div>
      )}
    </pre>
  );
}
