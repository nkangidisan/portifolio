'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const links = [
  { href: '#story', label: 'Story' },
  { href: '#projects', label: 'Projects' },
  { href: '#investor', label: 'Investor' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    );

    document.querySelectorAll('section[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-md border-b border-ink/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="font-display text-lg text-ink tracking-tight">
          Nkangi Disan
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-ink ${
                active === link.href.slice(1)
                  ? 'text-ink border-b-2 border-lemon'
                  : 'text-ink-muted'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-semibold bg-lemon text-ink px-5 py-2 rounded-full hover:bg-lemon/80 transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <motion.span
            animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-ink"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block w-6 h-0.5 bg-ink"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="block w-6 h-0.5 bg-ink"
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-ink/5"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-ink-muted hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="text-sm font-semibold bg-lemon text-ink px-5 py-2.5 rounded-full text-center transition-colors hover:bg-lemon/80"
              >
                Book a Call
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
