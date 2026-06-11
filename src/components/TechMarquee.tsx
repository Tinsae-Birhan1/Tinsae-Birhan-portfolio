import { skills } from "@/data/site";

const techNames = skills.slice(0, 14).map((s) => s.name);
const items = [...techNames, ...techNames];

export default function TechMarquee() {
  return (
    <div className="overflow-hidden border-y border-border bg-surface/50 py-4">
      <p className="mb-3 text-center font-mono text-[10px] text-syntax-comment">
        <span className="text-syntax-keyword">import</span>
        {" { "}
        <span className="text-syntax-function">stack</span>
        {" } "}
        <span className="text-syntax-keyword">from</span>
        <span className="text-syntax-string"> &apos;./skills&apos;</span>
      </p>
      <div className="marquee-track flex w-max gap-8 px-6">
        {items.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="whitespace-nowrap font-mono text-xs text-muted/70"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
