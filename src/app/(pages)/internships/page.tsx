'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { InternshipForm } from '@/components/forms/InternshipForm';

export default function InternshipsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-soft-white dark:bg-primary-dark">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-clash text-5xl sm:text-6xl font-bold text-text-dark dark:text-soft-white mb-6">
            Internships & Opportunities
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join our global team and make a difference in environmental protection and community development.
          </p>
        </motion.div>
      </section>

      {/* Opportunities Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-clash text-3xl font-bold text-text-dark dark:text-soft-white mb-8">Available Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Environmental Research', category: 'Research' },
              { title: 'Community Outreach', category: 'Community' },
              { title: 'Digital Marketing', category: 'Marketing' },
              { title: 'Education Program', category: 'Education' },
              { title: 'Sustainability', category: 'Environment' },
              { title: 'Content To Be Added By EEC', category: 'Coming Soon' },
            ].map((position, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-growth-green dark:hover:border-growth-green transition-colors"
              >
                <span className="inline-block px-3 py-1 bg-growth-green/20 text-growth-green text-xs font-semibold rounded-full mb-3">
                  {position.category}
                </span>
                <h3 className="font-semibold text-text-dark dark:text-soft-white">{position.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Application Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-8">
            <h2 className="font-clash text-3xl font-bold text-text-dark dark:text-soft-white mb-4">Apply Now</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Submit your application below. We review all applications and will be in touch within 2-3 weeks.
            </p>
          </div>

          <div className="p-8 sm:p-12 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800">
            <InternshipForm />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
