'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MissionPage() {
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
            Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Driving meaningful change through environmental protection, education, and community empowerment.
          </p>
        </motion.div>
      </section>

      {/* Content To Be Added By EEC */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-12 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-400 dark:border-blue-600 rounded-2xl"
        >
          <h2 className="font-clash text-2xl font-bold text-blue-900 dark:text-blue-200 mb-4">📋 Content To Be Added By EEC</h2>
          <p className="text-blue-800 dark:text-blue-100 mb-4">
            This page should include:
          </p>
          <ul className="list-disc list-inside text-blue-800 dark:text-blue-100 space-y-2">
            <li>Mission statement and core objectives</li>
            <li>Strategic focus areas</li>
            <li>Environmental protection initiatives</li>
            <li>Educational programs and approach</li>
            <li>Community development strategies</li>
            <li>Humanitarian impact focus</li>
            <li>Specific goals and targets</li>
            <li>Timeline and milestones</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
