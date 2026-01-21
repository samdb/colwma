'use client';

import { motion } from 'motion/react';

const benefits = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
        />
      </svg>
    ),
    title: 'Brand Recognition',
    description:
      'Increase brand recognition and attract new clients by featuring in the public online vote with extensive media coverage.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
    title: 'Investor Feedback',
    description:
      'Gain valuable feedback from prospective investors who participate in the public voting process.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    title: 'Award Ceremony',
    description:
      `The opportunity to receive a prestigious award at The Guildhall, one of London's most iconic venues.`,
  },
];

export default function Benefits() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium">
              Why Enter
            </span>
            <h2 className="heading-display text-4xl md:text-5xl text-navy-900 mt-4">
              Benefits of Entering
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="card-lift group relative p-8 lg:p-10 bg-cream-50 border border-cream-200 hover:border-gold-500/50"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-px h-8 bg-gold-500/30 group-hover:bg-gold-500 transition-colors" />
                <div className="absolute top-0 right-0 h-px w-8 bg-gold-500/30 group-hover:bg-gold-500 transition-colors" />
              </div>

              <div className="text-gold-500 mb-6">{benefit.icon}</div>
              <h3 className="text-xl font-[family-name:var(--font-display)] text-navy-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-navy-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-24 flex justify-center">
          <div className="flex items-center gap-4">
            <div className="w-24 h-px bg-gradient-to-r from-transparent to-gold-500/50" />
            <svg className="w-6 h-6 text-gold-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
            </svg>
            <div className="w-24 h-px bg-gradient-to-l from-transparent to-gold-500/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
