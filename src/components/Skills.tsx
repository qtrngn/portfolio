import { Marquee } from "@/components/ui/marquee";

type StatItem = {
  value: string;
  label: string;
};

const stats: StatItem[] = [
  { value: "02", label: "PRODUCTION CODEBASE" },
  { value: "04+", label: "PROJECTS BUILT" },
  { value: "10+", label: "TECH TOOLS" },
];

const skills: string[] = ["React", "Angular", "Next.js", "TypeScript", "Tailwind", "Node.js", "Express", "MongoDB", "React Native", "Firebase", "Axios", "Vite", "Docker", "GitHub", "Figma", "WordPress", "REST APIs", "Adobe Creative Suite"];

export default function Skills() {
  return (
    <section id="about" className="bg-background px-6 py-24 text-primary md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-5">
          <span className="text-mono-caps text-muted">02 /</span>
          <h2 className="text-heading text-primary">DEV_STATS</h2>
          <div className="h-px flex-1 bg-(--color-border)" />
        </div>

        <div className="mt-20 grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex h-48 flex-col items-center justify-center rounded-lg border border-custom bg-surface bg-dot-grid">
              <p className="font-display text-[64px] font-semibold leading-none tracking-[-0.05em] text--primary">{stat.value}</p>
              <p className="mt-6 text-mono-caps text-muted">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-hidden border-y border-custom py-7">
          <Marquee pauseOnHover className="[--duration:22s]">
            {skills.map((skill, index) => (
              <div key={skill} className="mx-10 flex items-center gap-10">
                <span className="text-2xl leading-none text-accent">•</span>
                <span className={`font-display text-[32px] font-bold uppercase leading-none tracking-[-0.05em] ${index % 2 === 0 ? "text-primary" : "text-secondary opacity-50"}`}>
                  {skill}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}