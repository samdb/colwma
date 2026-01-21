'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { years } from '@/data/years';

export default function PastWinners() {
  const recentYears = years.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" className="text-gold-500" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium">
              Hall of Fame
            </span>
            <h2 className="heading-display text-4xl md:text-5xl text-cream-50 mt-4">
              Past Winners
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Link
              href="/2025"
              className="btn-outline text-gold-400 border-gold-500 hover:bg-gold-500 hover:text-navy-950"
            >
              View All Years
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentYears.map((yearData, i) => (
            <motion.div
              key={yearData.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={`/${yearData.year}`}
                className="block group relative p-6 lg:p-8 bg-navy-900/50 border border-navy-700/50 hover:border-gold-500/50 transition-all card-lift"
              >
                {/* Year badge */}
                <div className="text-5xl lg:text-6xl font-[family-name:var(--font-display)] text-gold-400 mb-6 group-hover:text-gold-300 transition-colors">
                  {yearData.year}
                </div>

                {/* Venue */}
                <div className="text-cream-100/60 text-sm mb-4">{yearData.venue}</div>

                {/* Top winner preview */}
                {yearData.companyWinners[0] && (
                  <div className="border-t border-navy-700/50 pt-4 mt-4">
                    <div className="text-cream-100/40 text-xs uppercase tracking-wider mb-1">
                      Company of the Year
                    </div>
                    <div className="text-cream-100 font-medium">
                      {yearData.companyWinners[0].winner}
                    </div>
                  </div>
                )}

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 text-gold-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
