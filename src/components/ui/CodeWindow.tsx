type CodeWindowProps = {
  filename: string;
  children: React.ReactNode;
  className?: string;
};

export default function CodeWindow({
  filename,
  children,
  className = "",
}: CodeWindowProps) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-border bg-surface/90 shadow-xl shadow-black/20 ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface-elevated/80 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="flex-1 text-center font-mono text-[11px] text-muted">
          {filename}
        </span>
      </div>
      <div className="p-4 md:p-5">{children}</div>
    </div>
  );
}
