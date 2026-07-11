'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2018',
    title: 'First steps in media & tech',
    description:
      'Started leading church media production — lighting, sound, live streaming. Built my first systems for real audiences and learned to deliver under tight deadlines.',
  },
  {
    year: '2020',
    title: 'Freelance web development',
    description:
      'Built websites for local businesses in Kampala. Learned the full stack through client work — WordPress, React, and the business side of digital services.',
  },
  {
    year: '2022',
    title: 'Founded Grittrix Technologies',
    description:
      'Launched an AI-first digital agency in Kampala. Hired a team, onboarded 9+ clients across law, e-commerce, travel, fintech, NGO, and tech sectors.',
  },
  {
    year: '2024',
    title: 'Began building EVON',
    description:
      'Started work on a multi-wallet fintech super app for Uganda (UGX) and India (INR). Integrated MTN MoMo, Airtel Money, and cross-border FX — the flagship product.',
  },
  {
    year: '2026',
    title: 'Scaling from Portugal',
    description:
      'On academic exchange at Instituto Politécnico de Bragança. Currently shipping EVON, growing Grittrix, and building the next layer of African payment infrastructure.',
  },
];

function Milestone({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <div ref={ref} className="relative pl-10 pb-16 last:pb-0">
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="absolute left-0 top-1 w-3 h-3 rounded-full bg-lemon border-2 border-cream ring-2 ring-lemon/30 z-10"
      />

      {index < milestones.length - 1 && (
        <div className="absolute left-[5px] top-4 bottom-0 w-0.5 bg-ink/10" />
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: index * 0.12 }}
      >
        <span className="text-xs font-semibold text-lemon uppercase tracking-wider">
          {milestone.year}
        </span>
        <h3 className="font-display text-xl text-ink mt-1 mb-2">
          {milestone.title}
        </h3>
        <p className="text-sm text-ink-light leading-relaxed max-w-lg">
          {milestone.description}
        </p>
      </motion.div>
    </div>
  );
}

export default function TimelineSection() {
  return (
    <section id="story" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-lemon uppercase tracking-widest">
            Founder Story
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-2 max-w-2xl leading-tight">
            From freelancing in Kampala to building fintech for cross-border Africa
          </h2>
        </motion.div>

        <div className="max-w-xl">
          {milestones.map((milestone, idx) => (
            <Milestone key={milestone.year} milestone={milestone} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
