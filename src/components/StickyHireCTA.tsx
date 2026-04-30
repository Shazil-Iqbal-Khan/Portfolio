import { useState, useEffect } from "react";
import { ArrowUpRight, X } from "lucide-react";

const StickyHireCTA = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (~80vh)
      setVisible(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-5 sm:right-8 z-40 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-2 bg-foreground text-primary-foreground shadow-2xl">
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 text-[12px] font-body font-medium tracking-[0.1em] uppercase hover:bg-foreground/85 transition-colors duration-300 group"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Hire Me
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
        <button
          onClick={() => setDismissed(true)}
          className="pr-3 text-primary-foreground/50 hover:text-primary-foreground transition-colors duration-200"
          aria-label="Dismiss"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default StickyHireCTA;
