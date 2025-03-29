import { useState, useEffect } from 'react';
import { Link, useRoute } from 'wouter';
import { ArrowLeft, Calendar, Tag, ExternalLink, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { projects, Project } from '../data/projects';
import { motion } from 'framer-motion';

export default function ProjectDetail() {
  const [, params] = useRoute('/project/:id');
  const projectId = params?.id ? parseInt(params.id) : null;
  const [project, setProject] = useState<Project | null>(null);
  
  useEffect(() => {
    if (projectId) {
      const foundProject = projects.find((p: Project) => p.id === projectId);
      setProject(foundProject || null);
    }
  }, [projectId]);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <div className="container mx-auto py-12">
        <Link href="/#portfolio">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Button>
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-8">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto"
              />
              <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-bold">
                {project.category}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag: string, index: number) => (
                <span key={index} className="bg-secondary px-3 py-1 rounded-full text-xs flex items-center">
                  <Tag className="mr-1 h-3 w-3" />
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="prose max-w-none">
              <p className="text-lg mb-6">{project.description}</p>
              
              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Project Overview</h2>
              <p>
                This comprehensive financial analysis project demonstrates advanced valuation techniques 
                and strategic financial insights. The analysis incorporates multiple methodologies to provide 
                a holistic view of the subject's financial position and future prospects.
              </p>
              
              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Methodology</h2>
              <p>
                The project employed a multi-faceted approach including:
              </p>
              <ul>
                <li>Discounted Cash Flow (DCF) analysis with sensitivity testing</li>
                <li>Comparable company analysis using relevant industry metrics</li>
                <li>Scenario modeling to account for various market conditions</li>
                <li>Risk assessment and mitigation strategies</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Key Findings</h2>
              <p>
                Through rigorous analysis, the project revealed several key insights:
              </p>
              <ul>
                <li>Growth potential assessment based on industry trends and company positioning</li>
                <li>Financial health evaluation through ratio analysis and cash flow projections</li>
                <li>Competitive advantage assessment and sustainability analysis</li>
                <li>Identification of potential risks and mitigating factors</li>
              </ul>
              
              <h2 className="text-2xl font-serif font-bold mt-8 mb-4">Implications & Recommendations</h2>
              <p>
                Based on the analysis, the project offers strategic recommendations for stakeholders:
              </p>
              <ul>
                <li>Investment strategy guidance based on expected returns and risk profiles</li>
                <li>Capital allocation recommendations to optimize financial performance</li>
                <li>Strategic positioning advice to enhance competitive advantage</li>
                <li>Risk management strategies to protect stakeholder value</li>
              </ul>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-muted rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              <Separator className="mb-4" />
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Category</p>
                  <p className="font-medium">{project.category}</p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Completed</p>
                  <p className="font-medium flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    October 2023
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Tools & Methods</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag: string, index: number) => (
                      <span key={index} className="bg-background px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Separator className="my-4" />
                
                <a 
                  href={project.link || "#"} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button className="w-full mb-3">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Full Report
                  </Button>
                </a>
                
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Project
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}