import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Terminal } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Services', to: '/services' },
    { label: 'Industries', to: '/industries' },
    { label: 'Simulator', to: '/simulator' },
    { label: 'Case Studies', to: '/case-studies' },
    { label: 'Pricing', to: '/pricing' },
    { label: 'FAQ', to: '/faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40'
          : 'bg-transparent border-b border-neutral-900/50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly compliant Top Bar Contract: 1 row, 3 zones */}
        <div className="flex items-center justify-between h-20">
          
          {/* Zone 1: Single brand text element with sleek mark */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 flex items-center justify-center shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <span className="font-display font-extrabold text-white text-lg tracking-wider">N</span>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                Nexovira <span className="text-cyan-400 font-light">AI</span>
              </span>
            </div>
          </Link>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-medium transition-colors relative py-1 ${
                    isActive
                      ? 'text-cyan-400 font-semibold after:w-full after:h-[2px] after:bg-cyan-400 after:absolute after:bottom-0 after:left-0'
                      : 'text-neutral-300 hover:text-white hover:after:w-full after:w-0 after:h-[2px] after:bg-cyan-400 after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/simulator"
              className="px-3.5 py-2 text-xs font-semibold text-neutral-300 hover:text-cyan-300 bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-800 hover:border-cyan-500/40 rounded-lg transition-all flex items-center gap-1.5 whitespace-nowrap"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Agent Sandbox</span>
            </Link>
            <Link
              to="/contact"
              className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 rounded-lg shadow-sm shadow-cyan-500/25 transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              to="/contact"
              className="px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg whitespace-nowrap"
            >
              Book Call
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 backdrop-blur-xl border-b border-neutral-800 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            <Link
              to="/"
              className={`text-base font-medium py-1 transition-colors ${
                location.pathname === '/' ? 'text-cyan-400 font-bold' : 'text-neutral-300 hover:text-cyan-400'
              }`}
            >
              Home
            </Link>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-base font-medium py-1 transition-colors ${
                    isActive ? 'text-cyan-400 font-bold' : 'text-neutral-300 hover:text-cyan-400'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-4 border-t border-neutral-800 flex flex-col gap-3">
            <Link
              to="/simulator"
              className="w-full py-2.5 text-xs font-semibold text-cyan-300 bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center gap-2"
            >
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Launch Agent Sandbox</span>
            </Link>
            <Link
              to="/contact"
              className="w-full py-2.5 text-xs font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center gap-2"
            >
              <span>Book Discovery Call</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
