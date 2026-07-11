'use client';

import { motion } from 'framer-motion';

interface Project {
  title: string;
  url?: string;
  problem: string;
  stack: string;
  outcome: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: 'EVON',
    url: 'https://ourevon.com',
    problem:
      'Ugandans juggle mobile money (MTN MoMo, Airtel Money), bank accounts, and cash — with no unified wallet that handles both UGX and INR across borders.',
    stack: 'React Native, Expo, Node.js, MTN MoMo API, Airtel Money API',
    outcome:
      'Multi-wallet fintech super app with cross-border FX capability, merchant dashboard, and dual-currency support for Uganda and India.',
    featured: true,
  },
  {
    title: 'Grittrix Technologies',
    url: 'https://grittrix.com',
    problem:
      'African businesses need professional digital presence, but agencies charge Western rates that are out of reach for local SMEs.',
    stack: 'Next.js, React, WordPress, Tailwind CSS, Framer Motion',
    outcome:
      'Delivered 9+ live client sites across law, e-commerce, travel, fintech, NGO, and tech sectors. Built an AI-first agency model that scales.',
  },
  {
    title: 'StaakPay',
    problem:
      'Landlords and tenants in Uganda lack a transparent, digital system for rent collection, tracking, and dispute resolution.',
    stack: 'Web platform, payment integration',
    outcome:
      'Digital rent management platform. Phase 1 ($3,500) and Phase 2 ($2,500) delivered for client engagement.',
  },
  {
    title: 'The Counselify',
    url: 'https://thecounselify.com',
    problem:
      'East African SMEs cannot afford legal retainers, and legal information is fragmented across jurisdictions and languages.',
    stack: 'AI/LLM integration, web platform',
    outcome:
      'AI-native legal operating system that makes legal intelligence accessible to businesses across East Africa.',
  },
  {
    title: 'Grittrix Movies',
    url: 'https://movies.grittrix.com',
    problem:
      'Building a client base requires demonstrating capability first — a streaming site acts as both portfolio piece and lead generator.',
    stack: 'TMDB API, React, responsive design',
    outcome:
      'Free streaming platform with thousands of titles. Serves as a client-acquisition funnel for Grittrix.',
  },
  {
    title: 'Oasis Funeral Service',
    problem:
      'A funeral home needed a modern web presence, digital brochure, and invoicing system to manage client communications.',
    stack: 'Web development, invoicing system',
    outcome:
      'Complete website, digital brochure, and invoicing system delivered as a paid client project.',
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group rounded-2xl border border-ink/5 bg-white p-6 sm:p-8 hover:shadow-sm transition-shadow ${
        project.featured ? 'sm:col-span-2 lg:col-span-3' : ''
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display text-xl sm:text-2xl text-ink">
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lemon transition-colors"
            >
              {project.title}
              <span className="inline-block ml-2 text-sm font-body text-ink-muted opacity-0 group-hover:opacity-100 transition-opacity">
                &nearr;
              </span>
            </a>
          ) : (
            project.title
          )}
        </h3>
      </div>

      <div className="space-y-3">
        <div>
          <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
            Problem
          </span>
          <p className="text-sm text-ink-light mt-1 leading-relaxed">
            {project.problem}
          </p>
        </div>
        <div>
          <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
            Stack
          </span>
          <p className="text-sm text-ink-light mt-1">{project.stack}</p>
        </div>
        <div>
          <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
            Outcome
          </span>
          <p className="text-sm text-ink-light mt-1 leading-relaxed">
            {project.outcome}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-xs font-semibold text-lemon uppercase tracking-widest">
            Featured Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-ink mt-2 max-w-2xl leading-tight">
            Products and platforms I have built
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
