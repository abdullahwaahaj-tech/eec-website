'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutPage() {
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
            About Echoes of Earth Council
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding our organization, vision, and commitment to global environmental and humanitarian action.
          </p>
        </motion.div>
      </section>

      {/* Content To Be Added By EEC */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-12 bg-yellow-50 dark:bg-yellow-900/20 border-2 border-yellow-400 dark:border-yellow-600 rounded-2xl"
        >
          <h2 className="font-clash text-2xl font-bold text-yellow-900 dark:text-yellow-200 mb-4">📝 Content To Be Added By EEC</h2>
          <p className="text-yellow-800 dark:text-yellow-100 mb-4">
            This page should include:
          </p>
          <ul className="list-disc list-inside text-yellow-800 dark:text-yellow-100 space-y-2">
            <li>Organization history and background</li>
            <li>Core values and principles</li>
            <li>Global reach and presence</li>
            <li>Organizational structure (Coming Soon)</li>
            <li>Key achievements and milestones</li>
            <li>Partnerships and collaborations (Coming Soon)</li>
            <li>Commitment to sustainability and impact</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
