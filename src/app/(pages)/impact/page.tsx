'use client';

import React from 'react';
import { ComingSoonPage } from '@/components/pages/ComingSoonPage';

export default function ImpactPage() {
  return (
    <ComingSoonPage
      title="Impact Dashboard"
      description="Real-time insights into our global environmental and humanitarian impact."
      features={[
        'Real-time impact metrics',
        'Community statistics and growth',
        'Environmental metrics and progress',
        'Interactive data visualizations',
        'Regional impact breakdowns',
        'Impact stories and testimonials',
      ]}
    />
  );
}
