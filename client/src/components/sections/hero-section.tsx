import { Button } from "@/components/ui/button";
import { ArrowDown, Linkedin, Mail, Phone, Github } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div className="h-full w-full bg-primary opacity-90"></div>
        <div className="absolute inset-0 w-full h-full object-cover -z-10 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')]"></div>
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-16 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Akshit Bakshi
            </h1>
            <h2 className="text-2xl md:text-3xl font-serif mb-6">
              <span className="text-accent">MBA Finance</span> Professional
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Specialized in financial analysis, valuation, and investment
              banking with a proven track record of delivering strategic
              insights and value creation.
            </p>

            {/* Social Links */}
            <div className="flex gap-6 mb-8">
              <a
                href="https://linkedin.com/in/akshitbakshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:akshit.bakshi@example.com"
                className="text-white hover:text-accent transition-colors"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+1234567890"
                className="text-white hover:text-accent transition-colors"
              >
                <Phone size={24} />
              </a>
              <a
                href="https://github.com/akshitbakshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-accent transition-colors"
              >
                <Github size={24} />
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="bg-accent hover:bg-opacity-90 text-primary font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 transform hover:scale-105">
                  Contact Me
                </Button>
              </a>
              <a href="#portfolio">
                <Button className="bg-white text-primary hover:bg-accent hover:text-white font-bold py-3 px-8 rounded-md shadow-lg transition duration-300 transform hover:scale-105">
                  View Portfolio
                </Button>
              </a>
            </div>
          </div>

          <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-80 md:w-80 md:h-96 rounded-2xl overflow-hidden border-4 border-accent shadow-xl">
              <img
                src="/assets/akshit_profile_photo.jpeg"
                alt="Akshit Bakshi"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <a href="#about" className="flex flex-col items-center">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
