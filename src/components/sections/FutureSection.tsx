'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FutureSection = () => {
  return (
    <section className="py-24 bg-gradient-to-r from-primary-dark to-ocean-blue text-soft-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-clash text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">The Future is Now</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovation, research, and leadership are driving our movement forward.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Innovation', description: 'Cutting-edge solutions for environmental challenges' },
            { title: 'Research', description: 'Data-driven insights for impact' },
            { title: 'Leadership', description: 'Global vision, local action' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white/10 backdrop-blur border border-growth-green/30 rounded-xl hover:bg-white/20 transition-colors group cursor-pointer"
            >
              <h3 className="font-clash text-2xl font-bold mb-3 text-growth-green group-hover:text-gold-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-200 mb-4">{item.description}</p>
              <ArrowRight size={20} className="text-growth-green group-hover:translate-x-2 transition-transform" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
