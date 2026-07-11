'use client';

import { motion } from 'framer-motion';
import CurrencyWidget from './CurrencyWidget';

const metrics = [
  { label: 'Products shipped', value: '6' },
  { label: 'Live client sites', value: '9+' },
  { label: 'Hackathon wins', value: '1' },
  { label: 'Countries active', value: '3' },
];

const roadmap = [
  'Scale EVON to 10,000+ users across Uganda and India',
  'Launch Grittrix Studio — AI-powered website builder for African SMEs',
  'Expand cross-border payment rails to Kenya and Rwanda',
  'Build the API layer for mobile money aggregation',
];

export default function InvestorSection() {
  return (
    <section id="investor" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-lemon uppercase tracking-widest">
            For Investors & Partners
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-2 max-w-3xl leading-tight">
            Building payment infrastructure for Africa&apos;s next billion users
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-3 space-y-10">
            <div>
              <h3 className="font-display text-xl text-ink mb-3">
                The market problem
              </h3>
              <div className="space-y-4 text-sm text-ink-light leading-relaxed">
                <p>
                  Mobile money is Africa&apos;s dominant financial channel —
                  MTN MoMo and Airtel Money process billions in Uganda alone.
                  Yet there is no unified wallet that handles UGX and INR across
                  borders, and most web-based money apps suffer from low user
                  trust due to poor UX and security concerns.
                </p>
                <p>
                  Existing fintech solutions are built for Western markets and
                  bolted onto African payment rails. We are building from the
                  ground up — for African users, on African infrastructure, with
                  African regulatory reality in mind.
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-ink mb-3">Traction</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {metrics.map((m) => (
                  <div
                    key={m.label}
                    className="bg-white border border-ink/5 rounded-xl p-4"
                  >
                    <div className="font-display text-2xl text-lemon">
                      {m.value}
                    </div>
                    <div className="text-xs text-ink-muted mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-xl text-ink mb-3">Roadmap</h3>
              <ul className="space-y-3">
                {roadmap.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-ink-light"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-lemon shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="#contact"
              className="inline-block px-8 py-3 bg-ink text-cream font-semibold text-sm rounded-full hover:bg-ink-light transition-colors"
            >
              Open to strategic partnerships &rarr;
            </a>
          </div>

          <div className="lg:col-span-2 flex items-start justify-center pt-8 lg:pt-0">
            <CurrencyWidget />
          </div>
        </div>
      </div>
    </section>
  );
}
