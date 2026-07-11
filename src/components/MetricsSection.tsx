'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '6', label: 'Products shipped', suffix: '' },
  { value: '9', label: 'Live client sites', suffix: '+' },
  { value: '1', label: 'Hackathon winner', suffix: '\u00d7' },
  { value: '3', label: 'Countries', suffix: '' },
];

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}) {
  const ref = useRef(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="font-display text-4xl sm:text-5xl text-lemon">
        {stat.suffix}
        {stat.value}
      </div>
      <div className="text-sm text-ink-muted mt-2">{stat.label}</div>
    </motion.div>
  );
}

export default function MetricsSection() {
  return (
    <section className="py-28 px-6 border-t border-ink/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="text-xs font-semibold text-lemon uppercase tracking-widest">
            Proof of Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl text-ink mt-2">
            Real products, real clients
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <StatCard key={stat.label} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
