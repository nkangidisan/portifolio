'use client';

import { motion } from 'framer-motion';

const tags = [
  'Founder @ Grittrix',
  'AI & Data Science Student',
  'Full-Stack Builder',
];

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="inline-block px-4 py-1.5 bg-lemon text-ink text-xs font-semibold uppercase tracking-widest rounded-full mb-6">
            Founder/CEO @ Grittrix Technologies
          </span>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-ink leading-[1.05] tracking-tight mb-6">
            Nkangi
            <br />
            <span className="relative">
              Disan
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-lemon rounded-full" />
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-ink-light max-w-2xl mb-8 leading-relaxed">
            AI &amp; Software Founder building intelligent products
            for Africa and emerging markets.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 text-sm font-medium text-ink-light border border-ink/10 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-ink text-cream font-semibold text-sm rounded-full hover:bg-ink-light transition-colors"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-ink/20 text-ink font-semibold text-sm rounded-full hover:bg-ink hover:text-cream transition-colors"
            >
              Book a Call
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-ink/20 text-ink font-semibold text-sm rounded-full hover:bg-ink hover:text-cream transition-colors"
            >
              Download CV
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="mt-24 flex justify-center"
        >
          <div className="scroll-indicator">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="scroll-dot"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
