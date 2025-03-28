import { forwardRef } from 'react';
import { MapPin, Calendar, UserRound } from 'lucide-react';

interface ExperienceSectionProps {
  ref: (el: HTMLDivElement) => void;
}

const ExperienceSection = forwardRef<HTMLDivElement, Omit<ExperienceSectionProps, 'ref'>>((props, ref) => {
  return (
    <section 
      id="experience" 
      className="py-20 bg-secondary section-fade-in"
      ref={ref as any}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
          Professional <span className="text-accent">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-8 text-white">
              <div className="mb-6">
                <div className="w-full h-32 bg-[url('https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] rounded-md mb-4 bg-cover bg-center"></div>
                <h3 className="text-xl font-bold">Morgan Stanley</h3>
                <p className="text-accent">Investment Banking Division</p>
              </div>
              
              <div>
                <p className="mb-2 flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  New York, NY
                </p>
                <p className="mb-2 flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Summer 2022
                </p>
                <p className="flex items-center">
                  <UserRound className="mr-2 h-4 w-4" />
                  Investment Banking Analyst Intern
                </p>
              </div>
            </div>
            
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Investment Banking Summer Analyst</h3>
              <p className="mb-6 text-gray-700">
                Completed a 10-week intensive internship program with the Investment Banking Division, 
                focusing on M&A transactions and financial analysis for Fortune 500 clients.
              </p>
              
              <h4 className="text-lg font-bold mb-2">Key Responsibilities:</h4>
              <ul className="list-disc pl-5 mb-6 text-gray-700">
                <li>Performed financial modeling and valuation analysis for a $2.3B acquisition in the technology sector</li>
                <li>Conducted industry research and competitive analysis for client presentations</li>
                <li>Created pitch books and presentation materials for senior management</li>
                <li>Participated in due diligence processes and client meetings</li>
                <li>Developed financial projections and cash flow forecasts for multiple clients</li>
              </ul>
              
              <h4 className="text-lg font-bold mb-2">Key Achievement:</h4>
              <p className="bg-secondary p-4 rounded-lg text-gray-800">
                Developed a specialized DCF model that improved valuation accuracy by 12% for a major 
                client transaction, which was adopted by the team for future analyses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";
export default ExperienceSection;
