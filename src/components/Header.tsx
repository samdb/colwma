'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { getAvailableYears } from '@/data/years';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isYearsDropdownOpen, setIsYearsDropdownOpen] = useState(false);
  const years = getAvailableYears();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    // Check initial position on mount
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-navy-950/95 backdrop-blur-md shadow-lg shadow-navy-950/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10 group">
            <div className="relative h-12 w-auto lg:h-16">
              <Image
                src="/colwma/images/logo.png"
                alt="COLWMA - City of London Wealth Management Awards"
                width={200}
                height={64}
                className="object-contain h-full w-auto"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/mudlarkers-club">Mudlarkers Club</NavLink>

            {/* Years Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsYearsDropdownOpen(true)}
              onMouseLeave={() => setIsYearsDropdownOpen(false)}
            >
              <button className="px-4 py-2 text-cream-100/80 hover:text-gold-400 transition-colors text-sm font-medium tracking-wide flex items-center gap-1">
                Past Years
                <svg
                  className={`w-4 h-4 transition-transform ${isYearsDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {isYearsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-navy-900/95 backdrop-blur-md rounded-lg shadow-xl shadow-navy-950/50 border border-navy-700/50 py-2 min-w-[140px]"
                  >
                    {years.map((year) => (
                      <Link
                        key={year}
                        href={`/${year}`}
                        className="block px-4 py-2 text-cream-100/80 hover:text-gold-400 hover:bg-navy-800/50 transition-colors text-sm"
                      >
                        {year}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/#nominate"
              className="ml-4 px-6 py-2.5 bg-gold-500 text-navy-950 font-medium text-sm tracking-wide hover:bg-gold-400 transition-all hover:shadow-lg hover:shadow-gold-500/20"
            >
              Nominate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-10 p-2 text-cream-100"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all origin-left ${
                  isMobileMenuOpen ? 'rotate-45 translate-x-px' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all origin-left ${
                  isMobileMenuOpen ? '-rotate-45 translate-x-px' : ''
                }`}
              />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-md border-t border-navy-800/50"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-4">
              <MobileNavLink href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink href="/mudlarkers-club" onClick={() => setIsMobileMenuOpen(false)}>
                Mudlarkers Club
              </MobileNavLink>

              <div className="pt-2 border-t border-navy-800/50">
                <div className="text-cream-100/40 text-xs uppercase tracking-widest mb-3">
                  Past Years
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {years.map((year) => (
                    <Link
                      key={year}
                      href={`/${year}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="px-3 py-2 text-center text-cream-100/80 hover:text-gold-400 hover:bg-navy-800/50 rounded transition-colors text-sm"
                    >
                      {year}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/#nominate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 w-full py-3 bg-gold-500 text-navy-950 font-medium text-center tracking-wide"
              >
                Nominate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-2 text-cream-100/80 hover:text-gold-400 transition-colors text-sm font-medium tracking-wide relative group"
    >
      {children}
      <span className="absolute bottom-0 left-4 right-4 h-px bg-gold-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
    </Link>
  );
}

function MobileNavLink({
  href,
  onClick,
  children,
}: {
  href: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="text-cream-100 hover:text-gold-400 transition-colors text-lg font-medium"
    >
      {children}
    </Link>
  );
}
