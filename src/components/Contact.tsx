import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { InputGroup, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-background bg-dot-grid px-6 py-24 text-primary md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex items-center gap-5">
          <span className="text-mono-caps text-muted">05 /</span>
          <h2 className="text-heading text-primary">CONTACT</h2>
          <div className="h-px flex-1 bg-(--color-border)" />
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="border-b border-custom pb-12 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-20">
            <h3 className="font-display text-[40px] font-bold uppercase leading-none tracking-[-0.05em] text-primary md:text-[48px]">LET&apos;S BUILD SOMETHING.</h3>

            <div className="mt-8 h-0.5 w-8 bg-accent" />

            <p className="mt-8 max-w-xl text-body text-secondary">Open to new projects, collaborations, and conversations. If you have something worth building, I&apos;d love to hear about it.</p>

            <div className="mt-8 border-y border-custom py-6">
              <p className="flex items-center gap-2 text-mono-caps text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Available for work
              </p>

              <p className="mt-6 text-mono-caps text-muted">Vancouver, BC · Canada</p>
              <p className="mt-6 text-mono-caps text-muted">Response_Time: &lt; 24h</p>
            </div>

            <div className="mt-6">
              <p className="text-mono-caps text-muted">/ Elsewhere</p>

              <div className="mt-5 flex flex-col items-start gap-4">
                <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mono-caps text-primary transition-all duration-200 hover:gap-3 hover:text-(--color-accent)">
                  <FaGithub size={14} />
                  Github
                  <FaArrowRight size={13} />
                </a>

                <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-mono-caps text-primary transition-all duration-200 hover:gap-3 hover:text-(--color-accent)">
                  <FaLinkedinIn size={14} />
                  Linkedin
                  <FaArrowRight size={13} />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="text-mono-caps text-muted">/ Direct</p>

            <a href="mailto:nquynh1110@gmail.com" className="mt-5 inline-flex items-center gap-3 font-display font-bold uppercase leading-none tracking-[-0.05em] text-body transition-colors duration-200 hover:text-(--color-accent)">
              <FaEnvelope size={28} />
              nquynh1110@gmail.com
            </a>

            <form className="mt-12 rounded-lg border border-custom bg-surface bg-dot-grid p-8 md:p-10">
              <p className="text-mono-caps text-accent">/ Init_Message</p>

              <div className="mt-10 space-y-9">
                <div>
                  <label htmlFor="name" className="text-mono-caps text-primary">Name</label>
                  <InputGroup className="mt-3 border border-b border-custom bg-transparent px-0 shadow-none rounded-none">
                    <InputGroupInput id="name" name="name" placeholder="John Doe" className="bg-transparent px-0 text-body text-primary placeholder:text-muted" />
                  </InputGroup>
                </div>

                <div>
                  <label htmlFor="email" className="text-mono-caps text-primary">Email</label>
                  <InputGroup className="mt-3 border-0 border-b border-custom bg-transparent px-0 shadow-none rounded-none">
                    <InputGroupInput id="email" name="email" type="email" placeholder="johndoe@gmail.com" className="bg-transparent px-0 text-body text-primary placeholder:text-muted" />
                  </InputGroup>
                </div>

                <div>
                  <label htmlFor="message" className="text-mono-caps text-primary">Message</label>
                  <InputGroup className="mt-3 border-0 border-b border-custom bg-transparent px-0 shadow-none rounded-none">
                    <InputGroupTextarea id="message" name="message" placeholder="Describe what you're building..." className="min-h-32 resize-none bg-transparent px-0 text-body text-primary placeholder:text-muted" />
                  </InputGroup>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <p className="text-mono-caps text-muted">Encrypted · No Spam</p>

                <Button variant="outline" type="submit">Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}