import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "The Art of Minimal Design in 2024", desc: "Why less continues to be more in modern digital experiences, and how to apply minimalism without sacrificing usability.", date: "Mar 12, 2024", readTime: "5 min" },
  { title: "Building Design Systems That Scale", desc: "A practical guide to creating design systems that grow with your product and empower entire teams.", date: "Feb 28, 2024", readTime: "8 min" },
  { title: "From Concept to Launch: My Process", desc: "An inside look at how I take projects from initial research through final delivery.", date: "Jan 15, 2024", readTime: "6 min" },
];

const BlogSection = () => {
  const { ref, visible } = useScrollReveal();

  return (
    <section id="blog" className="py-20 sm:py-28 md:py-40 bg-secondary/30">
      <div
        ref={ref}
        className={`section-reveal ${visible ? "visible" : ""} max-w-7xl mx-auto px-5 sm:px-8 md:px-12`}
      >
        <span className="text-[10px] font-body font-medium tracking-[0.4em] uppercase text-muted-foreground">
          Blog
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-display font-bold text-foreground mt-3 sm:mt-4 mb-12 sm:mb-16 md:mb-20 tracking-tight">
          Latest Thoughts
        </h2>

        <div className={`stagger-children ${visible ? "visible" : ""} flex flex-col`}>
          {posts.map((post, i) => (
            <a
              key={post.title}
              href="#"
              className="group py-7 sm:py-10 flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 border-t border-border last:border-b hover:pl-2 sm:hover:pl-4 transition-all duration-500"
            >
              <div className="flex items-baseline gap-4 sm:gap-6 flex-1">
                <span className="text-[11px] font-body text-muted-foreground/30 font-medium tabular-nums hidden sm:block">
                  0{i + 1}
                </span>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-2 sm:gap-3 group-hover:tracking-wide transition-all duration-500">
                    {post.title}
                    <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex-shrink-0" />
                  </h3>
                  <p className="text-[12px] sm:text-[13px] font-body font-light text-muted-foreground mt-1.5 sm:mt-2 max-w-xl leading-relaxed line-clamp-2 sm:line-clamp-none">
                    {post.desc}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 sm:gap-6 md:gap-8 sm:pl-0">
                <span className="text-[11px] sm:text-[12px] font-body text-muted-foreground whitespace-nowrap">{post.readTime}</span>
                <span className="text-[11px] sm:text-[12px] font-body text-muted-foreground whitespace-nowrap">{post.date}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
