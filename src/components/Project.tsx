import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectItem = {
    code: string;
    title: string;
    category: string;
    description: string[];
    tags: string[];
    href: string;
    linkLabel: string;
    githubHref?: string;
};

const projects: ProjectItem[] = [
    {
        code: "0041",
        title: "WELLBYTES_CRM",
        category: "COMPANY",
        description: [
            "Maintained and improved Angular CRM features for customer records, employer accounts, claim workflows, and internal admin tools.",
            "Built reusable UI components, form validation, and business logic for benefits administration workflows.",
            "Supported country-specific CRM logic for tax rules, validation requirements, and regional business workflows.",
            "Converted Figma designs into responsive WordPress pages and reviewed the Go backend structure to better understand the full system.",
        ],
        tags: ["Angular", "TypeScript", "Tailwind", "WordPress", "Go"],
        href: "https://www.wellbytes.ca/",
        linkLabel: "Company_Link",
    },
    {
        code: "0042",
        title: "ENYA_LEARNING",
        category: "COMPANY",
        description: [
            "Converted Figma designs into responsive Next.js pages using TypeScript and Tailwind.",
            "Built reusable frontend components to keep the UI consistent across pages.",
            "Connected frontend features with existing APIs and worked with backend engineers to fix integration issues.",
            "Collaborated with design and product to clarify flows, requirements, and technical blockers.",
        ],
        tags: ["Next.js", "TypeScript", "Tailwind", "API", "Docker"],
        href: "https://www.enyalearning.ca/",
        linkLabel: "Company_Link",
    },
    {
        code: "0043",
        title: "PAPER_TRADING_PLATFORM",
        category: "PERSONAL_PROJECT",
        description: [
            "Built a paper trading app where users can log in, search stocks, and view market data.",
            "Added portfolio views, balances, order history, transactions, and trading activity.",
            "Used Firebase, MongoDB, Alpaca APIs, and React to practice full-stack trading workflows.",
        ],
        tags: ["React", "TypeScript", "Firebase", "Alpaca API", "MongoDB"],
        href: "https://your-project-link.com",
        linkLabel: "Project_Link",
        githubHref: "https://github.com/qtrngn/paper-trading",
    },
    {
        code: "0044",
        title: "BOOK_EXPLORERS",
        category: "SCHOOL_PROJECT",
        description: [
            "Built a React Native app for searching books and viewing book details through the Google Books API.",
            "Added Firebase login, persistent sessions, saved favorites, and Firestore-backed user libraries.",
            "Focused on mobile UI, API data handling, and simple user flows for book discovery.",
        ],
        tags: ["React Native", "Firebase", "Google Books API"],
        href: "https://your-project-link.com",
        linkLabel: "Project_Link",
        githubHref: "https://github.com/qtrngn/bookExplorer-app",
    },
];

function PreviewWindow() {
    const dots = ["bg-(--color-text-muted)", "bg-(--color-text-muted)", "bg-accent"];

    return (
        <div className="absolute left-0 top-0 flex h-7 w-full items-center gap-2 border-b border-custom bg-[#242424] px-3">
            {dots.map((dotClass, index) => (
                <span key={`${dotClass}-${index}`} className={`h-1.5 w-1.5 rounded-full ${dotClass}`} />
            ))}
        </div>
    );
}


export default function Projects() {
    return (
        <section id="projects" className="bg-background bg-dot-grid px-6 py-24 text-primary md:px-10 lg:px-16">
            <div className="mx-auto max-w-7xl">
                <div className="flex items-center gap-5">
                    <span className="text-mono-caps text-muted">04 /</span>
                    <h2 className="text-heading text-primary">SELECTED_WORK</h2>
                    <div className="h-px flex-1 bg-(--color-border)" />
                </div>

                <div className="mt-20 space-y-28">
                    {projects.map((project, index) => {
                        const isReversed = index % 2 !== 0

                        return (
                            <article key={project.title} className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                                <div className={isReversed ? "lg:order-2" : ""}>
                                    <p className="text-mono text-muted">{project.code}</p>

                                    <h3 className="mt-8 font-display text-[28px] font-bold uppercase leading-none tracking-[-0.04em] text-primary">
                                        {project.title}
                                    </h3>

                                    <p className="mt-5 text-mono-caps text-accent">~/ {project.category}</p>

                                    <ul className="mt-6 max-w-xl space-y-3">
                                        {project.description.map((point) => (
                                            <li key={point} className="flex gap-3 text-body text-secondary">
                                                <span className="mt-1 text-accent">•</span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-7 flex flex-wrap gap-3">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="rounded-md border border-custom bg-surface px-4 py-2 text-mono-caps text-accent">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-8 flex flex-wrap items-center gap-4">
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-mono-caps text-accent transition-all duration-200 hover:gap-3"
                                        >
                                            <ExternalLink size={20} strokeWidth={2} />
                                            <span>{project.linkLabel}</span>
                                        </a>

                                        {project.githubHref && (
                                            <a
                                                href={project.githubHref}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-mono-caps text-muted transition-colors duration-200 hover:text-(--color-accent)"
                                            >
                                                <FaGithub size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <a href={project.href} target="_blank" rel="noopener noreferrer" className={isReversed ? "lg:order-1" : ""}>
                                    <div className="group relative flex h-[300px] items-center justify-center overflow-hidden rounded-lg border border-custom bg-surface bg-dot-grid transition-all duration-300 hover:border-accent hover:shadow-[0_0_30px_rgba(176,38,255,0.18)]">
                                        <PreviewWindow />

                                        <div className="text-center">
                                            <p className="text-mono-caps text-accent">Project_Preview</p>
                                            <p className="mt-3 text-mono text-muted">Add image later</p>
                                        </div>

                                        <div className="absolute bottom-4 right-4 rounded-md border border-custom bg-background px-3 py-2 text-mono-caps text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            ↗ Open
                                        </div>
                                    </div>
                                </a>
                            </article>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}