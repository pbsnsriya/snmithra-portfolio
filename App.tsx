import React, { useState, useEffect } from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ChatAssistant from './components/ChatAssistant';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';

// Custom SVG Logo Component for cohesive branding
const MithraLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="50" cy="50" r="45" stroke="url(#paint0_linear)" strokeWidth="4"/>
    <path d="M50 20L75.9808 35V65L50 80L24.0192 65V35L50 20Z" stroke="url(#paint1_linear)" strokeWidth="3"/>
    <circle cx="50" cy="50" r="15" fill="url(#paint2_radial)"/>
    <defs>
      <linearGradient id="paint0_linear" x1="0" y1="50" x2="100" y2="50" gradientUnits="userSpaceOnUse">
        <stop stopColor="#00D4FF"/>
        <stop offset="1" stopColor="#006688"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="50" y1="20" x2="50" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#006688"/>
        <stop offset="1" stopColor="#00D4FF"/>
      </linearGradient>
      <radialGradient id="paint2_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50 50) rotate(90) scale(15)">
        <stop stopColor="#00D4FF"/>
        <stop offset="1" stopColor="#00D4FF" stopOpacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative w-full min-h-screen bg-mithra-dark text-white selection:bg-mithra-primary selection:text-black">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-mithra-dark/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <MithraLogo className="w-10 h-10 group-hover:rotate-180 transition-transform duration-700 ease-in-out" />
            <span className="font-tech text-2xl font-bold tracking-wider text-white">
              SN <span className="text-transparent bg-clip-text bg-gradient-to-r from-mithra-primary to-white">MITHRA</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-mithra-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-mithra-primary transition-colors" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0a0a16]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 shadow-2xl">
             {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-mithra-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* 3D Background */}
        <Hero3D />

        {/* Hero Content Overlay */}
        <motion.div 
          style={{ opacity, y }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none" // pointer-events-none allows interaction with 3D if needed, but here mostly for layout
        >
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-mithra-primary/30 bg-mithra-primary/5 backdrop-blur-md text-sm tracking-[0.2em] uppercase text-mithra-primary font-bold shadow-[0_0_20px_rgba(0,212,255,0.2)]">
            Architecting the Future
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-tech font-bold tracking-tight mb-8 text-white drop-shadow-2xl">
            DIGITAL REALITY <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mithra-primary via-white to-mithra-primary animate-pulse">ENGINEERED</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Premier software solutions delivered via exclusive <span className="text-mithra-primary font-semibold">contracts</span> and scalable <span className="text-mithra-primary font-semibold">API subscriptions</span>.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center pointer-events-auto">
            <a href="#services" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-mithra-primary transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_rgba(0,212,255,0.6)] hover:scale-105">
              Explore Solutions
            </a>
            <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:border-mithra-primary/50 transition-all backdrop-blur-sm hover:scale-105">
              Start a Project
            </a>
          </div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 shadow-[0_0_10px_rgba(0,0,0,0.5)]">
                <div className="w-1 h-2 bg-mithra-primary rounded-full shadow-[0_0_5px_#00D4FF]"></div>
            </div>
        </motion.div>
      </header>

      {/* Main Content Sections */}
      <div className="relative z-10 bg-mithra-dark shadow-[0_-20px_50px_rgba(0,0,0,1)]">
        <Services />
        <Projects />
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-black py-16 px-6 border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-gray-500 text-sm">
          <div className="flex items-center gap-3">
             <MithraLogo className="w-8 h-8 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500" />
             <div>
                <span className="font-tech text-white text-lg font-bold mr-2 block">SN MITHRA</span>
                <span className="text-xs">&copy; {new Date().getFullYear()} NextGen Solutions.</span>
             </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-mithra-primary transition-colors hover:underline underline-offset-4 decoration-mithra-primary">Privacy Policy</a>
            <a href="#" className="hover:text-mithra-primary transition-colors hover:underline underline-offset-4 decoration-mithra-primary">Terms of Service</a>
            <a href="#" className="hover:text-mithra-primary transition-colors hover:underline underline-offset-4 decoration-mithra-primary">LinkedIn</a>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;