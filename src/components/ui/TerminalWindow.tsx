type TerminalWindowProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`code-window overflow-hidden rounded-lg border border-border ${className}`}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <span className="flex-1 text-center font-mono text-xs text-muted">
          {title}
        </span>
        <div className="w-12" />
      </div>
      <div className="bg-background p-4 md:p-6">{children}</div>
    </div>
  );
}
