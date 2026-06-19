'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ContactForm } from '@/components/forms/ContactForm';

export default function ContactPage() {
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
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 sm:p-12 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-800"
        >
          <ContactForm />
        </motion.div>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <h3 className="font-clash text-xl font-bold text-text-dark dark:text-soft-white mb-3">Email</h3>
            <p className="text-gray-600 dark:text-gray-300">Content To Be Added By EEC</p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <h3 className="font-clash text-xl font-bold text-text-dark dark:text-soft-white mb-3">Phone</h3>
            <p className="text-gray-600 dark:text-gray-300">Content To Be Added By EEC</p>
          </div>
          <div className="p-8 bg-gray-50 dark:bg-gray-900/50 rounded-lg text-center">
            <h3 className="font-clash text-xl font-bold text-text-dark dark:text-soft-white mb-3">Address</h3>
            <p className="text-gray-600 dark:text-gray-300">Content To Be Added By EEC</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
