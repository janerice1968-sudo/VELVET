
import React from 'react';
import { Model, Testimonial } from './types';

export const MODELS: Model[] = [
  {
    id: '1',
    name: 'Elena',
    age: 24,
    location: 'Miami, FL',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=600&h=800',
    isLive: true,
    viewerCount: 1240,
    tags: ['Seductive', 'Latin Vibes', 'Midnight Dance']
  },
  {
    id: '2',
    name: 'Sasha',
    age: 26,
    location: 'Los Angeles, CA',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800',
    isLive: true,
    viewerCount: 856,
    tags: ['Elegant Queen', '1-on-1 Private']
  },
  {
    id: '3',
    name: 'Jordan',
    age: 22,
    location: 'New York, NY',
    imageUrl: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600&h=800',
    isLive: false,
    tags: ['Sweet Temptation', 'Artistic Shoot']
  },
  {
    id: '4',
    name: 'Chloe',
    age: 25,
    location: 'Austin, TX',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=600&h=800',
    isLive: true,
    viewerCount: 3200,
    tags: ['Top Elite', 'High Challenge']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    user: 'Mark S.',
    content: "The quality of the live shows here is unparalleled. Finally, a platform that feels high-end, safe, and extremely exciting.",
    rating: 5
  },
  {
    id: 't2',
    user: 'Jessica R.',
    content: "Met some incredible people through the private matching system. The UI design is simply beautiful.",
    rating: 5
  }
];

export const ICONS = {
  Heart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
  ),
  Camera: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
  ),
  Shield: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
  ),
  User: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  )
};
