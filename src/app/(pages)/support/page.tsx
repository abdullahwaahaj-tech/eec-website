'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Handshake } from 'lucide-react';

export default function SupportPage() {
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
            Support Our Mission
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Help us create a sustainable future through donations, partnerships, and volunteer support.
          </p>
        </motion.div>
      </section>

      {/* Support Options */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: Heart,
              title: 'Donations',
              description: 'Support our environmental and humanitarian initiatives',
              status: 'Coming Soon',
            },
            {
              icon: Handshake,
              title: 'Partnerships',
              description: 'Collaborate with us on projects and initiatives',
              status: 'Coming Soon',
            },
            {
              icon: Users,
              title: 'Volunteering',
              description: 'Join our global volunteer community',
              status: 'Coming Soon',
            },
          ].map((option, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.1 }}
              className="p-8 bg-gradient-to-br from-growth-green/10 to-forest-green/10 dark:from-growth-green/5 dark:to-forest-green/5 rounded-2xl border border-growth-green/20 dark:border-growth-green/10 hover:border-growth-green dark:hover:border-growth-green transition-colors"
            >
              <option.icon size={40} className="text-growth-green mb-4" />
              <h3 className="font-clash text-2xl font-bold text-text-dark dark:text-soft-white mb-2">{option.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{option.description}</p>
              <span className="inline-block px-3 py-1 bg-gold-accent/20 text-gold-accent text-sm font-semibold rounded-full">
                {option.status}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Impact Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-forest-green/10 dark:bg-forest-green/20 rounded-2xl mb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h2 className="font-clash text-4xl font-bold text-text-dark dark:text-soft-white mb-8">Your Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: 'Supporters', value: 'Content To Be Added By EEC' },
              { label: 'Projects Funded', value: 'Content To Be Added By EEC' },
              { label: 'Communities Helped', value: 'Content To Be Added By EEC' },
              { label: 'Impact Metrics', value: 'Content To Be Added By EEC' },
            ].map((stat, idx) => (
              <div key={idx} className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{stat.label}</p>
                <p className="font-clash text-2xl font-bold text-growth-green">{stat.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="font-clash text-3xl font-bold text-text-dark dark:text-soft-white mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Contact us to learn more about how you can support our mission to protect the environment and empower communities.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-growth-green hover:bg-forest-green text-white font-semibold rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}
