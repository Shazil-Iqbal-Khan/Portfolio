import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const posts = [
  { title: "The Art of Minimal Design in 2024", desc: "Why less continues to be more in modern digital experiences, and how to apply minimalism without sacrificing usability.", date: "Mar 12, 2024" },
  { title: "Building Design Systems That Scale", desc: "A practical guide to creating design systems that grow with your product and empower entire teams.", date: "Feb 28, 2024" },
  { title: "From Concept to Launch: My Process", desc: "An inside look at how I take projects from initial research through final delivery.", date: "Jan 15, 2024" },
];

const BlogSection = () => {
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
    <section id="blog" className="py-24 md:py-32 bg-secondary/50">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 md:px-12 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <span className="text-xs font-body tracking-[0.3em] uppercase text-muted-foreground">Blog</span>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mt-3 mb-16">Latest Thoughts</h2>

        <div className="flex flex-col divide-y divide-border">
          {posts.map((post) => (
            <a key={post.title} href="#" className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:opacity-70 transition-opacity duration-300">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-display font-semibold text-foreground flex items-center gap-2">
                  {post.title}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </h3>
                <p className="text-sm font-body text-muted-foreground mt-2 max-w-xl">{post.desc}</p>
              </div>
              <span className="text-sm font-body text-muted-foreground whitespace-nowrap">{post.date}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
