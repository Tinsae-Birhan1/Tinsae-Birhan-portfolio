"use client";

import { useState } from "react";
import { ChevronDown, ChevronRight, FileCode, FolderOpen } from "lucide-react";
import { navLinks } from "@/data/site";

const fileTree = [
  {
    folder: "portfolio",
    open: true,
    files: navLinks.map((l) => ({
      name: `${l.label.toLowerCase()}.ts`,
      href: l.href,
    })),
  },
  {
    folder: "src",
    open: true,
    files: [
      { name: "developer.ts", href: "#home" },
      { name: "stack/imports.ts", href: "#skills" },
      { name: "projects/index.ts", href: "#projects" },
    ],
  },
];

export default function FileExplorer() {
  const [openFolders, setOpenFolders] = useState<Record<string, boolean>>({
    portfolio: true,
    src: true,
  });

  const toggle = (folder: string) => {
    setOpenFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <aside className="fixed left-0 top-12 z-40 hidden h-[calc(100vh-3rem-1.5rem)] w-52 flex-col border-r border-border bg-surface/95 backdrop-blur-sm xl:flex">
      <div className="border-b border-border px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-muted">
        Explorer
      </div>
      <nav className="flex-1 overflow-y-auto p-2">
        {fileTree.map((group) => (
          <div key={group.folder} className="mb-1">
            <button
              onClick={() => toggle(group.folder)}
              className="flex w-full items-center gap-1 rounded px-1 py-0.5 font-mono text-xs text-foreground hover:bg-background"
            >
              {openFolders[group.folder] ? (
                <ChevronDown size={12} className="text-muted" />
              ) : (
                <ChevronRight size={12} className="text-muted" />
              )}
              <FolderOpen size={12} className="text-syntax-variable" />
              {group.folder}
            </button>
            {openFolders[group.folder] && (
              <ul className="ml-4 mt-0.5 space-y-0.5">
                {group.files.map((file) => (
                  <li key={file.name}>
                    <a
                      href={file.href}
                      className="flex items-center gap-1.5 rounded px-1 py-0.5 font-mono text-[11px] text-muted transition-colors hover:bg-background hover:text-accent"
                    >
                      <FileCode size={11} className="text-syntax-property" />
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
