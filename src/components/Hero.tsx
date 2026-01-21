'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="The Guildhall, London"
          fill
          priority
          className="object-cover"
          style={{
            transform: `scale(1.1) translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/90 via-navy-950/85 to-navy-950/95" />
        {/* Gold accent overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(201, 162, 39, 0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 60%, rgba(201, 162, 39, 0.2) 0%, transparent 50%)
            `,
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Decorative geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large diagonal lines */}
        <div
          className="absolute top-0 right-0 w-px h-[200%] bg-gradient-to-b from-transparent via-gold-500/30 to-transparent origin-top-right"
          style={{ transform: 'rotate(-30deg) translateX(200px)' }}
        />
        <div
          className="absolute top-0 left-0 w-px h-[200%] bg-gradient-to-b from-transparent via-gold-500/20 to-transparent origin-top-left"
          style={{ transform: 'rotate(30deg) translateX(-100px)' }}
        />

        {/* Corner accents */}
        <svg
          className="absolute top-24 left-8 w-32 h-32 text-gold-500/20"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 0 L100 0 L100 8 L8 8 L8 100 L0 100 Z" fill="currentColor" />
        </svg>
        <svg
          className="absolute bottom-24 right-8 w-32 h-32 text-gold-500/20 rotate-180"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path d="M0 0 L100 0 L100 8 L8 8 L8 100 L0 100 Z" fill="currentColor" />
        </svg>

        {/* Horizontal accent lines */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-gold-500/40 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-32 h-px bg-gradient-to-l from-gold-500/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-gold-500" />
            <span className="text-gold-400 text-sm uppercase tracking-[0.3em] font-medium">
              Thursday 30th April 2026
            </span>
            <span className="w-12 h-px bg-gold-500" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 mb-6"
        >
          <span className="block">City of London</span>
          <span className="block text-gold-gradient">Wealth Management</span>
          <span className="block">Awards</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-cream-100/70 mb-12 font-light"
        >
          Celebrating excellence in wealth management at the historic Guildhall.
          <br className="hidden sm:block" />
          Nominations now open for 2026.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#nominate"
            className="btn-primary group"
          >
            Submit Nomination
            <svg
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
          <Link href="/2025" className="btn-outline text-cream-50 border-cream-50/50 hover:bg-cream-50 hover:text-navy-950">
            View 2025 Winners
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 grid grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { value: '12+', label: 'Years of Excellence' },
            { value: '25+', label: 'Award Categories' },
            { value: '1000s', label: 'Public Votes' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-[family-name:var(--font-display)] text-gold-400 mb-2">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-cream-100/50 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border border-cream-100/40 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-gold-500 rounded-full" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
