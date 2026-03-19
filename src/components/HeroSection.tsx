import { ArrowDown } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="relative z-10 order-2 lg:order-1">
            {/* Vertical Text */}
            <div className="hidden lg:block absolute -left-12 top-1/2 -translate-y-1/2">
              <span className="text-vertical text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">
                Product designer
              </span>
            </div>

            {/* Stats */}
            <div className="flex gap-10 mb-10 animate-fade-up">
              <div>
                <span className="text-3xl md:text-4xl font-display font-bold text-foreground">+200</span>
                <p className="text-xs font-body text-muted-foreground mt-1">Project completed</p>
              </div>
              <div>
                <span className="text-3xl md:text-4xl font-display font-bold text-foreground">+50</span>
                <p className="text-xs font-body text-muted-foreground mt-1">Startup raised</p>
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-display font-black text-foreground leading-[0.9] mb-6 animate-fade-up-delay-1">
              Hello
            </h1>

            {/* Subtext */}
            <p className="text-base md:text-lg font-body text-muted-foreground animate-fade-up-delay-2">
              — It's D.Nova a design wizard
            </p>

            {/* Scroll indicator */}
            <div className="mt-20 lg:mt-32 animate-fade-up-delay-3">
              <a
                href="#about-me"
                className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Scroll down <ArrowDown className="w-4 h-4 scroll-bounce" />
              </a>
            </div>
          </div>

          {/* Right - Portrait */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-up">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src={heroPortrait}
                alt="D.Nova - Product Designer"
                className="w-full h-auto object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Year marker */}
      <div className="hidden lg:block absolute bottom-12 left-6 md:left-12">
        <span className="text-vertical text-xs font-body tracking-[0.3em] text-muted-foreground">
          2024
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
