import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="contact" className="py-20 sm:py-28 md:py-40 relative overflow-hidden">
      <div className="absolute -bottom-40 -right-40 w-72 sm:w-96 h-72 sm:h-96 rounded-full border border-border/20 pointer-events-none" />

      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16 md:mb-20">
          <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mt-3 sm:mt-4 tracking-tight leading-[1.05]">
            Let's work<br />together
          </h2>
          <p className="text-sm sm:text-[15px] font-body font-light text-muted-foreground mt-4 sm:mt-6 leading-relaxed max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something extraordinary.
          </p>
        </div>

        <form className="max-w-xl mx-auto flex flex-col gap-6 sm:gap-8" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
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
            className="self-start inline-flex items-center gap-3 bg-foreground text-primary-foreground px-8 sm:px-10 py-3.5 sm:py-4 text-[12px] sm:text-[13px] font-body font-medium tracking-[0.1em] uppercase hover:bg-foreground/85 transition-all duration-500 group"
          >
            Send Message
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>

        <div className="mt-20 sm:mt-28 pt-8 sm:pt-10 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          <a href="mailto:hello@dnova.design" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
            hello@dnova.design
          </a>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {["Dribbble", "Behance", "LinkedIn", "Twitter"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[11px] sm:text-[12px] font-body font-medium tracking-[0.1em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {social}
              </a>
            ))}
          </div>
          <span className="text-[11px] sm:text-[12px] font-body text-muted-foreground">© 2024 D.Nova</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
