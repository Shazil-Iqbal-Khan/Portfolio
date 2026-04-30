import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = ["About Me", "Portfolio", "Services", "Certificates", "Blog"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/95 backdrop-blur-2xl shadow-[0_1px_0_hsl(var(--border)/0.5)]" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex items-center justify-between h-14 sm:h-16 md:h-20">
        <a href="#" className="font-display text-lg sm:text-xl font-bold tracking-tight text-foreground">
          M. Shazil Iqbal Khan
        </a>

        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                className="text-[13px] font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-foreground after:transition-all after:duration-300 hover:after:w-full"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-body font-medium text-foreground border border-foreground/15 px-5 py-2 hover:bg-foreground hover:text-primary-foreground transition-all duration-400 group"
        >
          Book A Call <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground p-1.5"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-14 sm:top-16 bg-background transition-all duration-500 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className="px-5 sm:px-8 py-10 flex flex-col h-full">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <li key={link} style={{ transitionDelay: isOpen ? `${i * 60}ms` : '0ms' }}
                className={`transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <a
                  href={`#${link.toLowerCase().replace(/\s/g, "-")}`}
                  className="text-2xl sm:text-3xl font-display font-semibold text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto pb-16">
            <div className="border-t border-border pt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Book A Call <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[12px] font-body text-muted-foreground mt-4">Programe.codeme@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
