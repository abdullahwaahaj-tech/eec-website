'use client';

import React from 'react';
import { ComingSoonPage } from '@/components/pages/ComingSoonPage';

export default function TeamPage() {
  return (
    <ComingSoonPage
      title="Meet Our Team"
      description="Discover the dedicated individuals leading EEC's global mission."
      features={[
        'Leadership profiles and bios',
        'Team member stories and backgrounds',
        'Departmental organization',
        'Global team presence',
        'Join our team careers page',
        'Leadership advisory board',
      ]}
    />
  );
}
