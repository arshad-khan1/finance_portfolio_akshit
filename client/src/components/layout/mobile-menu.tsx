import { useEffect } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    onClose();
  };

  return (
    <div 
      className={`fixed top-0 left-0 w-full h-screen bg-primary z-40 transform transition duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex justify-end p-6">
        <button 
          onClick={onClose}
          className="text-white focus:outline-none"
          aria-label="Close menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      </div>
      
      <ul className="flex flex-col items-center justify-center h-full space-y-8 -mt-16">
        <li>
          <a 
            href="#about" 
            className="text-white text-2xl hover:text-accent transition duration-300"
            onClick={handleLinkClick}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#experience" 
            className="text-white text-2xl hover:text-accent transition duration-300"
            onClick={handleLinkClick}
          >
            Experience
          </a>
        </li>
        <li>
          <a 
            href="#portfolio" 
            className="text-white text-2xl hover:text-accent transition duration-300"
            onClick={handleLinkClick}
          >
            Portfolio
          </a>
        </li>
        <li>
          <a 
            href="#achievements" 
            className="text-white text-2xl hover:text-accent transition duration-300"
            onClick={handleLinkClick}
          >
            Achievements
          </a>
        </li>
        <li>
          <a 
            href="#skills" 
            className="text-white text-2xl hover:text-accent transition duration-300"
            onClick={handleLinkClick}
          >
            Skills
          </a>
        </li>
        <li>
          <a 
            href="#blog" 
            className="text-white text-2xl hover:text-accent transition duration-300"
            onClick={handleLinkClick}
          >
            Blog
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className="text-white text-2xl hover:text-accent transition duration-300"
            onClick={handleLinkClick}
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
