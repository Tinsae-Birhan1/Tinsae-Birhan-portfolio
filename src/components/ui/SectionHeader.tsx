type SectionHeaderProps = {
  file: string;
  title: string;
  comment?: string;
};

export default function SectionHeader({
  file,
  title,
  comment,
}: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <p className="mb-3 font-mono text-sm text-syntax-comment">
        <span className="text-syntax-keyword">{"//"}</span> {file}
      </p>
      <h2 className="font-mono text-2xl font-bold text-foreground md:text-3xl">
        <span className="text-syntax-string">&quot;</span>
        {title}
        <span className="text-syntax-string">&quot;</span>
        <span className="text-syntax-keyword">;</span>
      </h2>
      {comment && (
        <p className="mt-3 font-mono text-sm text-muted">{comment}</p>
      )}
    </div>
  );
}
