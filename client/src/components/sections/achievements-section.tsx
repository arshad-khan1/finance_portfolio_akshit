import { forwardRef } from 'react';
import { Trophy, Award, TrendingUp } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

interface AchievementsSectionProps {
  ref: (el: HTMLDivElement) => void;
}

const AchievementsSection = forwardRef<HTMLDivElement, Omit<AchievementsSectionProps, 'ref'>>((props, ref) => {
  return (
    <section 
      id="achievements" 
      className="py-20 bg-primary text-white section-fade-in"
      ref={ref as any}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
          Notable <span className="text-accent">Achievements</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-white text-darkText rounded-lg shadow-lg overflow-hidden">
            <div className="bg-accent h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mr-4">
                  <Trophy className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Global Investment Research Challenge</h3>
              </div>
              <p className="mb-4">
                Winner of the CFA Institute's Global Investment Research Challenge, representing Harvard Business School. 
                Conducted comprehensive equity research and valuation of a publicly-traded company.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">2022</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">1st Place</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white text-darkText rounded-lg shadow-lg overflow-hidden">
            <div className="bg-accent h-2"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mr-4">
                  <Award className="text-accent h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Financial Modeling World Championships</h3>
              </div>
              <p className="mb-4">
                Semi-finalist in the 2022 Financial Modeling World Championships, demonstrating exceptional 
                spreadsheet modeling skills, financial analysis, and valuation techniques.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">2022</span>
                <span className="bg-primary text-white px-3 py-1 rounded-full text-sm">Semi-Finalist</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-5xl mx-auto">
          <h3 className="text-2xl font-serif font-bold mb-8 text-center">Certifications & Progress</h3>
          
          <div className="bg-white text-darkText rounded-lg shadow-lg overflow-hidden mb-8">
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-full mr-4">
                  <TrendingUp className="text-primary h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">CFA Program Progress</h3>
                  <p className="text-gray-600">Chartered Financial Analyst</p>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Level I</span>
                  <span>Passed with top 10% score</span>
                </div>
                <Progress value={100} className="h-2.5" />
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Level II</span>
                  <span>Passed</span>
                </div>
                <Progress value={100} className="h-2.5" />
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Level III</span>
                  <span>Scheduled June 2023</span>
                </div>
                <Progress value={65} className="h-2.5" />
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white text-darkText rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="text-accent mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <h4 className="text-lg font-bold">Financial Modeling & Valuation Analyst (FMVA)</h4>
              </div>
              <p className="text-gray-700">Corporate Finance Institute</p>
              <span className="text-sm text-gray-600">Completed 2022</span>
            </div>
            
            <div className="bg-white text-darkText rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <svg className="text-accent mr-3 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <h4 className="text-lg font-bold">Bloomberg Market Concepts (BMC)</h4>
              </div>
              <p className="text-gray-700">Bloomberg L.P.</p>
              <span className="text-sm text-gray-600">Completed 2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AchievementsSection.displayName = "AchievementsSection";
export default AchievementsSection;
