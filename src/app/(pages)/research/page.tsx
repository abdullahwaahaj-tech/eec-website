'use client';

import React from 'react';
import { ComingSoonPage } from '@/components/pages/ComingSoonPage';

export default function ResearchPage() {
  return (
    <ComingSoonPage
      title="Research Hub"
      description="Access data-driven research and insights on environmental sustainability and community impact."
      features={[
        'Research papers and publications',
        'Data dashboards and visualizations',
        'Climate and environmental data',
        'Case studies and findings',
        'Download research reports',
        'Collaborate on research initiatives',
      ]}
    />
  );
}
