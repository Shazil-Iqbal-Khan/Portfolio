import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

const projects = [
  { title: "Lumière Brand", category: "Web Design", year: "2024", image: project1 },
  { title: "Finova Dashboard", category: "UI/UX Design", year: "2024", image: project2 },
  { title: "Harlesk Identity", category: "Branding", year: "2023", image: project3 },
  { title: "Commerce Plus", category: "E-Commerce", year: "2023", image: project4 },
];

const PortfolioSection = () => {
  const { ref, visible } = useScrollReveal(0.05);

  return (
    <section id="portfolio" className="py-20 sm:py-28 md:py-40 bg-secondary/30">
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <div className="flex items-end justify-between mb-12 sm:mb-16 md:mb-20">
          <div>
            <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
              Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground mt-3 sm:mt-4 tracking-tight">
              Selected Works
            </h2>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-2 text-[13px] font-body font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group">
            View All <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className={`stagger-children ${visible ? "visible" : ""} grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10`}>
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="overflow-hidden bg-muted relative aspect-[4/3]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[800ms] ease-out"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-all duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-background/90 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-foreground" />
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 sm:mt-5">
                <div>
                  <h3 className="text-base sm:text-lg font-display font-semibold text-foreground group-hover:tracking-wider transition-all duration-500">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-[12px] font-body font-medium tracking-[0.1em] uppercase text-muted-foreground mt-1">
                    {project.category}
                  </p>
                </div>
                <span className="text-[11px] sm:text-[12px] font-body text-muted-foreground">{project.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile view all */}
        <div className="sm:hidden mt-10 text-center">
          <a href="#" className="inline-flex items-center gap-2 text-[13px] font-body font-medium text-muted-foreground">
            View All Projects <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
