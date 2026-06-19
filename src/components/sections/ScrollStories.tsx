'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Leaf, Zap, Heart } from 'lucide-react';

const scenes = [
  {
    title: 'Humanity',
    subtitle: 'Education • Communities • Volunteers • Connection',
    icon: Heart,
    color: 'from-ocean-blue to-growth-green',
    items: [
      { icon: Users, label: 'Community' },
      { icon: Zap, label: 'Education' },
      { icon: Heart, label: 'Impact' },
    ],
  },
  {
    title: 'Nature',
    subtitle: 'Forests • Oceans • Wildlife • Biodiversity',
    icon: Leaf,
    color: 'from-growth-green to-forest-green',
    items: [
      { icon: Leaf, label: 'Forests' },
      { icon: Users, label: 'Ecosystems' },
      { icon: Zap, label: 'Conservation' },
    ],
  },
];

export const ScrollStories = () => {
  return (
    <section className="py-24 bg-soft-white dark:bg-primary-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {scenes.map((scene, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className={`mb-24 p-8 sm:p-16 rounded-2xl bg-gradient-to-r ${scene.color} text-white`}
          >
            <div className="flex items-center gap-4 mb-6">
              <scene.icon size={40} />
              <h2 className="font-clash text-4xl sm:text-5xl font-bold">{scene.title}</h2>
            </div>

            <p className="text-lg sm:text-xl mb-12 text-gray-100">{scene.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {scene.items.map((item, itemIdx) => (
                <motion.div
                  key={itemIdx}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/10 backdrop-blur rounded-lg text-center hover:bg-white/20 transition-colors"
                >
                  <item.icon size={32} className="mx-auto mb-3" />
                  <p className="font-semibold">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Unity Message */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <h2 className="font-clash text-5xl sm:text-6xl font-bold text-text-dark dark:text-soft-white mb-6">
            One Earth.<br />
            One Future.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Humanity and nature are interconnected. Together, we build a sustainable world.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
