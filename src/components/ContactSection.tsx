import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">Contact</span>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mt-3">
            Let's work together
          </h2>
          <p className="text-base font-body text-muted-foreground mt-4">
            Have a project in mind? I'd love to hear about it. Let's create something extraordinary.
          </p>
        </div>

        <form className="max-w-xl mx-auto flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-transparent border-b border-border py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-transparent border-b border-border py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full bg-transparent border-b border-border py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
          />
          <textarea
            rows={4}
            placeholder="Tell me about your project..."
            className="w-full bg-transparent border-b border-border py-3 text-sm font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
          />
          <button
            type="submit"
            className="self-start inline-flex items-center gap-2 bg-foreground text-primary-foreground px-8 py-3 text-sm font-body hover:opacity-80 transition-opacity duration-300"
          >
            Send Message <ArrowUpRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <div className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm font-body text-muted-foreground">hello@dnova.design</span>
          <div className="flex gap-6">
            {["Dribbble", "Behance", "LinkedIn", "Twitter"].map((social) => (
              <a key={social} href="#" className="text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300">
                {social}
              </a>
            ))}
          </div>
          <span className="text-sm font-body text-muted-foreground">© 2024 D.Nova</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
