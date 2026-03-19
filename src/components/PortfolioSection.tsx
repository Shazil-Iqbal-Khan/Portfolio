import { useEffect, useRef, useState } from "react";
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
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-secondary/50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3">Selected Works</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 md:h-80 object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <div>
                  <h3 className="text-lg font-display font-semibold text-foreground">{project.title}</h3>
                  <p className="text-sm font-body text-muted-foreground">{project.category}</p>
                </div>
                <span className="text-sm font-body text-muted-foreground">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
