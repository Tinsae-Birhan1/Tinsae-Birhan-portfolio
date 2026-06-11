import { allSkillNames } from "@/data/skills";
import CodeSectionHeader from "@/components/ui/CodeSectionHeader";
import CodeWindow from "@/components/ui/CodeWindow";
import SkillTabs from "@/components/SkillTabs";

export default function Skills() {
  const importNames = allSkillNames.slice(0, 10);

  return (
    <section id="skills" className="section-padding border-t border-border bg-surface/30">
      <div className="container-max">
        <CodeSectionHeader
          file="stack/imports.ts"
          title="Tech I bring to your team"
        />

        <CodeWindow filename="stack/imports.ts" className="mb-2">
          <pre className="overflow-x-auto font-mono text-xs leading-relaxed">
            <span className="text-syntax-keyword">import</span>
            {" { "}
            {importNames.map((name, i) => (
              <span key={name}>
                <span className="text-syntax-function">
                  {name.replace(/[^a-zA-Z0-9]/g, "")}
                </span>
                {i < importNames.length - 1 ? ", " : ""}
              </span>
            ))}
            {" ... } "}
            <span className="text-syntax-keyword">from</span>
            <span className="text-syntax-string"> &apos;./skills&apos;</span>
          </pre>
        </CodeWindow>

        <SkillTabs />
      </div>
    </section>
  );
}
