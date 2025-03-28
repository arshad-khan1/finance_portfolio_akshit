import { useState, useEffect } from 'react';
import { Link } from 'wouter';

interface NavbarProps {
  scrolled: boolean;
  onMenuToggle: () => void;
}

export default function Navbar({ scrolled, onMenuToggle }: NavbarProps) {
  return (
    <nav 
      className={`navbar-fixed fixed w-full z-50 px-6 py-4 flex justify-between items-center ${
        scrolled ? 'scrolled' : ''
      }`}
    >
      <div className="text-2xl font-bold font-serif text-white">
        <Link href="/#home">Alex Morgan</Link>
      </div>
      
      <div className="hidden md:block">
        <ul className="flex space-x-8">
          <li>
            <a href="#about" className="nav-link text-white hover:text-accent transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="nav-link text-white hover:text-accent transition duration-300">
              Experience
            </a>
          </li>
          <li>
            <a href="#portfolio" className="nav-link text-white hover:text-accent transition duration-300">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#achievements" className="nav-link text-white hover:text-accent transition duration-300">
              Achievements
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link text-white hover:text-accent transition duration-300">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link text-white hover:text-accent transition duration-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
      
      <div className="md:hidden">
        <button 
          onClick={onMenuToggle}
          className="text-white focus:outline-none" 
          aria-label="Toggle mobile menu"
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
              d="M4 6h16M4 12h16M4 18h16" 
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
