import { companies } from "@/data/site";

export default function TrustBar() {
  const items = [...companies, ...companies];

  return (
    <div className="mt-16 overflow-hidden py-6">
      <p className="mb-5 text-center text-xs font-medium uppercase tracking-widest text-muted">
        Trusted by teams at
      </p>
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex shrink-0 gap-10 px-6">
          {items.map((company, i) => (
            <span
              key={`${company}-${i}`}
              className="whitespace-nowrap text-sm font-semibold text-muted/50 transition-colors hover:text-accent/80"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
