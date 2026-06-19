'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { COMING_SOON_PAGES } from '@/lib/constants';

interface ComingSoonPageProps {
  title: string;
  description: string;
  features: string[];
}

export const ComingSoonPage = ({ title, description, features }: ComingSoonPageProps) => {
  const [email, setEmail] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);

  const handleNotify = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement notification system
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-soft-white dark:bg-primary-dark">
      {/* Hero */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 py-2 bg-growth-green/20 text-growth-green rounded-full text-sm font-semibold mb-6">
            Coming Soon
          </div>
          <h1 className="font-clash text-5xl sm:text-6xl font-bold text-text-dark dark:text-soft-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
        </motion.div>
      </div>

      {/* Features */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="font-clash text-2xl sm:text-3xl font-bold text-text-dark dark:text-soft-white mb-8">
            What to Expect
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
                className="flex gap-4 items-start p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50"
              >
                <CheckCircle size={24} className="text-growth-green flex-shrink-0 mt-1" />
                <p className="text-text-dark dark:text-soft-white">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Notify Me Form */}
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-forest-green/10 dark:bg-forest-green/20 rounded-2xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="font-clash text-2xl font-bold text-text-dark dark:text-soft-white mb-4 text-center">
            Get Notified
          </h3>
          <p className="text-text-dark dark:text-soft-white text-center mb-6 text-sm">
            Be the first to know when {title.toLowerCase()} launches.
          </p>
          <form onSubmit={handleNotify} className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 rounded-lg bg-soft-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:border-growth-green outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-full py-3 bg-growth-green hover:bg-forest-green text-white font-semibold rounded-lg transition-colors"
            >
              {submitted ? 'Thanks! We\'ll notify you' : 'Notify Me'}
            </button>
          </form>
        </motion.div>
      </div>

      {/* Roadmap Preview */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-clash text-2xl sm:text-3xl font-bold text-text-dark dark:text-soft-white mb-8 text-center"
        >
          Other Coming Soon Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {COMING_SOON_PAGES.map((page, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + idx * 0.05 }}
              className="p-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <p className="font-semibold text-text-dark dark:text-soft-white">{page.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
