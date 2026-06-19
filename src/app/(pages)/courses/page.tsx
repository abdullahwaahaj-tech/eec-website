'use client';

import React from 'react';
import { ComingSoonPage } from '@/components/pages/ComingSoonPage';

export default function CoursesPage() {
  return (
    <ComingSoonPage
      title="Educational Courses"
      description="Learn about environmental protection, sustainability, and humanitarian action through our comprehensive courses."
      features={[
        'Beginner to advanced courses',
        'Self-paced learning modules',
        'Expert instructors and mentors',
        'Certificates upon completion',
        'Global community of learners',
        'Interactive projects and assignments',
      ]}
    />
  );
}
