'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function NewsPage() {
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
            News & Updates
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay informed about our latest initiatives, achievements, and announcements.
          </p>
        </motion.div>
      </section>

      {/* Content To Be Added By EEC */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-12 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-400 dark:border-purple-600 rounded-2xl"
        >
          <h2 className="font-clash text-2xl font-bold text-purple-900 dark:text-purple-200 mb-4">📰 Content To Be Added By EEC</h2>
          <p className="text-purple-800 dark:text-purple-100 mb-4">
            This page will feature:
          </p>
          <ul className="list-disc list-inside text-purple-800 dark:text-purple-100 space-y-2">
            <li>Latest news articles and announcements</li>
            <li>Project updates and achievements</li>
            <li>Press releases</li>
            <li>Impact stories and testimonials</li>
            <li>Event announcements</li>
            <li>Research and data releases</li>
            <li>Media coverage and features</li>
            <li>Search and filtering by category/date</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
