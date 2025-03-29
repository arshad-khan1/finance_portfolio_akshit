export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tags: string[];
  link: string;
}

export const projects: Project[] = [
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