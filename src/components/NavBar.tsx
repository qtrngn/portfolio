import { useState } from 'react';
import { Button } from '@/components/ui/button';
type SectionId = "home" | "about" | "projects" | "experience" | "contact";

type NavItem = {
  number: string;
  label: string;
  id: SectionId;
  href: `#${SectionId}`;
};

const navItems: NavItem[] = [
  { number: "01", label: "Home", id: "home", href: "#home" },
  { number: "02", label: "Projects", id: "projects", href: "#projects" },
  { number: "03", label: "About", id: "about", href: "#about" },
  { number: "04", label: "Contact", id: "contact", href: "#contact" },
];


export default function NavBar() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  return (
    <header className="fixed left-0 top-0 w-full border-b border-custom bg-background">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a href="#home" className="tracking-tight text-accent">
          QUYNHNGUYEN_
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveSection(item.id)}
              className="group inline-flex items-center text-mono-caps text-text-secondary transition-all duration-200 hover:scale-105"
            >
              <span
                className={`text-mono-caps-sm transition-colors duration-200 ${activeSection === item.id
                    ? "text-accent"
                    : "text-text-secondary group-hover:text-(--color-accent)"
                  }`}
              >
                {item.number}/
              </span>

              {item.label}
            </a>
          ))}
        </div>

        <Button className='text-md' asChild>
          <a href="#contact">Init_Conv</a>
        </Button>
      </nav>
    </header>
  )
}