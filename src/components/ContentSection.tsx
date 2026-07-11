'use client';

import { motion } from 'framer-motion';

export default function ContentSection() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-xs font-semibold text-lemon uppercase tracking-widest">
            Content & Thought Leadership
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-2 max-w-2xl leading-tight">
            Sharing what I build and what I learn
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.a
            href="https://youtube.com/@nkangisa?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-white border border-ink/5 rounded-2xl p-6 sm:p-8 hover:shadow-sm transition-shadow"
          >
            <div className="text-3xl mb-4">&#9654;</div>
            <h3 className="font-display text-xl text-ink mb-2 group-hover:text-lemon transition-colors">
              YouTube Channel
            </h3>
            <p className="text-sm text-ink-light leading-relaxed">
              Covering tech, money, and African business growth. Walkthroughs of
              products I am building, founder insights, and the reality of
              building a startup from Kampala.
            </p>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white border border-ink/5 rounded-2xl p-6 sm:p-8"
          >
            <div className="text-3xl mb-4 font-display text-lemon">10wk</div>
            <h3 className="font-display text-xl text-ink mb-2">
              AI &amp; Digital Skills Curriculum
            </h3>
            <p className="text-sm text-ink-light leading-relaxed">
              Designed and teach a 10-week program covering AI fundamentals,
              web development, and digital business skills. Bridging the gap
              between academic knowledge and market-ready capability in Uganda.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
