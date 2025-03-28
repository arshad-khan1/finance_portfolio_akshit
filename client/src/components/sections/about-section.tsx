import { forwardRef } from 'react';
import { LinkedinIcon, Mail, Twitter } from 'lucide-react';

interface AboutSectionProps {
  ref: (el: HTMLDivElement) => void;
}

const AboutSection = forwardRef<HTMLDivElement, Omit<AboutSectionProps, 'ref'>>((props, ref) => {
  return (
    <section 
      id="about" 
      className="py-20 bg-lightBg section-fade-in"
      ref={ref as any}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl font-serif font-bold mb-6">
              About <span className="text-accent">Me</span>
            </h2>
            <p className="mb-4 text-lg">
              I am an MBA Finance student with a passion for investment banking and financial analysis. 
              My academic journey and professional experiences have equipped me with a comprehensive 
              understanding of financial markets, valuation methodologies, and strategic business analysis.
            </p>
            <p className="mb-6 text-lg">
              I am seeking opportunities in investment banking where I can leverage my analytical skills, 
              financial expertise, and strategic thinking to contribute to complex financial transactions 
              and create value for clients.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-serif font-bold mb-4">Career Objective</h3>
              <p className="text-lg">
                To secure a challenging position in investment banking that allows me to utilize my financial 
                analysis skills, strategic thinking, and academic knowledge to contribute to meaningful 
                transactions while continuously growing my expertise in the field.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-accent transition duration-300 text-white"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-accent transition duration-300 text-white"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="flex items-center justify-center w-12 h-12 rounded-full bg-primary hover:bg-accent transition duration-300 text-white"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-accent">
              <h3 className="text-xl font-serif font-bold mb-6">Educational Background</h3>
              
              <div className="mb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">Master of Business Administration (MBA)</h4>
                  <span className="text-sm bg-accent text-primary px-2 py-1 rounded">2021-2023</span>
                </div>
                <p className="text-gray-700 mb-1">Harvard Business School</p>
                <p className="text-gray-600 italic">Concentration in Finance and Investment Banking</p>
                <ul className="mt-2 list-disc pl-5">
                  <li>GPA: 3.9/4.0</li>
                  <li>Relevant Coursework: Advanced Financial Analysis, Corporate Valuation, Mergers & Acquisitions, Investment Banking, Private Equity & Venture Capital</li>
                </ul>
              </div>
              
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-lg font-bold">Bachelor of Science in Finance</h4>
                  <span className="text-sm bg-accent text-primary px-2 py-1 rounded">2017-2021</span>
                </div>
                <p className="text-gray-700 mb-1">Wharton School of Business, University of Pennsylvania</p>
                <p className="text-gray-600 italic">Minor in Economics</p>
                <ul className="mt-2 list-disc pl-5">
                  <li>GPA: 3.8/4.0</li>
                  <li>Dean's List: 7 consecutive semesters</li>
                  <li>Thesis: "Impact of Quantitative Easing on Equity Valuations in Emerging Markets"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";
export default AboutSection;
