import { forwardRef } from 'react';
import { ArrowRight } from 'lucide-react';

interface PortfolioSectionProps {
  ref: (el: HTMLDivElement) => void;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tesla, Inc. Equity Valuation",
    description: "Comprehensive valuation analysis of Tesla using multiple methodologies including DCF, comparable analysis, and scenario modeling.",
    image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Equity Valuation",
    tags: ["DCF Analysis", "Comparable Analysis", "Financial Modeling"],
    link: "#"
  },
  {
    id: 2,
    title: "Microsoft-Activision Merger Analysis",
    description: "In-depth analysis of the Microsoft-Activision merger, including synergy valuation, accretion/dilution analysis, and regulatory considerations.",
    image: "https://images.unsplash.com/photo-1579226905180-636b76d96082?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "M&A Analysis",
    tags: ["M&A Modeling", "Synergy Analysis", "Regulatory Impact"],
    link: "#"
  },
  {
    id: 3,
    title: "Optimal Portfolio Construction",
    description: "Development of an optimal investment portfolio using Modern Portfolio Theory, factor models, and risk-adjusted return optimization.",
    image: "https://images.unsplash.com/photo-1607788873471-55af740cd95f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Investment Strategy",
    tags: ["Portfolio Theory", "Risk Analysis", "Factor Models"],
    link: "#"
  },
  {
    id: 4,
    title: "Fintech Disruption in Banking",
    description: "Comprehensive analysis of fintech disruption in traditional banking, including market sizing, competitive landscape, and future projections.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "Industry Analysis",
    tags: ["Market Analysis", "Competitive Strategy", "Growth Projections"],
    link: "#"
  },
  {
    id: 5,
    title: "ESG Impact on Investment Returns",
    description: "Research study on the correlation between ESG factors and long-term investment returns across various sectors and market conditions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    category: "ESG Analysis",
    tags: ["ESG Metrics", "Performance Analysis", "Sustainable Finance"],
    link: "#"
  }
];

const PortfolioSection = forwardRef<HTMLDivElement, Omit<PortfolioSectionProps, 'ref'>>((props, ref) => {
  return (
    <section 
      id="portfolio" 
      className="py-20 bg-lightBg section-fade-in"
      ref={ref as any}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-4 text-center">
          Financial Analysis <span className="text-accent">Portfolio</span>
        </h2>
        <p className="text-center mb-12 max-w-3xl mx-auto">
          A showcase of my financial analysis and valuation projects that demonstrate my expertise 
          in investment analysis, corporate finance, and strategic financial planning.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="card bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-accent text-primary px-2 py-1 rounded text-sm font-bold">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-secondary px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-block text-accent hover:underline font-semibold flex items-center"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

PortfolioSection.displayName = "PortfolioSection";
export default PortfolioSection;
