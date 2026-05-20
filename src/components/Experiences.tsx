type ExperienceItem = {
    period: string;
    title: string;
    company: string;
    description: string;
    tags: string[];
};

const experiences: ExperienceItem[] = [
    {
        period: "APR 2026 — PRESENT",
        title: "FRONTEND_DEVELOPER",
        company: "WELLBYTES / BENEFITS_TECH_PLATFORM",
        description:
          "A digital benefits platform for Canadian businesses and incorporated professionals, supporting HSA and WSA management through online onboarding, claims processing, and workflow automation.",
        tags: ["Angular", "TypeScript", "Tailwind", "Go"],
      },
      {
        period: "OCT 2025 — JAN 2026",
        title: "FRONTEND_INTERN",
        company: "ENYA_LEARNING / EDUCATION_PLATFORM",
        description:
          "An education platform designed to support newcomer students in Canada, with tools that help educators and parents track progress, create learning content, and guide academic adjustment.",
        tags: ["Next.js", "TypeScript", "Tailwind", "API", "Docker"],
      },
    {
        period: "2024 — 2026",
        title: "SCHOOL_PROJECTS",
        company: "PERSONAL + ACADEMIC_BUILDS",
        description:
          "A collection of school and personal projects built to practice frontend, mobile, and full-stack development through real-world app ideas and portfolio-focused builds.",
        tags: ["React", "React Native", "Firebase", "APIs", "MongoDB", "Node.js","Vite"],
      },
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="bg-background bg-dot-grid px-6 py-24 text-primary md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-5">
                    <span className="text-mono-caps text-muted">03 /</span>
                    <h2 className="text-heading text-secondary">EXPERIENCE_LOG</h2>
                    <div className="h-px flex-1 bg-(--color-border)" />
                </div>

                <div className="mt-20">
                    {experiences.map((experience) => (
                        <article key={`${experience.period}-${experience.title}`} className="grid grid-cols-1 gap-8 border-b border-custom py-20 first:pt-0 md:grid-cols-[220px_1fr]">
                            <div>
                                <p className="text-mono-caps text-muted">{experience.period}</p>
                                <div className="mt-4 h-0.5 w-6 bg-accent" />
                            </div>

                            <div className="max-w-2xl">
                                <h3 className="font-display text-[28px] font-bold uppercase leading-none tracking-[-0.04em] text-primary">
                                    {experience.title}
                                </h3>

                                <p className="mt-6 text-mono-caps text-accent">
                                    ~/ {experience.company}
                                </p>

                                <p className="mt-6 text-mono leading-6 text-secondary">
                                    {experience.description}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-3">
                                    {experience.tags.map((tag) => (
                                        <span key={tag} className="rounded-md border border-custom bg-surface px-4 py-2 text-mono-caps text-accent">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}