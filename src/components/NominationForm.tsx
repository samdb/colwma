'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { categories } from '@/data/years';

export default function NominationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    anonymous: 'no',
    company: '',
    categories: [] as string[],
    reason: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCategoryToggle = (category: string) => {
    setFormData((prev) => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter((c) => c !== category)
        : prev.categories.length < 8
        ? [...prev.categories, category]
        : prev.categories,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <section id="nominate" className="py-24 lg:py-32 bg-cream-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 bg-gold-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-navy-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="heading-display text-3xl md:text-4xl text-navy-900 mb-4">
              Thank You for Your Nomination
            </h2>
            <p className="text-navy-600 mb-4">
              Your submission will be reviewed by the independent judging panel.
            </p>
            <p className="text-navy-600 mb-8">
              Companies and Individuals will be notified of successful award category submissions
              which will then become formal Nominations for COLWMA 2026. Company nominations will
              appear in the online public vote which will commence on <strong>16th February 2026</strong>.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  anonymous: 'no',
                  company: '',
                  categories: [],
                  reason: '',
                });
              }}
              className="btn-outline text-navy-900 border-navy-900 hover:bg-navy-900 hover:text-cream-50"
            >
              Submit Another Nomination
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="nominate" className="py-24 lg:py-32 bg-cream-100">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-gold-500 text-sm uppercase tracking-[0.2em] font-medium">
              Nominations Open
            </span>
            <h2 className="heading-display text-4xl md:text-5xl text-navy-900 mt-4 mb-6">
              Submit Your Nomination
            </h2>
            <p className="text-navy-600 max-w-2xl mx-auto">
              Submissions for the prestigious City of London Wealth Management Awards are now being accepted.
              The independent panel of judges will carefully review all Company and Individual submissions.
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white shadow-xl shadow-navy-950/5 rounded-sm p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-navy-700 mb-2">
                Full Name <span className="text-gold-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                Email Address <span className="text-gold-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Anonymous */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-navy-700 mb-2">
              Do you prefer to make this submission anonymously?
            </label>
            <div className="flex gap-6">
              {['yes', 'no'].map((option) => (
                <label key={option} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="anonymous"
                    value={option}
                    checked={formData.anonymous === option}
                    onChange={(e) => setFormData({ ...formData, anonymous: e.target.value })}
                    className="w-4 h-4 text-gold-500 focus:ring-gold-500 border-cream-200"
                  />
                  <span className="text-navy-700 capitalize">{option}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="mb-8">
            <label htmlFor="company" className="block text-sm font-medium text-navy-700 mb-2">
              Company you are entering <span className="text-gold-500">*</span>
            </label>
            <input
              type="text"
              id="company"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
              placeholder="Company name"
            />
          </div>

          {/* Categories */}
          <div className="mb-8" id="categories">
            <label className="block text-sm font-medium text-navy-700 mb-2">
              Award Categories <span className="text-gold-500">*</span>
              <span className="font-normal text-navy-500 ml-2">
                (Select up to 8 categories)
              </span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-4 border border-cream-200 rounded-sm max-h-64 overflow-y-auto">
              {categories.map((category) => (
                <label
                  key={category}
                  className={`flex items-start gap-2 p-2 rounded cursor-pointer transition-colors ${
                    formData.categories.includes(category)
                      ? 'bg-gold-500/10'
                      : 'hover:bg-cream-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.categories.includes(category)}
                    onChange={() => handleCategoryToggle(category)}
                    className="mt-0.5 w-4 h-4 text-gold-500 focus:ring-gold-500 border-cream-200 rounded"
                  />
                  <span className="text-sm text-navy-700">{category}</span>
                </label>
              ))}
            </div>
            {formData.categories.length > 0 && (
              <p className="mt-2 text-sm text-navy-500">
                {formData.categories.length}/8 categories selected
              </p>
            )}
          </div>

          {/* Reason */}
          <div className="mb-8">
            <label htmlFor="reason" className="block text-sm font-medium text-navy-700 mb-2">
              Reason for nomination <span className="text-gold-500">*</span>
            </label>
            <textarea
              id="reason"
              required
              rows={6}
              value={formData.reason}
              onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
              className="w-full px-4 py-3 border border-cream-200 rounded-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
              placeholder="Please provide details about why this company/individual deserves recognition..."
            />
          </div>

          {/* Submit */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-navy-500">
              <em>There are no charges involved for submissions.</em>
            </p>
            <button
              type="submit"
              disabled={isSubmitting || formData.categories.length === 0}
              className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                'Submit Nomination'
              )}
            </button>
          </div>
        </motion.form>

        {/* Contact info */}
        <p className="text-center text-navy-500 mt-8">
          For further information, contact:{' '}
          <a href="mailto:vanessa.palmer@goodacreuk.com" className="text-gold-500 hover:underline">
            vanessa.palmer@goodacreuk.com
          </a>{' '}
          or{' '}
          <a href="mailto:rose.appleby@goodacreuk.com" className="text-gold-500 hover:underline">
            rose.appleby@goodacreuk.com
          </a>
        </p>
      </div>
    </section>
  );
}
