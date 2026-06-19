'use client';

import React from 'react';
import { ComingSoonPage } from '@/components/pages/ComingSoonPage';

export default function EventsPage() {
  return (
    <ComingSoonPage
      title="Global Events"
      description="Join us for webinars, workshops, and conferences focused on environmental action and community development."
      features={[
        'Upcoming events calendar',
        'Register for webinars and workshops',
        'Connect with global community',
        'Event recordings and materials',
        'Local and international events',
        'Subscribe to event announcements',
      ]}
    />
  );
}
