import { Button } from "@/components/ui/button";
import profileImage from "@/assets/hero.jpg";

export default function HeroSection() {
    return (
        <section id="home" className="min-h-screen bg-background bg-dot-grid px-6 text-primary md:px-10 lg:px-16">
            <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-5xl grid-cols-1 items-center lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                    <p className="text-mono-caps text-muted ml-2">Portfolio — 2026</p>

                    {/* Left side content */}
                    <div className="mt-20">
                        <h1 className="text-display">
                            HEY, I&apos;M
                        </h1>

                        <h1 className="text-display text-accent">
                            QUYNH_
                        </h1>
                    </div>

                    <div className="mt-10 border-t border-dashed border-custom pt-8 ml-2">
                        <p className="max-w-xl text-body text-secondary">
                            Full-stack developer <span className="text-accent font-bold">based in Vancouver.</span> <br/>
                            Building applications with scalable backend services, responsive frontend interfaces, database systems, authentication, and deployment workflows. Focused on clean architecture, maintainable code, and system reliability.
                        </p>
                    </div>
                </div>

                {/* Right side content */}
                <div className="flex flex-col items-end gap-2">
                    <div className="relative h-[340px] w-[230px] overflow-hidden">
                        <img src={profileImage} alt="Profile portrait" className="h-full w-full object-cover" />
                    </div>

                    <div className="flex flex-col items-end gap-4">
                        <p className="rounded-md border border-custom bg-surface px-4 py-2 text-mono-caps text-accent">
                            Available to work
                        </p>

                        <p className="text-mono text-primary">
                            Vancouver / Canada
                        </p>

                        <Button variant="outline" asChild>
                            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                                Resume
                            </a>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}