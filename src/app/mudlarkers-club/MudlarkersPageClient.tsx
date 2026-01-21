'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { mudlarkersRollOfHonour } from '@/data/years';

export default function MudlarkersPageClient() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-950 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        </div>

        {/* Decorative mudlark silhouette */}
        <div className="absolute right-0 bottom-0 w-1/3 h-full opacity-5">
          <svg viewBox="0 0 200 400" fill="currentColor" className="w-full h-full text-gold-500">
            <path d="M100 50 C60 80 40 120 50 180 C55 220 70 260 60 320 C55 360 80 380 100 390 C120 380 145 360 140 320 C130 260 145 220 150 180 C160 120 140 80 100 50 Z" />
            <circle cx="85" cy="100" r="8" />
            <circle cx="115" cy="100" r="8" />
            <path d="M90 130 Q100 145 110 130" fill="none" stroke="currentColor" strokeWidth="3" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold-500" />
              <span className="text-gold-400 text-sm uppercase tracking-[0.2em]">
                Celebrating Back Office Excellence
              </span>
            </div>

            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-cream-50 mb-6">
              The Mudlarkers
              <br />
              <span className="text-gold-gradient">Club</span>
            </h1>

            <p className="text-cream-100/70 text-lg md:text-xl max-w-2xl">
              Recognising the exceptional individuals who work tirelessly behind the scenes
              to make the wealth management industry thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-cream-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-8">
                The Mudlark Award
              </h2>

              <div className="prose prose-lg text-navy-600">
                <p>
                  Each year, COLWMA presents the prestigious <strong>Mudlark Award for Exceptional
                  Performance in the Back Office</strong> to a worthy recipient as determined by
                  the independent judging panel.
                </p>

                <p>
                  The Mudlark Award was introduced by <strong>Clay Harris</strong>, an award-winning
                  journalist for the Financial Times from 1979 to 2007. In his Mudlark column,
                  which ran from 2004-2007, Clay regularly championed the &ldquo;back-office&rdquo; staff
                  who he believed were often overlooked and taken for granted.
                </p>

                <p>
                  <strong>Mudlarkers</strong>, like Clay and Goodacre, know that exceptional
                  &ldquo;back-office&rdquo; staff are key to the success of a company. By founding
                  this Mudlarkers Club, we aim to promote and champion our &ldquo;back-office&rdquo;
                  colleagues and recognise those who deserve consideration for a prestigious
                  Mudlark Award.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Quote card */}
              <div className="bg-white p-8 lg:p-10 shadow-xl shadow-navy-950/5 border-l-4 border-gold-500">
                <svg
                  className="w-12 h-12 text-gold-500/30 mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>

                <p className="text-navy-900 text-xl font-[family-name:var(--font-display)] italic leading-relaxed mb-6">
                  &ldquo;The back office is the engine room of any wealth management firm.
                  Without exceptional people keeping everything running smoothly,
                  the front office simply couldn&apos;t function.&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-cream-50 font-medium">
                    CH
                  </div>
                  <div>
                    <div className="font-medium text-navy-900">Clay Harris</div>
                    <div className="text-sm text-navy-600">Financial Times, 2004-2007</div>
                  </div>
                </div>
              </div>

              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold-500/30 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roll of Honour */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium">
              Hall of Fame
            </span>
            <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mt-4">
              Mudlark Award Roll of Honour
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {mudlarkersRollOfHonour.map((recipient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-6 py-6 border-b border-cream-200 last:border-b-0"
              >
                {/* Year */}
                <div className="flex-shrink-0 w-20 text-3xl font-[family-name:var(--font-display)] text-gold-500 group-hover:text-gold-400 transition-colors">
                  {recipient.year}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="text-xl font-[family-name:var(--font-display)] text-navy-900">
                    {recipient.name}
                  </div>
                  <div className="text-navy-600">{recipient.company}</div>
                </div>

                {/* Trophy icon */}
                <div className="flex-shrink-0 text-gold-500/30 group-hover:text-gold-500 transition-colors">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M5 3h14c.55 0 1 .45 1 1v2c0 2.55-1.92 4.63-4.39 4.94.66.42 1.11 1.15 1.11 1.98V17h1c.55 0 1 .45 1 1s-.45 1-1 1H6c-.55 0-1-.45-1-1s.45-1 1-1h1v-4.08c0-.83.45-1.56 1.11-1.98C5.92 10.63 4 8.55 4 6V4c0-.55.45-1 1-1zm2 2v1c0 1.66 1.34 3 3 3h4c1.66 0 3-1.34 3-3V5H7z" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nominate CTA */}
      <section className="py-20 lg:py-28 bg-navy-950 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '32px 32px',
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-display text-3xl md:text-4xl text-cream-50 mb-6">
              Know Someone Who Deserves Recognition?
            </h2>
            <p className="text-cream-100/60 mb-8 max-w-2xl mx-auto">
              If you know an exceptional back-office professional who goes above and beyond,
              we want to hear from you. Help us celebrate the unsung heroes of wealth management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/#nominate" className="btn-primary">
                Submit a Nomination
              </Link>
              <Link href="/2025" className="btn-outline text-gold-400 border-gold-500 hover:bg-gold-500 hover:text-navy-950">
                View Past Winners
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
