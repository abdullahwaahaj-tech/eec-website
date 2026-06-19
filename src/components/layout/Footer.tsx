'use client';

import React from 'react';
import Link from 'next/link';
import { NAVIGATION, COMING_SOON_PAGES } from '@/lib/constants';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-soft-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-clash font-bold text-2xl text-growth-green mb-4">EEC</h3>
            <p className="text-sm text-gray-300">
              Echoes of Earth Council is a global movement building sustainable communities through education, environmental action, and collective impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-accent">Quick Links</h4>
            <ul className="space-y-2">
              {NAVIGATION.slice(1, 5).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-growth-green transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-accent">Community</h4>
            <ul className="space-y-2">
              {COMING_SOON_PAGES.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-growth-green transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-accent">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-growth-green transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-sm text-gray-300 hover:text-growth-green transition-colors">
                  Support Us
                </Link>
              </li>
              <li>
                <Link href="/internships" className="text-sm text-gray-300 hover:text-growth-green transition-colors">
                  Internships
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Echoes of Earth Council. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-growth-green transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-growth-green transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-growth-green transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
