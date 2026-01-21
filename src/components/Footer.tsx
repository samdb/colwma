import Link from 'next/link';
import { getAvailableYears } from '@/data/years';

export default function Footer() {
  const years = getAvailableYears();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-cream-100/80">
      {/* Decorative top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="font-[family-name:var(--font-display)] text-2xl text-gold-400 mb-2">
              COLWMA
            </div>
            <p className="text-sm text-cream-100/50 mb-6">
              City of London Wealth Management Awards
            </p>
            <p className="text-sm leading-relaxed text-cream-100/60">
              Celebrating excellence in wealth management since 2014. Held annually at the historic Guildhall in the City of London.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold-500 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/mudlarkers-club" className="text-sm hover:text-gold-400 transition-colors">
                  Mudlarkers Club
                </Link>
              </li>
              <li>
                <Link href="/#nominate" className="text-sm hover:text-gold-400 transition-colors">
                  Submit Nomination
                </Link>
              </li>
              <li>
                <Link href="/#categories" className="text-sm hover:text-gold-400 transition-colors">
                  Award Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Past Years */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold-500 mb-6">
              Past Years
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {years.slice(0, 9).map((year) => (
                <Link
                  key={year}
                  href={`/${year}`}
                  className="text-sm hover:text-gold-400 transition-colors"
                >
                  {year}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-gold-500 mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-cream-100/50">General Enquiries:</span>
                <br />
                <a
                  href="mailto:vanessa.palmer@goodacreuk.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  vanessa.palmer@goodacreuk.com
                </a>
              </li>
              <li>
                <span className="text-cream-100/50">Event Information:</span>
                <br />
                <a
                  href="mailto:rose.appleby@goodacreuk.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  rose.appleby@goodacreuk.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-navy-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-100/40">
            &copy; {currentYear} City of London Wealth Management Awards. All rights reserved.
          </p>
          <p className="text-xs text-cream-100/40">
            Organised by{' '}
            <a
              href="https://goodacreuk.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold-400 transition-colors"
            >
              Goodacre UK
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
