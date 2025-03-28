import { forwardRef } from 'react';
import { Progress } from '@/components/ui/progress';
import { Users, Globe, School } from 'lucide-react';

interface SkillsSectionProps {
  ref: (el: HTMLDivElement) => void;
}

const SkillsSection = forwardRef<HTMLDivElement, Omit<SkillsSectionProps, 'ref'>>((props, ref) => {
  return (
    <section 
      id="skills" 
      className="py-20 bg-lightBg section-fade-in"
      ref={ref as any}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
          Skills & <span className="text-accent">Expertise</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-xl font-serif font-bold mb-6">Skills Overview</h3>
              <div className="space-y-4">
                <p className="text-gray-700 mb-4">Key Finance Skills and Expertise</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Financial Modeling</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Valuation</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>M&A Analysis</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Capital Markets</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Financial Statements</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Investment Analysis</span>
                      <span>88%</span>
                    </div>
                    <Progress value={88} className="h-2.5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-xl font-serif font-bold mb-6">Technical & Soft Skills</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">Financial Analysis</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Financial Modeling</span>
                      <span>95%</span>
                    </div>
                    <Progress value={95} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Valuation</span>
                      <span>90%</span>
                    </div>
                    <Progress value={90} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>M&A Analysis</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Financial Forecasting</span>
                      <span>88%</span>
                    </div>
                    <Progress value={88} className="h-2.5" />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-bold mb-4">Software & Tools</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Excel & Financial Modeling</span>
                      <span>98%</span>
                    </div>
                    <Progress value={98} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Bloomberg Terminal</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Capital IQ</span>
                      <span>80%</span>
                    </div>
                    <Progress value={80} className="h-2.5" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span>Python for Finance</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2.5" />
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Soft Skills</h4>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-secondary px-3 py-2 rounded-full">Analytical Thinking</span>
                  <span className="bg-secondary px-3 py-2 rounded-full">Problem Solving</span>
                  <span className="bg-secondary px-3 py-2 rounded-full">Client Communication</span>
                  <span className="bg-secondary px-3 py-2 rounded-full">Teamwork</span>
                  <span className="bg-secondary px-3 py-2 rounded-full">Attention to Detail</span>
                  <span className="bg-secondary px-3 py-2 rounded-full">Time Management</span>
                  <span className="bg-secondary px-3 py-2 rounded-full">Strategic Thinking</span>
                  <span className="bg-secondary px-3 py-2 rounded-full">Presentation Skills</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-serif font-bold mb-6">Market Analysis & Industry Insights</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold mb-4">Recent Market Analysis</h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-accent pl-4">
                    <h5 className="font-bold">Impact of Fed Rate Hikes on Growth Stocks</h5>
                    <p className="text-gray-700 mt-1">
                      Analysis of correlation between interest rate increases and tech stock valuations in 2021-2022.
                    </p>
                    <a href="#" className="text-accent text-sm hover:underline">Read Analysis</a>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <h5 className="font-bold">ESG Investing Performance 2023</h5>
                    <p className="text-gray-700 mt-1">
                      Comparative study of ESG-focused funds against traditional indices during market volatility.
                    </p>
                    <a href="#" className="text-accent text-sm hover:underline">Read Analysis</a>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-bold mb-4">Industry Involvement</h4>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary rounded-full mr-4">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold">Harvard Finance Club</h5>
                      <p className="text-gray-700">Vice President, 2021-2023</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary rounded-full mr-4">
                      <Globe className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold">CFA Society Boston</h5>
                      <p className="text-gray-700">Student Member, 2021-Present</p>
                    </div>
                  </div>
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-secondary rounded-full mr-4">
                      <School className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-bold">Investment Banking Workshop</h5>
                      <p className="text-gray-700">Workshop Leader, 2022</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SkillsSection.displayName = "SkillsSection";
export default SkillsSection;
