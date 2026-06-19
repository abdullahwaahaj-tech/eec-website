'use client';

import React from 'react';
import { ComingSoonPage } from '@/components/pages/ComingSoonPage';

export default function ProjectsPage() {
  return (
    <ComingSoonPage
      title="Our Projects"
      description="Discover our environmental and humanitarian initiatives driving global impact."
      features={[
        'Active project tracking and updates',
        'Project goals and impact metrics',
        'Get involved in ongoing initiatives',
        'Project gallery and documentation',
        'Download reports and case studies',
        'Subscribe to project updates',
      ]}
    />
  );
}
