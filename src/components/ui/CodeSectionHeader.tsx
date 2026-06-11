type CodeSectionHeaderProps = {
  file: string;
  title: string;
  subtitle?: string;
};

export default function CodeSectionHeader({
  file,
  title,
  subtitle,
}: CodeSectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="mb-2 font-mono text-xs text-syntax-comment">
        <span className="text-syntax-keyword">{"//"}</span> {file}
      </p>
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-muted">{subtitle}</p>
      )}
    </div>
  );
}
