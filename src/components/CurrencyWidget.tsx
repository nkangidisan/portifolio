'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const RATE_UGX_TO_INR = 0.021;

export default function CurrencyWidget() {
  const [from, setFrom] = useState<'UGX' | 'INR'>('UGX');
  const [amount, setAmount] = useState(100000);

  const to = from === 'UGX' ? 'INR' : 'UGX';
  const rate = from === 'UGX' ? RATE_UGX_TO_INR : 1 / RATE_UGX_TO_INR;
  const converted = amount * rate;

  function swap() {
    setFrom(to);
    setAmount(Math.round(converted));
  }

  return (
    <div className="max-w-sm mx-auto bg-white border border-ink/5 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
          Live Rate
        </span>
        <span className="text-xs font-semibold text-lemon bg-lemon/10 px-3 py-1.5 rounded-full">
          1 {from} = {rate.toFixed(4)} {to}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex-1">
          <label className="text-xs text-ink-muted mb-1 block">From</label>
          <div className="flex items-center gap-2 bg-cream rounded-xl px-4 py-3">
            <span className="text-lg font-display text-ink font-semibold">
              {from}
            </span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              className="text-lg font-display text-ink bg-transparent border-none outline-none w-full text-right"
              aria-label={`Amount in ${from}`}
            />
          </div>
        </div>

        <button
          onClick={swap}
          className="mt-5 w-10 h-10 rounded-full bg-lemon flex items-center justify-center shrink-0 hover:bg-lemon/80 transition-colors focus-visible:outline-2 focus-visible:outline-lemon"
          aria-label={`Swap from ${from} to ${to}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M4 10L12 10M12 10L9 7M12 10L9 13"
              stroke="#111110"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 6L4 6M4 6L7 3M4 6L7 9"
              stroke="#111110"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="flex-1">
          <label className="text-xs text-ink-muted mb-1 block text-right">To</label>
          <div className="flex items-center gap-2 bg-cream rounded-xl px-4 py-3">
            <span className="text-lg font-display text-ink font-semibold">
              {to}
            </span>
            <motion.span
              key={`${to}-${Math.round(converted)}`}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="text-lg font-display text-ink w-full text-right"
            >
              {Math.round(converted).toLocaleString()}
            </motion.span>
          </div>
        </div>
      </div>

      <p className="text-center text-xs text-ink-muted mt-4">
        {from === 'UGX'
          ? `${amount.toLocaleString()} UGX = ${Math.round(converted).toLocaleString()} INR`
          : `${amount.toLocaleString()} INR = ${Math.round(converted).toLocaleString()} UGX`}
      </p>
    </div>
  );
}
