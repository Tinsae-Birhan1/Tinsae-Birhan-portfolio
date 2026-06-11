import { siteConfig } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 pb-12 md:pb-8">
      <div className="container-max flex flex-col items-center justify-between gap-3 px-5 font-mono text-xs text-muted md:flex-row md:px-10">
        <p>
          <span className="text-syntax-comment">{"// "}</span>© {year}{" "}
          {siteConfig.name}
        </p>
        <p className="text-accent">{siteConfig.availability}</p>
        <a
          href={`mailto:${siteConfig.email}`}
          className="transition-colors hover:text-accent"
        >
          {siteConfig.email}
        </a>
      </div>
    </footer>
  );
}
