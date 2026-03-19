import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-28 md:py-40 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full border border-border/30 pointer-events-none" />

      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-6 md:px-12`}
      >
        <div className="max-w-2xl mx-auto text-center mb-20">
          <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
            Contact
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mt-4 tracking-tight leading-[1.05]">
            Let's work<br />together
          </h2>
          <p className="text-[15px] font-body font-light text-muted-foreground mt-6 leading-relaxed max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something extraordinary.
          </p>
        </div>

        <form className="max-w-xl mx-auto flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <input type="text" placeholder="Your Name" className="input-premium" />
            <input type="email" placeholder="Your Email" className="input-premium" />
          </div>
          <input type="text" placeholder="Subject" className="input-premium" />
          <textarea
            rows={4}
            placeholder="Tell me about your project..."
            className="input-premium resize-none"
          />
          <button
            type="submit"
            className="self-start inline-flex items-center gap-3 bg-foreground text-primary-foreground px-10 py-4 text-[13px] font-body font-medium tracking-[0.1em] uppercase hover:bg-foreground/85 transition-all duration-500 group"
          >
            Send Message
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>

        <div className="mt-28 pt-10 border-t border-border flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="mailto:hello@dnova.design" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
            hello@dnova.design
          </a>
          <div className="flex gap-8">
            {["Dribbble", "Behance", "LinkedIn", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[12px] font-body font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {social}
              </a>
            ))}
          </div>
          <span className="text-[12px] font-body text-muted-foreground">© 2024 D.Nova</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
