'use client';

import { motion } from 'framer-motion';

const links = [
  {
    label: 'Email',
    href: 'mailto:hello@example.com',
    value: 'hello@example.com',
  },
  {
    label: 'LinkedIn',
    href: '#',
    value: '[TODO: linkedin handle]',
  },
  {
    label: 'GitHub',
    href: '#',
    value: '[TODO: github handle]',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com/@nkangisa?feature=shared',
    value: 'youtube.com/@nkangisa',
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold text-lemon uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-2 mb-4 leading-tight">
              Building something in Africa&apos;s digital economy?
            </h2>
            <p className="text-sm text-ink-light leading-relaxed mb-8">
              Whether you are a client with a project, an investor interested in
              African fintech, or a founder who wants to compare notes — I
              respond to every message.
            </p>

<a
  href="mailto:hello@example.com"
  className="inline-block px-10 py-4 bg-lemon text-ink font-semibold text-sm rounded-full hover:bg-lemon/80 transition-colors mb-12"
>
  Send an Email &rarr;
</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="border-t border-ink/5 pt-8"
          >
            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    link.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="group text-sm"
                >
                  <span className="text-ink-muted group-hover:text-ink transition-colors">
                    {link.label}
                  </span>
                  <br />
                  <span className="text-ink font-medium">{link.value}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
