'use client';

import React from 'react';
import { ComingSoonPage } from '@/components/pages/ComingSoonPage';

export default function MembersPage() {
  return (
    <ComingSoonPage
      title="Member Portal"
      description="Exclusive resources, certificates, and community features for EEC members."
      features={[
        'Member dashboard and profile',
        'Exclusive course access',
        'Certificate management',
        'Volunteer hour tracking',
        'Member community forum',
        'Resource library and downloads',
      ]}
    />
  );
}
