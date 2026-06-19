'use client';

import React from 'react';
import { EarthHero } from '@/components/hero/EarthHero';
import { ScrollStories } from '@/components/sections/ScrollStories';
import { FutureSection } from '@/components/sections/FutureSection';
import { NewsletterForm } from '@/components/forms/NewsletterForm';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <EarthHero />
      <ScrollStories />
      <FutureSection />

      {/* Newsletter CTA Section */}
      <section className="py-24 bg-forest-green text-soft-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-clash text-4xl sm:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-lg text-gray-200 mb-8">
              Get the latest news about our environmental and humanitarian initiatives.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
