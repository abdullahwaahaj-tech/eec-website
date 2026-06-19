'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VisionPage() {
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
            Our Vision
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A sustainable future where humanity and nature thrive together through collective action and innovation.
          </p>
        </motion.div>
      </section>

      {/* Content To Be Added By EEC */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-12 bg-green-50 dark:bg-green-900/20 border-2 border-green-400 dark:border-green-600 rounded-2xl"
        >
          <h2 className="font-clash text-2xl font-bold text-green-900 dark:text-green-200 mb-4">🌍 Content To Be Added By EEC</h2>
          <p className="text-green-800 dark:text-green-100 mb-4">
            This page should include:
          </p>
          <ul className="list-disc list-inside text-green-800 dark:text-green-100 space-y-2">
            <li>Long-term vision for global sustainability</li>
            <li>Climate action and environmental restoration goals</li>
            <li>Education and literacy targets</li>
            <li>Community development aspirations</li>
            <li>Youth empowerment vision</li>
            <li>International expansion strategy</li>
            <li>Innovation and research direction</li>
            <li>Humanitarian impact targets</li>
          </ul>
        </motion.div>
      </section>
    </div>
  );
}
