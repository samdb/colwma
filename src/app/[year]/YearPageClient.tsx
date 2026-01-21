'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { YearData, getAvailableYears } from '@/data/years';
import PhotoGallery from '@/components/PhotoGallery';

interface Props {
  yearData: YearData;
  galleryImages: string[];
}

export default function YearPageClient({ yearData, galleryImages }: Props) {
  const allYears = getAvailableYears();
  const currentIndex = allYears.indexOf(yearData.year);
  const prevYear = allYears[currentIndex + 1];
  const nextYear = allYears[currentIndex - 1];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-navy-950 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-gold-500" />
              <span className="text-gold-400 text-sm uppercase tracking-[0.2em]">
                {yearData.date}
              </span>
              <span className="w-8 h-px bg-gold-500" />
            </div>

            <h1 className="heading-display text-6xl md:text-7xl lg:text-8xl text-cream-50 mb-6">
              <span className="text-gold-gradient">{yearData.year}</span>
            </h1>

            <p className="text-cream-100/60 text-lg max-w-2xl mx-auto mb-4">
              {yearData.venue}
            </p>

            <p className="text-cream-100/80 max-w-3xl mx-auto">
              {yearData.description}
            </p>
          </motion.div>

          {/* Year navigation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center items-center gap-8 mt-12"
          >
            {prevYear ? (
              <Link
                href={`/${prevYear}`}
                className="flex items-center gap-2 text-cream-100/60 hover:text-gold-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                {prevYear}
              </Link>
            ) : (
              <span className="w-16" />
            )}

            <div className="text-cream-100/30 text-sm">|</div>

            {nextYear ? (
              <Link
                href={`/${nextYear}`}
                className="flex items-center gap-2 text-cream-100/60 hover:text-gold-400 transition-colors"
              >
                {nextYear}
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ) : (
              <span className="w-16" />
            )}
          </motion.div>
        </div>
      </section>

      {/* Individual Winners */}
      {yearData.individualWinners.length > 0 && (
        <section className="py-20 lg:py-28 bg-cream-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium">
                Excellence Recognised
              </span>
              <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mt-4">
                Individual Award Winners
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {yearData.individualWinners.map((winner, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group p-6 bg-white border border-cream-200 hover:border-gold-500/50 transition-all card-lift"
                >
                  <div className="text-xs text-gold-500 uppercase tracking-wider mb-3">
                    {winner.category}
                  </div>
                  <div className="text-xl font-[family-name:var(--font-display)] text-navy-900 mb-1">
                    {winner.winner}
                  </div>
                  {winner.company && (
                    <div className="text-navy-600 text-sm">{winner.company}</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Company Winners */}
      {yearData.companyWinners.length > 0 && (
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium">
                Industry Leaders
              </span>
              <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mt-4">
                Company Award Winners
              </h2>
            </motion.div>

            <div className="overflow-hidden border border-cream-200 rounded-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-navy-950 text-cream-50">
                    <th className="text-left px-6 py-4 font-medium text-sm uppercase tracking-wider">
                      Category
                    </th>
                    <th className="text-left px-6 py-4 font-medium text-sm uppercase tracking-wider">
                      Winner
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {yearData.companyWinners.map((winner, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className={`${
                        i % 2 === 0 ? 'bg-cream-50' : 'bg-white'
                      } border-b border-cream-200 last:border-b-0`}
                    >
                      <td className="px-6 py-4 text-navy-600">{winner.category}</td>
                      <td className="px-6 py-4 font-medium text-navy-900">{winner.winner}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Photo Gallery */}
      {galleryImages.length > 0 && (
        <PhotoGallery images={galleryImages} year={yearData.year.toString()} />
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-navy-950">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-display text-3xl md:text-4xl text-cream-50 mb-6">
              Ready to Be Recognised?
            </h2>
            <p className="text-cream-100/60 mb-8">
              Nominations for COLWMA 2026 are now open. Submit your entry today.
            </p>
            <Link href="/#nominate" className="btn-primary">
              Submit Nomination
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
